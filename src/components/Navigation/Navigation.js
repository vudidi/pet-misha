import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-items">
        <li className="navigation-item">
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className="navigation__link"
          >
            Истории
          </a>
        </li>
        <li className="navigation-item">
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className="navigation__link"
          >
            Заметки
          </a>
        </li>
        <li className="navigation-item">
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className="navigation__link"
          >
            Имущество
          </a>
        </li>
        <li className="navigation-item">
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className="navigation__link"
          >
            Секреты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
