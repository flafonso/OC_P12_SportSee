const BASE_URL = "http://localhost:3000";

interface UserData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

interface UserActivity {
  userId: number;
  sessions: Array<{
    day: string;
    kilogram: number;
    calories: number;
  }>;
}

interface UserAverageSessions {
  userId: number;
  sessions: Array<{
    day: number;
    sessionLength: number;
  }>;
}

interface UserPerformance {
  userId: number;
  kind: Record<number, string>;
  data: Array<{
    value: number;
    kind: number;
  }>;
}

async function fetchUserData(userId: number): Promise<UserData> {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.statusText}`);
  }
  return response.json();
}

async function fetchUserActivity(userId: number): Promise<UserActivity> {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user activity: ${response.statusText}`);
  }
  return response.json();
}

async function fetchUserAverageSessions(userId: number): Promise<UserAverageSessions> {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user average sessions: ${response.statusText}`);
  }
  return response.json();
}

async function fetchUserPerformance(userId: number): Promise<UserPerformance> {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user performance: ${response.statusText}`);
  }
  return response.json();
}

export {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance
};
