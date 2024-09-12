export const setToLocalStorage = ({ authToken, email, userId, userName }) => {
  localStorage.setItem("authToken", JSON.stringify(authToken));
  localStorage.setItem("authEmail", JSON.stringify(email));
  localStorage.setItem("authUserId", JSON.stringify(userId));
  localStorage.setItem("authUserName", JSON.stringify(userName));
};

export const getFromLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};
