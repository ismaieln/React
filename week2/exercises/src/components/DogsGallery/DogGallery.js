import React, { useState, useEffect } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DOG_API = "https://dog.ceo/api/breeds/image/random";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getDogPhoto = async () => {
    try {
      setLoading(true);
      const res = await fetch(DOG_API);
      const dogData = await res.json();
      setLoading(false);
      const newDogPhotos = [...dogPhotos, dogData.message];
      setDogPhotos(newDogPhotos);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dogs">
      {isLoading && <p>'Loading......'</p>}
      {!hasError && <Button getDogPhoto={getDogPhoto} />}
      {!hasError && <DogPhoto photos={dogPhotos} />}
      {hasError && <p>"SomeThing went wrong"</p>}
    </div>
  );
};

export default DogGallery;

// useEffect(() => {
//   getDogPhoto();
// }, []);
