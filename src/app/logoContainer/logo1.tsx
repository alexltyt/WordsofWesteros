import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const Logo1 = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/logos');
    const imageFilenames = await fs.readdir(imageDirectory)
    //console.log(imageFilenames)

    return (
        <div >
            <div>
                <Gallery images={imageFilenames} />
            </div>
        </div>
    );
};


const Gallery = ({ images }) => {
    return (
      <div className='flex flex-row m-2 justify-center w-screen border-solid border-2 border-red-600'>
        {images.map((el) => {
        const house = el.replace(/\.[^/.]+$/, "");
        const houseFullname = 'House of ' + house;
        return(
          <div key={el} className="w-1/4 md:w-1/6 lg:w-1/12 relative" >
            <div className="pb-[100%] cursor-pointer">
              <Image title={houseFullname} alt={houseFullname} src={`/logos/${el}`} layout="fill" objectFit="contain" />
            </div>
            <div className='max-w-md'>
              <p className='cursor-pointer text-center mt-5 text-sm sm:mt-10'>{houseFullname}</p>
            </div>
          </div>
        );
    })}
      </div>
    );
  };


export default Logo1;