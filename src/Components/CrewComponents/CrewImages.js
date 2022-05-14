import image1 from "../../assets/crew/image-douglas-hurley.png";
import image2 from "../../assets/crew/image-mark-shuttleworth.png";
import image3 from "../../assets/crew/image-victor-glover.png";
import image4 from "../../assets/crew/image-anousheh-ansari.png";

import { useSelector } from "react-redux";

import classes from "./CrewImages.module.scss";

const CrewImages = () => {
  const index = useSelector((state) => state.crew.index);

  const images = [image1, image2, image3, image4];

  const imageList = images.map((item, i) => (
    <div
      className={classes.crew__image}
      key={`${i + 1}img`}
      style={{ transform: ` translateX(${(i + index) * 100}%)` }}
    >
      <img src={item} alt="crew img" />
    </div>
  ));

  return <div className={classes.img_container}>{imageList}</div>;
};

export default CrewImages;
