import shapes from '../../assets/images/shapes.gif';
import Accordion from '../../components/Accordion/Accordion';
import { accordionData } from '../../api/accordionData';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <h3>So what is Lunar, really?</h3>
      <p>
        In this section I will walk you through all you need to know about my
        website.
      </p>
      <img src={shapes} alt="Geometric shapes" className="about__image" />
      <div className="about__accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </section>
  );
}
