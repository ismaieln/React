import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const Dog_API = "https://dog.ceo/api/breeds/image/random";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getDogPhoto = async () => {
    try {
      setLoading(true);
      const res = await fetch(Dog_API);
      const dogData = await res.json();
      setLoading(false);
      const newDogData = [...dogPhotos, dogData.message];
      setDogPhotos(newDogData);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <p>'Loading......'</p>}
      {!hasError && <Button getDogPhoto={getDogPhoto} />}
      {!hasError && <DogPhoto ab={dogPhotos} />}
      {hasError && <p>"SomeThing went wrong"</p>}
    </div>
  );
};

export default DogGallery;
