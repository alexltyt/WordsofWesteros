"use client";
import React from 'react'
import { useEffect, useState } from 'react';

async function fetchHouse(house) {
    try{
        const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/house/${house}/`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
        return [];
    }
}

async function fetchQuote(slug) {
    try{
        const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/author/${slug}/`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
        return [];
    }
}

const Quote = ({selectedHouse}) => {
  const [house, setHouse] = useState(null);
  // const [randomSlug, setRandomSlug] = React.useState();
  const [quote, setQuote] = useState(null);
  const [quoteSentence, setQuoteSentence] = useState(null);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}

  async function loadQuote(house) {
    const houseData = await fetchHouse(house);
    
    const slugs = houseData[0].members.map(member => member.slug);
    shuffleArray(slugs);
    // console.log('randomized slugs: '+slugs);
    const tempRandomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    // console.log('tempRandomSlug: '+tempRandomSlug);
    const quoteData = await fetchQuote(tempRandomSlug);
    // console.log('quoteData: '+quoteData);
    // console.log('quoteData Sentence'+ quoteData.sentence);
    setHouse(houseData);
    setQuote(quoteData);
    setQuoteSentence('"'+quoteData.sentence+'"');
  }

  useEffect(() => {
    if (selectedHouse) {
      loadQuote(selectedHouse);
    }
  }, [selectedHouse]);

  return (
    
    <div className='flex flex-col justify-center text-black'>
        
        <div className='flex justify-center text-5xl m-10 text-center shadow-into font-extrabold'>
            {quote && quoteSentence}
        </div>
        {quote && 
        <div className='flex justify-center m-4'>
            by
        </div>}
        <div className='flex justify-center text-3xl m-10'>
            {quote && quote.character.name}
          {!quote && 'Click on a house logo to get a random quote from that house'}
        </div>
        {quote && 
        <div className='flex justify-center m-4'>
            from
        </div>}
        <div className='flex justify-center text-3xl m-10'>
            {house && house[0].name}
        </div> 
        
    </div>
    
  )
}

export default Quote;