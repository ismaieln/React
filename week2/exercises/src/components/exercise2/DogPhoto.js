import React from "react";

const DogPhoto = (dogPhotos) => {
  return (
    <div>
      {dogPhotos.ab.map((item) => (
        <img src={item} alt="dogs" key={dogPhotos.ab.indexOf(item)} />
      ))}
    </div>
  );
};

export default DogPhoto;

// <img src={dogPhotos.ab} alt="dogs" />;
