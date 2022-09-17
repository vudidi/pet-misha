import './Main.css';

import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import Activity from '../Activity/Activity';
import Cards from '../Cards/Cards';
// import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <div className="main__content">
        {' '}
        <section className="main__sidebar-left">
          <UserInfo />
        </section>
        <section className="main__content-center">
          <Navigation />
          <Cards />
        </section>
        <section className="main__sidebar-right">
          <Activity />
        </section>
      </div>
    </div>
  );
}

export default Main;
