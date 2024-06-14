import AppleIcon from "../assets/AppleIcon.js";
import CheeseburgerIcon from "../assets/CheeseburgerIcon.js";
import ChickenIcon from "../assets/ChickenIcon.js";
import EnergyIcon from "../assets/EnergyIcon.js";
import NutrimentInfo from "../components/NutrimentInfo.js";
import Sidebar from "../components/Sidebar";
import DailyActivityChart from "../components/graphs/DailyActivityChart.js";
import PerformanceByActivityChart from "../components/graphs/PerformanceByActivityChart.tsx";
import AverageSessionChart from "../components/graphs/AverageSessionChart.js";
import ScoreChart from "../components/graphs/ScoreChart.tsx";
import {
  UserData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from "../dataNormalizer.ts";

import { useEffect, useState } from "react";
import {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from "../services/apiService.ts";

function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);
  const [userAverageSessions, setUserAverageSessions] =
    useState<UserAverageSessions | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);
  const userId = 12;

  useEffect(() => {
    async function fetchData() {
      try {
        const [mainData, activity, averageSessions, performance] =
          await Promise.all([
            fetchUserData(userId),
            fetchUserActivity(userId),
            fetchUserAverageSessions(userId),
            fetchUserPerformance(userId),
          ]);
        setUserData(mainData);
        setUserActivity(activity);
        setUserAverageSessions(averageSessions);
        setUserPerformance(performance);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [userId]);

  if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
    return <div>Loading...</div>;
  }
  // console.log(userData);
  // console.log(userActivity);
  // console.log(userAverageSessions);
  // console.log(userPerformance);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <h1>
          Bonjour{" "}
          <span className="user-name">{userData.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <div className="user-infos">
          <div className="user-infos__graphs">
            <DailyActivityChart data={userActivity.sessions} />
            <div className="activity-details">
              <AverageSessionChart data={userAverageSessions.sessions} />
              <PerformanceByActivityChart performanceData={userPerformance} />
              <ScoreChart data={userData} />
            </div>
          </div>

          <div className="user-infos__nutrition">
            <NutrimentInfo
              typeName="Calories"
              unit="kCal"
              value={userData.keyData.calorieCount}
              backgroundColor="#FF000010"
            >
              <EnergyIcon />
            </NutrimentInfo>
            <NutrimentInfo
              typeName="Proteines"
              unit="g"
              value={userData.keyData.proteinCount}
              backgroundColor="#4AB8FF10"
            >
              <ChickenIcon />
            </NutrimentInfo>
            <NutrimentInfo
              typeName="Glucides"
              unit="g"
              value={userData.keyData.carbohydrateCount}
              backgroundColor="#F9CE2310"
            >
              <AppleIcon />
            </NutrimentInfo>
            <NutrimentInfo
              typeName="Lipides"
              unit="g"
              value={userData.keyData.lipidCount}
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
