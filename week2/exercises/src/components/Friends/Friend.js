import React, { useState, useEffect } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

const USER_API = "https://www.randomuser.me/api?results=1";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  async function getFriend() {
    try {
      setLoading(true);
      const response = await fetch(USER_API);
      const newFriend = await response.json();
      setLoading(false);

      setFriend(newFriend.results[0]);
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
      {JSON.stringify(friend) !== "{}" && <FriendProfile friends={friend} />}
      {hasError && <p>I don't know what is going on</p>}
    </div>
  );
};

export default Friend;
