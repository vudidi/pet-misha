import './Activity.css';

function Activity() {
  return (
    <div className="activity">
      <div className="activity__map">
        <a
          href="/#"
          target="_blank"
          rel="noreferrer"
          className="activity__map-image"
        >
          <span className="activity__map-icon"></span>
        </a>

        <a
          href="/#"
          target="_blank"
          rel="noreferrer"
          className="activity__map-link"
        >
          Путешествовать
        </a>
      </div>
      <div className="activity__remark">
        <p className="activity__remark-text">
          Не самая лучшая ночь, что ты делаешь, ищешь, от чего прикурить в
          полчетвертого мечтаешь о новом свитере, о бороде или зарплате в тысячу
          долларов? утро никогда не настанет, никогда не приедут поливальные
          машины или вообще окажется, что мы на луне или что ты с рождения был
          кретином. Сон дразнит человека, уснуть не получится, хочется, ты еще в
          комнате?
        </p>
      </div>
    </div>
  );
}

export default Activity;
