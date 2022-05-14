import TechComponent from "../Components/Technology Components/TechComponent";
import Card from "../Components/UI/Card";

import classes from "./Technology.module.scss";

const Technology = () => {
  return (
    <Card className={classes.technology}>
      <TechComponent />
    </Card>
  );
};

export default Technology;
