import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import classes from "./FriendRequestItem.module.css";

const FriendRequestItem = (props) => {
  return (
    <li className={classes.container}>
      <div className={classes.info}>
        <Link to={`/profile/${props.id}`}>
          <div className={classes.photo}>
            <Avatar image={props.image} />
          </div>
          <h2>{props.name}</h2>
        </Link>
      </div>
      <div className={classes.btns}>
        <button className={classes.acc}> Accept </button>
        <button className={classes.dec}> Decline </button>
      </div>
    </li>
  );
};

export default FriendRequestItem;
