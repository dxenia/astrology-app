import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <ul className="footer__socials">
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-tiktok"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
      </ul>
      <div className="footer__copyright">
        &copy; 2023 Lunar. All Rights Reserved.
      </div>
    </footer>
  );
}
