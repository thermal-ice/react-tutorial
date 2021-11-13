import React from 'react';
import '../css/ImageList.css';
import './ImageCard';
import ImageCard from "./ImageCard";

interface ImageListProps{
    images: Array<ImageFields>;
}

interface ImageFields{
    description:string;
    id:string;
    urls:any;
}


const ImageList = ({images}: ImageListProps) =>{
    // const myImages = images.map((image:ImageFields) =>{
    //     return <img key={image.id} alt={image.description} src={image.urls.regular}/>;
    // })

    const myImages = images.map((image:ImageFields) =>{
        return <ImageCard key={image.id} image={image}/>;
    })

    return <div className="image-list"> {myImages}</div>;
}


export default ImageList;