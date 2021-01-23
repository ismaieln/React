import React from "react";

const FriendProfile = (props) => {
  return (
    <ul>
      <li>Name: {`${props.first} ${props.last}`}</li>
      <li>Address: {`${props.postcode} ${props.city}, ${props.country}`}</li>
      <li>Email: {`${props.email}`}</li>
      <li>Phone No: {`${props.phone}`}</li>
    </ul>
  );
};

export default FriendProfile;
