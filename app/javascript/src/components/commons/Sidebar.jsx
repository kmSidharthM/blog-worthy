import React from "react";

import { Avatar, Typography, Button } from "@bigbinary/neetoui";

import authApi from "apis/auth";
import { resetAuthTokens } from "apis/axios";
import {
  setToLocalStorage,
  getFromLocalStorage,
} from "components/utils/storage";

const Sidebar = () => {
  const userName = getFromLocalStorage("authUserName");
  const userEmail = getFromLocalStorage("authEmail");
  // const showUser = async () => {
  //   try {
  //     const {
  //       data: { user },
  //     } = await userApi.show(userId);
  //     setUser(user);
  //   } catch (error) {
  //     logger.error(error);
  //   }
  // };

  // useEffect(() => {
  //   showUser();
  // }, []);

  const handleLogout = async () => {
    try {
      await authApi.logout();
      setToLocalStorage({
        authToken: null,
        email: null,
        userId: null,
        name: null,
      });
      resetAuthTokens();
      window.location.href = "/login";
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-36 flex-col items-center justify-between border-r-2 py-8">
      <div className="h-20 w-16 bg-purple-400" />
      <div className="mx-2 flex flex-col items-center space-y-1 px-1">
        <Avatar
          size="extraLarge"
          user={{
            name: userName,
          }}
        />
        <Typography className="text-black" style="h5">
          {userName}
        </Typography>
        <Typography className="text-gray-500" style="h6">
          {userEmail}
        </Typography>
        <Button
          className="bg-purple-600"
          label="Logout"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
