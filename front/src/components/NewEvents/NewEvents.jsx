import React, { useState } from "react";
import eventsServices from "../../services/eventsServices";
import styles from "./NewEvents.module.css";

const NewEvents = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      name: name,
      description: description,
      image: image,
      price: price,
    };

    await eventsServices.postEvents(newEvent);

    setName("");
    setDescription("");
    setImage("");
    setPrice("");

    if (typeof props.onAddEvent === "function") {
      props.onAddEvent();
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className={styles.form_submit_div}>
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default NewEvents;
