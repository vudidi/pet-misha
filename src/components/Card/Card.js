import './Card.css';

function Card() {
  return (
    <li className="card">
      <div className="card__image"></div>
      <div className="card__container">
        <div className="card__text">
          <h2 className="card__title">Пусть последним будет яростный прыжок</h2>
          <p className="card__content">
            Корабли твои сожгли хитрые лисицы. Стынет золото на дне, клад
            монастырей. Меч поет в твоих руках, звездами искрится. Жажду стали
            утолить просит побыстрей.
          </p>
        </div>
        <a href="/#" target="_blank" rel="noreferrer" className="card__link">
          Вперед
        </a>
      </div>
    </li>
  );
}

export default Card;
