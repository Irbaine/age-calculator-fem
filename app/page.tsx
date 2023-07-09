"use client"
import Image from 'next/image'
import './globals.css'
import Poppins from 'next/font/local'
import arrow from '../public/icon-arrow.svg'
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

interface props {
  month: number,
  day: number,
  year: number,
  valid: boolean,
}



export default function Home(){
  const isValid = true;
  const [total, setTotal] = useState(0);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();


  return (
    <main className={"flex flex-col justify-center align-center w-[50%] h-[60vh] bg-white rounded-bl-2xl"}>
      <div className="flex justify-around ">
        <div className="flex flex-col w-1/4">
          <label className={poppins.className+' '+`${ day> 31 ? 'text-error': 'text-text'} text-sm tracking-[.2em] mb-[6px]`}>DAY</label>
          <input onChange={e=> setDay(e.target.value)}  placeholder='DD' className={poppins.className+' '+`text-black text-2xl placeholder:text-placeholder placeholder:text-2xl border border-line rounded-md py-2 pl-5 focus:outline-none   ${ day> 31 ? 'focus:border-error': 'focus:border-primary' }`}></input>
          <div className={` ${(day > 31 ) ? 'text-error' : 'hidden'  && day==null ? 'hidden': null} font-sans text-error italic text-[1em] mt-[6px] `}>{day>31 ? 'Enter a valid day' : 'This field is required' && day==null ? null : null}</div>
        </div> {/* add insial stat to prevent error if input is null // put this fiel is required in place of null bel9w */}
        <div className="flex flex-col w-1/4">
          <label className={poppins.className+' '+`${ month > 12 ? 'text-error': 'text-text'} text-sm tracking-[.2em] mb-[6px]`}>MONTH</label>
          <input onChange={e=> setMonth(e.target.value)} placeholder='MM' className={poppins.className+' '+`text-black text-2xl placeholder:text-placeholder placeholder:text-2xl border border-line rounded-md py-2 pl-5 focus:outline-none   ${ month> 12 ? 'focus:border-error': 'focus:border-primary' }`}></input>
          <div className={` ${(month > 31 ) ? 'text-error' : 'hidden'  && month==null ? 'hidden': null} font-sans text-error italic text-[1em] mt-[6px] `}>{month>12 ? 'Enter a valid month' : 'This field is required' && month==null ? null : null}</div>
        </div> 
        <div className="flex flex-col w-1/4">
          <label className={poppins.className+' '+`${ year> 2022 ? 'text-error': 'text-text'} text-sm tracking-[.2em] mb-[6px]`}>YEAR</label>
          <input onChange={e=> setYear(e.target.value)} placeholder='YY' className={poppins.className+' '+`text-black text-2xl placeholder:text-placeholder placeholder:text-2xl border border-line rounded-md py-2 pl-5 focus:outline-none   ${ year> 2020 ? 'focus:border-error': 'focus:border-primary' }`}></input>
          <div className={` ${(year > 31 ) ? 'text-error' : 'hidden'  && year==null ? 'hidden': null} font-sans text-error italic text-[1em] mt-[6px] `}>{year>2020 ? 'Enter a valid year' : 'This field is required' && year==null ? null : null}</div>
        </div>  
        <div className="flex flex-col w-1/4"></div> 
      </div> 
      <div className="flex w-full items-center"><span className={'h-[1px] w-[80%] bg-line -bottom-0.5 '}>&nbsp;</span><input type='button' className="bg-primary rounded-full w-[50px] h-[50px] hover:bg-black"></input><Image src={arrow} width={59} height={59} alt=""></Image></div>
      <div className={poppinsBold.className+' '+'flex flex-col text-7xl'}>
        <div className="flex text-black"><div className="text-primary pr-2">{isValid? day:'--'}</div>days</div>
        <div className="flex text-black"><div className="text-primary pr-2">{isValid? month:'--'}</div>months</div>
        <div className="flex text-black"><div className="text-primary pr-2">{isValid? year:'--'}</div>years</div>
      </div>
    </main>
    
    
  )
}


