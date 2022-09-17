import './UserInfo.css';

function UserInfo() {
  return (
    <div className="user-info">
      <h1 className="user-info__greeting">Добро пожаловать, Петр Пустота!</h1>
      <div className="user-info__avatar"></div>
      <ul className="user-info__stats">
        <li className="user-info__stat">
          <div className="user-info__stat-set">
            <span className="user-info__stat-icon user-info__stat-icon_type_leather"></span>
            <p className="user-info__stat-name">Кожа</p>
          </div>
          <span className="user-info__stat-count">10</span>
        </li>
        <li className="user-info__stat">
          <div className="user-info__stat-set">
            <span className="user-info__stat-icon user-info__stat-icon_type_bone"></span>
            <p className="user-info__stat-name">Кость</p>
          </div>
          <span className="user-info__stat-count">8</span>
        </li>
        <li className="user-info__stat">
          <div className="user-info__stat-set">
            <span className="user-info__stat-icon user-info__stat-icon_type_heart"></span>
            <p className="user-info__stat-name">Сердце</p>
          </div>
          <span className="user-info__stat-count">5</span>
        </li>
        <li className="user-info__stat">
          <div className="user-info__stat-set">
            <span className="user-info__stat-icon user-info__stat-icon_type_blood"></span>
            <p className="user-info__stat-name">Кровь</p>
          </div>
          <span className="user-info__stat-count">6</span>
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
