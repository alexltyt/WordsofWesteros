import path from 'path';
import React from 'react';
import Link from 'next/link';

export async function getServerSideProps() {
  const fs = require('fs');
  const imageDirectory = path.join(process.cwd(), '/public/logos');
  const imageFilenames = fs.readdirSync(imageDirectory);
  return { props: { imageFilenames } };
}

const Gallery = ({ images }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      {images.map((image, index) => (
        <div key={index} onClick={handleClick}>
          <Image src={`/logos/${image}`} alt={`Logo ${index}`} />
        </div>
      ))}
    </div>
  );
};

const Logo2 = ({ imageFilenames }) => {
  return (
    <div>
      <Gallery images={imageFilenames} />
    </div>
  );
};

export default Logo2;