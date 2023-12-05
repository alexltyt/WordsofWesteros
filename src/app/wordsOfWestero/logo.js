"use client";

import React from 'react';
import Image from 'next/image';
import Baelish from '../../../public/logos/Baelish.png';
import Baratheon from '../../../public/logos/Baratheon.png';
import Bolton from '../../../public/logos/Bolton.png';
import Greyjoy from '../../../public/logos/Greyjoy.png';
import Lannister from '../../../public/logos/Lannister.png';
import Stark from '../../../public/logos/Stark.png';
import Targaryen from '../../../public/logos/Targaryen.png';
import Tarly from '../../../public/logos/Tarly.png';
import Tarth from '../../../public/logos/Tarth.png';
import Tyrell from '../../../public/logos/Tyrell.png';



const Logo = ({onHouseClick}) => {
  // const imageDirectory = path.join(process.cwd(), '/public/logos');
  // const imageFilenames = await fs.readdir(imageDirectory);
  //console.log(imageFilenames);

  const houses = [
    { name: 'baelish', src: Baelish },
    { name: 'baratheon', src: Baratheon },
    { name: 'bolton', src: Bolton },
    { name: 'greyjoy', src: Greyjoy },
    { name: 'lannister', src: Lannister },
    { name: 'stark', src: Stark },
    { name: 'targaryen', src: Targaryen },
    { name: 'tarly', src: Tarly },
    { name: 'tarth', src: Tarth },
    { name: 'tyrell', src: Tyrell },
  ];

  return (
    <div>
      <div>
        <Gallery houses={houses} onHouseClick={onHouseClick}/>
      </div>
    </div>
  );
};

const Gallery = ({ houses, onHouseClick }) => {
  return (
    <div className='flex flex-row mt-10 mb-10 justify-center w-screen'>
      {houses.map((house) => {
        const houseFullname = 'House of ' + house.name;
        return (
          <div key={house.name} className='w-1/4 md:w-1/6 lg:w-1/12 relative' onClick={()=>onHouseClick(house.name)}>
            <div className='cursor-pointer relative'>
              <Image
                title={houseFullname}
                alt={houseFullname}
                src={house.src}
                width={150}
                height={150}
              />
            </div>
            <div className='max-w-md'>
              <p className='cursor-pointer text-center mt-5 text-sm text-black font-bold'>{houseFullname}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Logo;
