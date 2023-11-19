import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/logos');
  const imageFilenames = await fs.readdir(imageDirectory);
  //console.log(imageFilenames);

  return (
    <div>
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
        const house = el.replace(/\.[^/.]+$/, '');
        const houseFullname = 'House of ' + house;
        return (
          <div key={el} className='w-1/4 md:w-1/6 lg:w-1/12 relative'>
            <div className='cursor-pointer relative'>
              <Image
                title={houseFullname}
                alt={houseFullname}
                src={`/logos/${el}`}
                width={150}
                height={150}
              />
            </div>
            <div className='max-w-md'>
              <p className='cursor-pointer text-center mt-5 text-sm'>{houseFullname}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Logo;
