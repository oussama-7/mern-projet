// import {
//   faBed,
//   faCalendarDays,
//   faCar,
//   faPerson,
//   faPlane,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './header.css';
import { Link } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem active">
          {/* <FontAwesomeIcon icon={faBed} /> */}
          <span>Home</span>
        </div>
        <div className="headerListItem">
          {/* <FontAwesomeIcon icon={faPlane} /> */}
          <span>Scolaire</span>
        </div>
        <div className="headerListItem">
          {/* <FontAwesomeIcon icon={faCar} /> */}
          <span>Parascolaire</span>
        </div>
        <div className="headerListItem">
          {/* <FontAwesomeIcon icon={faBed} /> */}
          <span>Stage</span>
        </div>
        <div className="headerListItem">
          <Link to="/homescreen">Shop</Link>
        </div>
        <div className="headerListItem">
          {/* <FontAwesomeIcon icon={faTaxi} /> */}
        </div>
      </div>
      <h5>Simplifiez votre vie étudiante dès maintenant!</h5>
      <p>
        Notre mission est de vous offrir un accès facile à l'apprentissage à
        travers des services de qualité en matière de scolaire, parascolaire et
        stages professionnels.
      </p>
    </div>
  );
};

export default Header;
