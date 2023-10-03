import downloadApple from '../../assets/images/download-apple.svg';
import downloadAndroid from '../../assets/images/download-android.svg';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer__download">
        <img src={downloadApple} alt="Download on the App Store" />
        <img src={downloadAndroid} alt="Download on Google Play" />
      </div>
      <p className="footer__contact">
        Got any feedback? Up for a chat? Call +46 73 464 39 10, write a message
        to marascadanaxenia@gmail.com, or direct message the socials below.
      </p>
      <ul className="footer__socials">
        <li>
          <a href="https://github.com/dxenia">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dana-xenia-marasca/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/dxenia">
            <i className="fa-brands fa-free-code-camp"></i>
          </a>
        </li>
        <li>
          <a href="mailto:marascadanaxenia@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="footer__copyright">
        <p>&copy; 2023 Lunar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
