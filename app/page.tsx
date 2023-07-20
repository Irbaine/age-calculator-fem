"use client"
import Image from 'next/image'
import './globals.css'
import Poppins from 'next/font/local'
import arrow from '../public/icon-arrow.svg'
import {useMotionValue , useSpring , useInView, motion} from "framer-motion"
import React , {useEffect, useRef, useState } from 'react'


const poppinsBold = Poppins({
  src: '../public/fonts/Poppins-ExtraBoldItalic.ttf',
  display: 'swap',
})

const poppins = Poppins({
  src: '../public/fonts/Poppins-Bold.ttf',
  display: 'swap',
  weight: '800',
})

const poppinsLight = Poppins({
  src: '../public/fonts/Poppins-Regular.ttf',
  display: 'swap',
})


export default function Home(){
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [valid, setValid] = React.useState<boolean>(false);
  const [isSubmit, setSubmit] = React.useState<boolean>(false);
  const [total, setTotal] = useState<{day: null | number; month: number | null; year: number | null}>({day: null , month: null , year: null});
  const [day, setDay] = React.useState<number | null>(null);
  const [month, setMonth] = React.useState<number>();
  const [year, setYear] = React.useState<number>();
  const [leap, setLeap] = React.useState<{state: boolean; days: number}>({state: false, days:0});
  const [maxDays, setMaxDays] = useState(30);
  const [error, setError] = useState<{day: boolean; month: boolean; year: boolean}>({day: false, month: false, year: false});
  
  const longMonths = [1,3,5,7,8,10,12];


  const AnimatedNumbers = ({value}) => {
    const ref = useRef (null);
    
    const motionValue = useMotionValue (0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const isInView = useInView(ref, {once: true}); //runs animation when in view, once
    
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    
    useEffect(()=> {
        springValue.on("change", (latest) => {
            if( ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    
    return <span ref={ref}></span>
    }

  function checkLeapYear (year:number){
    const isLeap = new Date(year, 1, 29).getDate() === 29;
    
    if (isLeap){
      setLeap((prevState)=> ({...prevState, state:true }));
      
    } else {setLeap((prevState)=> ({...prevState, state:false })) }
}

// Seting max month days
useEffect(() => {
  if (longMonths.some((m)=> m == month)){ // typescript did not recognize month when i used .inclues instead of .some()
    setMaxDays(31);
  } else if (month == 2 && (leap.state)){
    setMaxDays(29);
  } else if (month == 2){
    setMaxDays(28);
  } else { setMaxDays(30); }
}
, [month, leap.state])

// Leap Days Calculation
  useEffect(
    ()=>{
    function isLeapYear(value:number) {
      return (value % 4 === 0 && value % 100 !== 0) || (value % 400 === 0);
    }
    
    function countLeaps(end:number, current:number) {
      let count = 0;
    
      for (let y = end; y > 1500 && y < current; y++) {
        if (isLeapYear(y)) {
          count++;
        }
      }
      return setLeap((prevState) => ({...prevState, days: prevState.days + count }));

    };
    
    
    countLeaps(year!, currentYear);
     }
  
  ,[year])


// On Submition
  function submit (){
    const checker = ()=>{  
    if (total.day < 1){
    setMonth( month! - 1);
    setDay(maxDays - day! - leap.days);
  } else if (currentMonth < month!){
    setTotal((prevState)=> ({...prevState,  year: currentYear-year!-1  })); 
    setTotal((prevState)=> ({...prevState,  month: (12 - currentMonth) } ));
  }}  
  if(!month || !day || !year ){
    setValid(false);
    !day ? setError((prevState)=> ({...prevState, day: true})) : setError((prevState)=> ({...prevState, day: false}));
    !month ? setError((prevState)=> ({...prevState, month: true})) : setError((prevState)=> ({...prevState, month: false}));
    !year ? setError((prevState)=> ({...prevState, year: true})) : setError((prevState)=> ({...prevState, year: false}));
    checker();
  } else {setError({day: false, month: false, year: false}); setValid(true);
    setTotal((prevState)=> ({...prevState,  day: (currentDay-day! + leap.days) , month: currentMonth-month! , year: currentYear-year! }));
    checker();
    setSubmit(true);
  }}
  
  const handleKeyPress = e =>{
    if (e.key === "Enter"){
      submit();
    }}

  return (
    <motion.main className={`flex flex-col p-[2%] justify-center min-w-[280px] max-w-[750px] max-h-[70%] align-center w-[60%] h-[65%] bg-white custom-border lg:w-[55%] sm:w-[90%] sm:h-[70vh] sm:max-w-[90%] sm:min-with[100px] xl:max-h-[90%] xxl:max-h-[55%]`}
      initial={{ opacity:0 , scale: 0.5}}
      animate={{ opacity:1 , scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01] }}
    >
      <div className="flex justify-around gap-2 align-center sm:gap-0">
        <div className="flex flex-col w-1/4">
          <label className={poppins.className+' '+`${ (day! > maxDays) || error.day ? 'text-error': 'text-placeholder'} text-[0.8rem] sm:text-[0.8rem] tracking-[.2em] mb-[4%]`}>DAY</label>
          <input onChange={e=> setDay(parseInt(e.target.value))} onKeyDown={handleKeyPress} placeholder='DD' className={poppins.className+' '+`sm:w-[95%] w-[85%] sm-w-full text-black text-2xl placeholder:text-placeholder placeholder:text-[1.7rem] sm:placeholder:text-lg border border-line rounded-md py-[8%] pl-5 sm:pl-3 focus:outline-none   ${ (day! > maxDays) || error.day ? 'focus:border-error' :'focus:border-primary' } `}></input>
          <div className={` ${(day! > maxDays)  ? 'text-error' : 'hidden'  && day==null ? isSubmit? 'text-error' : 'hidden' : null } font-sans text-error italic text-[1rem] mt-[6px] `}>{(day! >maxDays) ? 'Enter a valid day': 'This field is required' && day===null ? null : null}</div>
        </div>
        <div className="flex flex-col w-1/4">
          <label className={poppins.className+' '+`${ (month! > 12) || error.month ? 'text-error': 'text-placeholder'} text-[0.8rem] sm:text-[0.8rem] tracking-[.2em] mb-[4%]`}>MONTH</label>
          <input onChange={e=> {setMonth(parseInt(e.target.value))} } onKeyDown={handleKeyPress} placeholder='MM' className={poppins.className+' '+` sm:w-[95%] w-[85%] text-black text-2xl placeholder:text-placeholder placeholder:text-[1.7rem] sm:placeholder:text-lg border border-line rounded-md py-[8%] pl-5 sm:pl-3 focus:outline-none   ${ (month! > 12) || error.month ? 'focus:border-error': 'focus:border-primary' }`}></input>
          <div className={` ${(month! > 31 ) ? 'text-error' : 'hidden'  && month==null ? 'hidden': null} font-sans text-error italic text-[1em] mt-[6px] `}>{month! >12 ? 'Enter a valid month' : 'This field is required' && month==null ? null : null}</div>
        </div> 
        <div className="flex flex-col w-1/4">
          <label className={poppins.className+' '+`${ (year! > 2022) || error.year ? 'text-error': 'text-placeholder'} text-[0.8rem] sm:text-[0.8rem] tracking-[.2em] mb-[4%]`}>YEAR</label>
          <input onChange={e=>{ setYear(parseInt(e.target.value)); checkLeapYear(parseInt(e.target.value))}} onKeyDown={handleKeyPress} placeholder='YYYY' className={poppins.className+' '+`sm:w-[95%] w-[85%] text-black text-2xl placeholder:text-placeholder placeholder:text-[1.7rem] sm:placeholder:text-lg border border-line rounded-md py-[8%] pl-5 sm:pl-3 focus:outline-none   ${ (year! > currentYear) || error.year ? 'focus:border-error': 'focus:border-primary' }`}></input>
          <div className={` ${ year==null ? 'hidden': null} font-sans text-error italic text-[1em] mt-[6px] `}>{year! >2020 ? 'Enter a valid year' : 'This field is required' && year==null ? null : null}</div>
        </div>
        <div className="flex flex-col w-1/4 sm:hidden"></div> 
      </div> 
      <div className="flex w-full items-center my-0 sm:relative sm:my-[8%]"><span className={'h-[1px] w-[85%] bg-line -bottom-0.5 sm:w-[95%] sm:m-auto sm:my-[6vh]'}>&nbsp;</span>
        <motion.button onClick={()=>submit()} type='button' className="flex items-center justify-center bg-primary rounded-full w-[80px] h-[80px] hover:bg-black sm:absolute sm:m-auto sm:right-0 sm:left-0"
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.9}}
          transition={{type: "spring", stiffness: 400, damping: 17}}
          >
        <Image className="w-auto h-auto" src={arrow} width={40} height={40} alt=""></Image>
        </motion.button>
      </div>
      <div className={poppinsBold.className+' '+'flex flex-col test sm:text-5xl'}> 
        <div className="flex text-black"><div className="text-primary pr-2">{valid? <AnimatedNumbers value={total.year}/> :'--'}</div>years</div>
        <div className="flex text-black"><div className="text-primary pr-2">{valid? <AnimatedNumbers value={total.month}/> :'--'}</div>months</div>
        <div className="flex text-black"><div className="text-primary pr-2">{valid?  <AnimatedNumbers value={total.day}/> :'--'}</div>days</div>
        </div>
    </motion.main>
  )
}


