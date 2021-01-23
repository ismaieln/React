import React from "react";

const FriendProfile = (props) => {
  return (
    <ul>
      <li>
        <strong>Name: </strong> {`${props.friends.first} ${props.friends.last}`}
      </li>
      <li>
        <strong>Address:</strong>
        {` ${props.friends.postcode} - ${props.friends.city}, ${props.friends.country}`}
      </li>
      <li>
        <strong>Email:</strong>
        {` ${props.friends.email}`}
      </li>
      <li>
        <strong>Phone No:</strong>
        {` ${props.friends.phone}`}
      </li>
    </ul>
  );
};

export default FriendProfile;
