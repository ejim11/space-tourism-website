import Card from "../Components/UI/Card";

import classes from "./Crew.module.scss";

import CrewList from "../Components/layout/CrewList";

const Crew = () => {
  return (
    <Card className={classes.crew}>
      <CrewList />
    </Card>
  );
};

export default Crew;
