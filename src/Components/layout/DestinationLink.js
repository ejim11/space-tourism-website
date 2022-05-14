import { useDispatch, useSelector } from "react-redux";

import { destinationActions } from "../../store/destination-slice";

import classes from "./DestinationLink.module.scss";

const DestinationLink = () => {
  const dispatchFn = useDispatch();

  const id = useSelector((state) => state.destination.id);

  const destinations = ["Moon", "Mars", "Europa", "Titan"];

  const changeIdHandler = (event) => {
    const id = event.target.dataset.id;
    dispatchFn(destinationActions.changeId(id));
  };

  const links = destinations.map((name) => (
    <div
      className={`${classes.name} ${id === name ? classes.active : ""}`}
      key={name}
      onClick={changeIdHandler}
      data-id={name}
    >
      {name}
    </div>
  ));

  return <div className={classes.nameLinks}>{links}</div>;
};

export default DestinationLink;
