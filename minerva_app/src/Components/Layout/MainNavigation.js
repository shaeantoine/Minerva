import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Project Minerva</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Subjects</Link>
          </li>
          <li>
            <Link to='/research'>Supporting Research</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;