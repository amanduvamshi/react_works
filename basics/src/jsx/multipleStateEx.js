import React, { useState } from "react";

const UserInfo = () => {
  const [name, setName] = useState("vamshi");
  const [email, setEmail] = useState("krishna@gmail.com");

  return (
    <>
      <b>Name:</b>
      {name}
      <br />
      <b>Email:</b>
      {email}
    </>
  );
};

export default UserInfo;
