import AppleIcon from "../assets/AppleIcon.js";
import CheeseburgerIcon from "../assets/CheeseburgerIcon.js";
import ChickenIcon from "../assets/ChickenIcon.js";
import EnergyIcon from "../assets/EnergyIcon.js";
import NutrimentInfo from "../components/NutrimentInfo.js";
import Sidebar from "../components/Sidebar";
import DailyActivityChart from "../components/graphs/DailyActivityChart.js";
import PerformanceByActivityChart from "../components/graphs/PerformanceByActivityChart.tsx";

import { USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE} from "../mockedData.js";

function Dashboard() {
  console.log(USER_ACTIVITY[0].sessions);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <h1>
          Bonjour{" "}
          <span className="user-name">
            {USER_MAIN_DATA[0].userInfos.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <div className="user-infos">
          <div className="user-infos__graphs">
            <DailyActivityChart data={USER_ACTIVITY[0].sessions} />
            <div className="les-trois-graphs">
              <PerformanceByActivityChart performanceData={USER_PERFORMANCE[0]} />
            </div>
          </div>

          <div className="user-infos__nutrition">
            <NutrimentInfo
              typeName="Calories"
              unit="kCal"
              value={USER_MAIN_DATA[0].keyData.calorieCount}
              backgroundColor="#FF000010"
            >
              <EnergyIcon />
            </NutrimentInfo>
            <NutrimentInfo
              typeName="Proteines"
              unit="g"
              value={USER_MAIN_DATA[0].keyData.proteinCount}
              backgroundColor="#4AB8FF10"
            >
              <ChickenIcon />
            </NutrimentInfo>
            <NutrimentInfo
              typeName="Glucides"
              unit="g"
              value={USER_MAIN_DATA[0].keyData.carbohydrateCount}
              backgroundColor="#F9CE2310"
            >
              <AppleIcon />
            </NutrimentInfo>
            <NutrimentInfo
              typeName="Lipides"
              unit="g"
              value={USER_MAIN_DATA[0].keyData.lipidCount}
              backgroundColor="#FD518110"
            >
              <CheeseburgerIcon />
            </NutrimentInfo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
