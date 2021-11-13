import React from 'react';

interface ImageListProps{
    images: Array<ImageFields>;
}

interface ImageFields{
    description:string;
    id:string;
    urls:any;
}


const ImageList = ({images}: ImageListProps) =>{
    const myImages = images.map((image:ImageFields) =>{
        return <img key={image.id} alt={image.description} src={image.urls.regular}/>;
    })

    return <div> {myImages}</div>;
}


export default ImageList;