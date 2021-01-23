import React, { useState, useEffect } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

const userAPI = "https://www.randomuser.me/api?results=1";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  async function getFriend() {
    try {
      setLoading(true);
      const response = await fetch(userAPI);
      const data = await response.json();
      setLoading(false);
      const newData = data.results[0];
      const dataObj = {
        first: `${newData.name.first}`,
        last: `${newData.name.last}`,
        postcode: `${newData.location.postcode}`,
        city: `${newData.location.city}`,
        country: `${newData.location.country}`,
        email: `${newData.email}`,
        phone: `${newData.phone}`,
      };
      setFriend(dataObj);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div className="friend">
      {isLoading && <p>Loading......</p>}
      {!hasError && <Button getFriend={getFriend} />}
      {!hasError && <FriendProfile friends={friend} />}
      {hasError && <p>I don't know what is going on</p>}
    </div>
  );
};

export default Friend;
