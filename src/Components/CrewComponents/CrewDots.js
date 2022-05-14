import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import data from "../../data.json";

import classes from "./CrewDots.module.scss";

import { crewActions } from "../../store/crewSlice";

const CrewDots = () => {
  const crewIndex = useSelector((state) => state.crew.index);
  const dispatchFn = useDispatch();

  let loadedCrew = [];

  const { crew } = data;

  for (const n of crew) {
    loadedCrew.push(n);
  }

  const crewDots = loadedCrew.map((item, i) => (
    <div
      className={`${classes.crew__dots} ${
        -crewIndex === i ? classes.active : ""
      }`}
      key={item.name.slice(0, 4) + `${i + 1}`}
      onClick={() => {
        dispatchFn(crewActions.setIndex(i));
      }}
    ></div>
  ));

  return <Fragment>{crewDots}</Fragment>;
};

export default CrewDots;
