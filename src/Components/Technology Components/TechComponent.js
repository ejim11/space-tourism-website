import classes from "./TechComponent.module.scss";

import data from "../../data.json";

import { useSelector, useDispatch } from "react-redux";

import { techActions } from "../../store/techSlice";

import image1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import image2 from "../../assets/technology/image-spaceport-portrait.jpg";
import image3 from "../../assets/technology/image-space-capsule-portrait.jpg";

import image4 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import image5 from "../../assets/technology/image-spaceport-landscape.jpg";
import image6 from "../../assets/technology/image-space-capsule-landscape.jpg";

const numbers = [1, 2, 3];

const TechComponent = () => {
  const id = useSelector((state) => state.tech.id);
  const dispatchFn = useDispatch();

  const { technology } = data;

  const item = technology.find((item) => item.id === id);

  let src, srcPhone;

  const images = [image1, image2, image3];
  const imagesPhone = [image4, image5, image6];

  const numbersList = numbers.map((num, i) => {
    if (num === id) {
      src = images[i];
      srcPhone = imagesPhone[i];
    }

    return (
      <div
        key={num}
        className={`${classes.num} ${num === id ? classes.active : ""}`}
        onClick={() => {
          dispatchFn(techActions.setId(num));
        }}
      >
        {num}
      </div>
    );
  });

  return (
    <section className={classes.techSection}>
      <h2>
        <span>03</span> space launch 101
      </h2>
      <div className={classes.tech}>
        <div className={classes["tech-text"]}>
          <div className={classes.numberList}>{numbersList}</div>
          <div className={classes.texts}>
            <p className={classes["texts-1"]}>the terminology...</p>
            <p className={classes["texts-2"]}>{item.name}</p>
            <p className={classes["texts-3"]}>{item.description}</p>
          </div>
        </div>
        <div className={classes["tech-img"]}>
          <div>
            <picture>
              <source media={"(max-width: 850px)"} srcSet={srcPhone} />
              <source media={"(min-width: 851px)"} srcSet={src} />
              <img src={src} alt="tech img" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechComponent;
