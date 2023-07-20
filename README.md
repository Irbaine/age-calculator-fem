# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- On click enter the form submits the values
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./public/screenshots/screenshot.jpg)

### Links

- Solution URL: [Here](https://your-solution-url.com)
- Live Site URL: [Here](https://your-live-site-url.com)

## My process

The challenge itself is very easy, I used Nextjs 13 and Tailwind Css for styling.
But the logic of the app took me some time, especially for the leap years which contains one additional day that should be added to the result, I also took in consediration the problem of negative results.
I did manual testing for the app which may not be ideal for bigger future projects.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Framer Motion](https://www.framer.com) - For Animation

### What I learned

This challenge seems very easy at first and i was thinking that i would solve it in a less than one day...
But it seems that the input validation is not an easy process and it take much time for implement and test things manually,
The use of libraries is important for future project as the forms gets more large and complicated the data validation would be then challenging to deal with which increases the chances for more bugs.


### Continued development

Architecture problems are the most chalenging part of my current learning process.
Should i use useMemo ? should is useEffect ? use context... ? good decision making giving me hard times to addapt with react hooks easily.
I want to be more comfortable making the right decision with the strecture to produce effeciant minized codes with no memory leaks.

Honestly the new next.js version with app is very very frustrating for me. use client is even the least of my frustration lol. I would have to take my time to learn more about it and get used to it

Moving to server side react is going to take a lot of effort, especially for library devs. It's not there yet in any UI libraries.

the complex part is some server component also need using states and hooks which requires "use client"
is making a new component with "use client" is the only solution

## Author

- Website - [Irbaine](https://www.irbaine.com)
- Frontend Mentor - [Irbaine](https://www.frontendmentor.io/profile/irbaine)
- Twitter - [Amineirb](https://twitter.com/amineirb)



desctition: 

https://www.joshwcomeau.com/css/custom-css-reset/