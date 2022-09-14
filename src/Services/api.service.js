import methods from "../fetch";

export const getMeetings = async () => {
  return await methods.get("/meetings");
};

export const login = async (loginData) => {
  return await methods.post("/login", loginData);
};

export const createMeeting = async (data) => {
  return await methods.post("/meetings", data);
};
export const getUsers = async () => {
  return await methods.get("/users");
};
export const createCharges = async (payload) => {
  return await methods.post("/charges", payload);
};
