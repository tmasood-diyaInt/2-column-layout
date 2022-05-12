import { CONSTANTS } from "../../Helpers/Constants";
export default function Reports() {
  return (
    <div className=" main-container btn-danger">
      <div className="dashboardSkeleton ">
        <div className="skeletonContainer">
          <div className="strip__Top">
            <div>{CONSTANTS.REPORTS_SCREEN_TXT}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
