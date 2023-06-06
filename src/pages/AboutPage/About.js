import AboutDescription from "./AboutDescription/AboutDescription";
import AboutSlider from "../../components/AboutSlider/AboutSlider";
import { getLastYearDate } from "../../utils/utils";
import { useMarsImages } from "../../hooks";
import styles from "./About.module.css";

const About = () => {
  const [slides, loading] = useMarsImages(getLastYearDate());
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>About The Program</h2>
      <AboutDescription />
      <h2>
        Curiosity rover images
        <span style={{ color: "#ded6c9" }}> from last year</span>
      </h2>
      <div className={styles.container}>
        {loading ? (
          <div>Loading slider...</div>
        ) : (
          <AboutSlider slides={slides} />
        )}
      </div>
    </div>
  );
};

export default About;
