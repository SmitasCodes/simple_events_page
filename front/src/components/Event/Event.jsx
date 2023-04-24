import React from "react";
import styles from './Event.module.css'

const Event = (props) => {
  return (
    <li className={styles.event_li}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.image} />
      <p>{props.price} &euro;</p>
    </li>
  );
};

export default Event;
