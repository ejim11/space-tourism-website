import Card from "../Components/UI/Card";

import classes from "./Destination.module.scss";

import Destinations from "../Components/layout/Destinations";

const Destination = () => {
  return (
    <Card className={classes.destination}>
      <Destinations />
    </Card>
  );
};

export default Destination;
