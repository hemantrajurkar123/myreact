import React from 'react'
import ImageShow from './ImageShow'

const ImageList = ({images}) => {
    const renderedImages= images.map((image)=>{
        return <ImageShow image={image} />
})
console.log("renderedImages", renderedImages)
  return (
    <div>
      {/* {images.map((image)=>(
        <div key={image.id}>
            <img src={image.urls.raw} alt={image.alt_description}></img>
        </div>
      ))} */}
      <div
      style={{columns:'6 200px', columnGap:'10px'}}
      >{renderedImages}</div>
    </div>
  )
}

export default ImageList
