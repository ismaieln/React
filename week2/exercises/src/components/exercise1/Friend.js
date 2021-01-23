import React, { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

const userAPI = "https://www.randomuser.me/api?results=1";

const Friend = () => {
  const [friend, setFriend] = useState({});
  // const [statusOkay, setStatusOkay] = useState(false);
  const [hasError, setError] = useState(false);

  const getFriend = async () => {
    try {
      const response = await fetch(userAPI);
      const data = await response.json();
      const newData = data.results[0];
      setFriend(newData);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <Button getFriend={getFriend} />
      <FriendProfile
        first={friend.name.first}
        last={friend.name.last}
        postcode={friend.location.postcode}
        city={friend.location.city}
        country={friend.location.country}
        email={friend.email}
        phone={friend.phone}
      />
    </div>
  );
};

export default Friend;
