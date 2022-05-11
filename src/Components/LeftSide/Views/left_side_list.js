import { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Images } from "./../../../Assets/Images/Images";
import { UserContext } from "../../../Context/UserContext";

export default function LEFT_SIDE_LIST({ menuType, isActive, setIsActive }) {
  const location = useLocation();
  const history = useHistory();
  const { currentUser, setCurrentUser, setChanges } = useContext(UserContext);

  return (
    <ul>
      <li className="route-link">
        <img
          src={Images.user_logo}
          alt="icon"
          id="imgBlack"
          className="imgUserSidebar"
        />
      </li>
      <li className="route-link ml21">
        <p className="txtHello">Hello</p>
      </li>
      <li className="route-link">
        <p className="txtUserName">{currentUser?.name}</p>
      </li>

      
      <li className="">
        <button className="searchButton">
          <img src={Images.search_icon} alt="search" /> Live Stats
        </button>
      </li>
      <li className="route-link" onClick={()=> history.push('/dashboard')}>
        <p className="txtUserName">Dashboard</p>
      </li>
      <li className="route-link" onClick={()=> history.push('/reports')}>
        <p className="txtUserName">Reports</p>
      </li>
    </ul>
  );
}
