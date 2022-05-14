import React from "react";

import classes from "./Home.module.scss";

import Card from "../Components/UI/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Card className={classes.home}>
      <section>
        <div className={classes.first}>
          <p className={classes["first-paragraph"]}>
            so, you want to travel to
          </p>
          <p className={classes["first-title"]}>space</p>
          <p className={classes["first-text"]}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={classes.second}>
          <div className={classes["second-explore"]}>
            <Link to="/destination">Explore</Link>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default Home;
