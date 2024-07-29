export interface UserData {
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

export interface UserActivity {
  userId: number;
  sessions: Array<{
    day: string;
    kilogram: number;
    calories: number;
  }>;
}

export interface UserAverageSessions {
  userId: number;
  sessions: Array<{
    day: number;
    sessionLength: number;
  }>;
}

export interface UserPerformance {
  userId: number;
  kind: Record<number, string>;
  data: Array<{
    value: number;
    kind: number;
  }>;
}

function normalizeUserData({ data }: any): UserData {
  // console.log(data);
  return {
    id: data.id,
    userInfos: data.userInfos,
    score: data.todayScore ?? data.score,
    keyData: data.keyData,
  };
}

function normalizeUserActivity({ data }: any): UserActivity {
  return {
    userId: data.userId,
    sessions: data.sessions,
  };
}

function normalizeUserAverageSessions({ data }: any): UserAverageSessions {
  return {
    userId: data.userId,
    sessions: data.sessions,
  };
}

function normalizeUserPerformance({ data }: any): UserPerformance {
  return {
    userId: data.userId,
    kind: data.kind,
    data: data.data,
  };
}

export {
  normalizeUserData,
  normalizeUserActivity,
  normalizeUserAverageSessions,
  normalizeUserPerformance,
};
