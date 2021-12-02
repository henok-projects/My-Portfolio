import React from 'react'
import './ImageGallery.css'
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
export const ImageGallary = (props) => {
    const imageList = props?.images?.map((image) => {
        return {
            original: image,
            thumbnail: image,
        }
    })
    return (
        <div>
            <Gallery items={imageList} showThumbnails ={true}></Gallery>            
        </div>
    )
}
