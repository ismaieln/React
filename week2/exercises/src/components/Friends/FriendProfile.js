import React from "react";

const FriendProfile = (props) => {
  return (
    <ul>
      <li>
        <strong>Name: </strong>
        {`${props.friends.name.first} ${props.friends.name.last}`}
      </li>
      <li>
        <strong>Address:</strong>
        {` ${props.friends.location.postcode} - ${props.friends.location.city}, ${props.friends.location.country}`}
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

// const dataObj = {
//   first: `${newData.name.first}`,
//   last: `${newData.name.last}`,
//   postcode: `${newData.location.postcode}`,
//   city: `${newData.location.city}`,
//   country: `${newData.location.country}`,
//   email: `${newData.email}`,
//   phone: `${newData.phone}`,
// };
