import './Header.css';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        {' '}
        <div className="header__image"></div>
        <h1 className="header__title">50 ЛЕТ ОКТЯБРЯ</h1>
      </div>

      <div className="header__navigation">
        <p className="header__user-name">Петр Пустота</p>
        <a
          href="/#"
          target="_blank"
          rel="noreferrer"
          className="header__account-link"
        >
          Аккаунт
        </a>
        <button className="header__logout-btn">Выйти</button>
      </div>
    </div>
  );
}

export default Header;
