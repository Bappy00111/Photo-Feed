import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import image from '@/public/image/photo-fiveten.avif';


const PhotoCard = ({photo}) => {
    console.log(photo);  
    return (
          <Link href={`photos/${photo.id}`} className="group">
            <Image src={photo.url} alt={photo.title} width={700} height={700} />

            <div className="title-container">
                <h4 className="title">{photo.title}</h4>
            </div>
        </Link>
    );
};

export default PhotoCard;