import { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Images } from "./../../../Assets/Images/Images";
import { UserContext } from "../../../Context/UserContext";
import { CONSTANTS } from "../../../Helpers/Constants";

export default function LEFT_SIDE_LIST({ isActive }) {
  const location = useLocation();
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

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
        <p className="txtHello">{CONSTANTS.HELLO_TXT}</p>
      </li>
      <li className="route-link">
        <p className="txtUserName">{currentUser?.name}</p>
      </li>

      <li className="">
        <button className="searchButton">
          <img src={Images.search_icon} alt="search" /> {CONSTANTS.STATS_TXT}
        </button>
      </li>
      <Link id={`sidebar`} to={"/dashboard"} className="route-link">
        <li
          className={isActive === "/dashboard" ? "active" : ""}
          onClick={() => history.push("/dashboard")}
        >
          <p className="labelDashboard">{CONSTANTS.DASHBOARD_TXT}</p>
        </li>
      </Link>
      <Link id={`sidebar`} to={"/reports"} className="route-link">
        <li
          className={isActive === "/reports" ? "active" : ""}
          onClick={() => history.push("/reports")}
        >
          <p className="labelReports">{CONSTANTS.REPORTS_TXT}</p>
        </li>
      </Link>
    </ul>
  );
}
