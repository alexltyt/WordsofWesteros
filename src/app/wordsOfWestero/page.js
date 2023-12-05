"use client"

import React from 'react'
import Logo from './logo'
import Quote from './quote'
import { useEffect, useState } from 'react';


const page = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleHouseClick = (houseName) => {
    setSelectedHouse(houseName);
    console.log('selectedHouse: '+selectedHouse);
  };

  return (
    <main>

        <Logo onHouseClick={handleHouseClick}/>
        <Quote selectedHouse={selectedHouse}/>

    </main>
  )
}

export default page