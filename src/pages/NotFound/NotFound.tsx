import mask from '../../assets/images/mask.webp';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found page">
      <h2>OOPS!</h2>
      <p>
        Something went wrong. The page you are looking for seems to not be here.
      </p>
      <img src={mask}></img>
    </div>
  );
}

export default NotFound;
