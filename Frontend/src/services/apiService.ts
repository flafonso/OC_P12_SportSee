import {
  normalizeUserData,
  normalizeUserActivity,
  normalizeUserAverageSessions,
  normalizeUserPerformance,
  UserData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from "../dataNormalizer.ts";

const BASE_URL = "http://localhost:3000";

async function fetchUserData(userId: number): Promise<UserData> {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.statusText}`);
  }
  const data = await response.json();
  return normalizeUserData(data);
}

async function fetchUserActivity(userId: number): Promise<UserActivity> {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user activity: ${response.statusText}`);
  }
  const data = await response.json();
  return normalizeUserActivity(data);
}

async function fetchUserAverageSessions(
  userId: number
): Promise<UserAverageSessions> {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch user average sessions: ${response.statusText}`
    );
  }
  const data = await response.json();
  return normalizeUserAverageSessions(data);
}

async function fetchUserPerformance(userId: number): Promise<UserPerformance> {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user performance: ${response.statusText}`);
  }
  const data = await response.json();
  return normalizeUserPerformance(data);
}

export {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
};
