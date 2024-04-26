
import Sidebar from "../components/Sidebar";

import {USER_MAIN_DATA} from "../mockedData.js";

function Dashboard() {
  console.log(USER_MAIN_DATA);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <h1>Bonjour <span className="user-name">{USER_MAIN_DATA[0].userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="user-infos">
          <div className="user-infos__graphs">
            <p>un graph</p>
            <div className="les-trois-graphs">
              <p>les trois autres</p>
            </div>
          </div>
          <div className="user-infos__nutriments"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;