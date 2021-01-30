import React from "react";

const DogPhoto = (dogPhotos) => {
  return (
    <div>
      {dogPhotos.photos.map((photo) => (
        <img src={photo} alt="dogs" key={dogPhotos.photos.indexOf(photo)} />
      ))}
    </div>
  );
};

export default DogPhoto;
