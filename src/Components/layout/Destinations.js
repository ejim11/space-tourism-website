import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import classes from "./Destinations.module.scss";

import data from "../../data.json";

import image1 from "../../assets/destination/image-moon.png";
import image2 from "../../assets/destination/image-mars.png";
import image3 from "../../assets/destination/image-europa.png";
import image4 from "../../assets/destination/image-titan.png";
import DestinationLink from "./DestinationLink";

const Destinations = () => {
  const destinationId = useSelector((state) => state.destination.id);

  const imgSources = [image1, image2, image3, image4];
  let src;

  const { destinations } = data;

  const currentDestination = destinations.find(
    (item) => item.name === destinationId
  );

  destinations.forEach((item, index) => {
    if (item.name === currentDestination.name) {
      src = imgSources[index];
    }
  });

  return (
    <Fragment>
      <section className={classes.destination}>
        <h2>
          <span>01</span> pick your destination
        </h2>
        <div className={classes["destination__main"]}>
          <div className={classes["destination__main-container1"]}>
            <div className={classes["destination__main-container1-image"]}>
              <img src={src} alt={currentDestination.name} />
            </div>
          </div>
          <div className={classes["destination__main-container2"]}>
            <DestinationLink />
            <div>
              <p className={classes["destination__main-container2-name"]}>
                {currentDestination.name}
              </p>
              <p className={classes["destination__main-container2-text"]}>
                {currentDestination.description}
              </p>
              <div className={classes.box}>
                <div className={classes["box__distance"]}>
                  <span>avg. distance</span>
                  <p>{currentDestination.distance}</p>
                </div>
                <div className={classes["box__distance"]}>
                  <span>est. travel time</span>
                  <p>{currentDestination.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Destinations;
