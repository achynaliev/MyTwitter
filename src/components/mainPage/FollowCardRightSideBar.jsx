import React, { useEffect, useContext, useState } from "react";
import { userContext } from "../../contexts/UserContext";
import FollowLine from "./FollowLine";

const FollowCardRightSideBar = () => {
  const { getAllUsers, users } = useContext(userContext);
  const [rerender, setrerender] = useState(false);
  useEffect(() => getAllUsers(), []);

  let flwing = localStorage.getItem("following");
  flwing = JSON.parse(flwing);

  function followCardDelayed(user) {
    let flwhz = localStorage.getItem("following");
    flwhz = JSON.parse(flwhz);
    let follow = flwhz.find((item) => item === user.username);
    if (!follow) {
      return <FollowLine key={user.id} user={user} />;
    }
    setrerender(true);
  }

  function isfollowing(user) {
    if (flwing) {
      let follow = flwing.find((item) => item === user.username);
      if (!follow) {
        return <FollowLine key={user.id} user={user} />;
      }
    } else {
      setTimeout(() => followCardDelayed(user), 4125);
    }
  }

  return (
    <div className="FollowContainer">
      <h3>You might like</h3>
      {users ? users.map((user) => isfollowing(user)) : <div></div>}
    </div>
  );
};

export default FollowCardRightSideBar;
