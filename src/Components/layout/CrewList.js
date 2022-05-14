import data from "../../data.json";

import classes from "./CrewList.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { crewActions } from "../../store/crewSlice";
import CrewDots from "../CrewComponents/CrewDots";
import CrewImages from "../CrewComponents/CrewImages";

const CrewList = () => {
  const dispatchFn = useDispatch();
  const crewIndex = useSelector((state) => state.crew.index);

  const { crew } = data;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatchFn(crewActions.decreaseIndex());
    }, 13000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatchFn]);

  const crewInfo = crew.map((item, i) => (
    <div
      className={classes["crew__info-item"]}
      key={item.name.slice(0, 4) + `${i + 1}`}
      style={{ transform: ` translateX(${(i + crewIndex) * 100}%)` }}
    >
      <p className={classes["crew__info-role"]}>{item.role}</p>
      <p className={classes["crew__info-name"]}>{item.name}</p>
      <p className={classes["crew__info-bio"]}>{item.bio}</p>
    </div>
  ));

  return (
    <section className={classes.crewSection}>
      <h2>
        <span>02</span> meet your crew
      </h2>
      <div className={classes.crew}>
        <div className={classes.crew__info}>{crewInfo}</div>
        <div className={classes.crew__dots}>{<CrewDots />}</div>
      </div>
      <div className={classes.crew__img}>{<CrewImages />}</div>
    </section>
  );
};

export default CrewList;
