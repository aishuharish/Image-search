import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //return props.image.map((image) => (
  //<img src={image.urls.regular} key={image.id} alt={image.description} />

  //above can be destructed
  //   const imageList = props.image.map(({ id, urls, description }) => (
  //     <img src={urls.regular} key={id} alt={description} />
  //   ));

  //above is changed for ImageCard to set height of each image using span
  const imageList = props.image.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
