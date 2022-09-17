import './Footer.css';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <p className="footer__copyright">
          &#169; Vudidi &#38; CurtisTruffle 2022
        </p>
        <p className="footer__version">Версия 0.0.1</p>
      </div>
      <ul className="footer__navigation">
        <li className="footer__navigation-item">
          {' '}
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Помощь
          </a>
        </li>
        <li className="footer__navigation-item">
          {' '}
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Условия
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
