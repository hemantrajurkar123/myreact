import React from 'react'

const ImageShow = ({image}) => {
  return (
    <div>
      <img 
      src={image.urls.small} alt={image.alt_description}
      style={{width:'100%', marginBottom:'10px'}}
      ></img>
    </div>
  )
}

export default ImageShow
