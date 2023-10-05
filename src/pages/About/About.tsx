import eyes from '../../assets/images/eyes.gif';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        This is my final project for FooCoding's programme in Malmö, using React
        and Typescript. MORE CONTENT TO BE ADDED.
      </p>
      <img src={eyes} alt="Eyes" />
    </div>
  );
}
