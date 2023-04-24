import React, { useState, useEffect } from "react";
import Event from "../Event/Event.jsx";
import eventsServices from "../../services/eventsServices.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import NewEvents from "../NewEvents/NewEvents.jsx";
import styles from "./Events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  const getData = () => {
    eventsServices.getEvents().then((res) => {
      setEvents([...res.data]);
    });
  };

  const handleAddEvent = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NewEvents onAddEvent={handleAddEvent} />;
      <h2 className={styles.events_title}>Events</h2>
      <ResponsiveMasonry
        columnsCount={3}
        columnsCountBreakPoints={{ 200: 1, 400: 2, 900: 3 }}
      >
        <Masonry>
          {events.length > 0 ? (
            events.map((event, index) => (
              <Event
                name={event.name}
                description={event.description}
                image={event.image}
                price={event.price}
                key={index}
              />
            ))
          ) : (
            <h3>You have no events</h3>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Events;
