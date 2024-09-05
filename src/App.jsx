/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"
import Quotes from './Components/Quotes/Quotes';

export default function App() {
  return (
      <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white'>

           <Navbar/>
           <Hero/>
           <Quotes/>
      </main>
    

  )
}

