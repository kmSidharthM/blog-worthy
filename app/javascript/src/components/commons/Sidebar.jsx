import React, { useEffect, useState } from "react";

import { Avatar, Typography, Button } from "@bigbinary/neetoui";

import userApi from "../../apis/users";

const Sidebar = ({ id }) => {
  const [user, setUser] = useState({});

  const showUser = async () => {
    try {
      const {
        data: { user },
      } = await userApi.show(id);
      setUser(user);
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    showUser();
  }, []);

  return (
    <div className="fixed left-0 top-0 flex h-full w-32 flex-col items-center justify-between border-r-2 py-8">
      <div className="h-20 w-16 bg-purple-400" />
      <div className="mx-2 flex flex-col items-center space-y-1 px-1">
        <Avatar
          size="extraLarge"
          user={{
            name: user.name,
          }}
        />
        <Typography className="text-black" style="h5">
          {user.name}
        </Typography>
        <Typography className="text-gray-500" style="h6">
          {user.email}
        </Typography>
        <Button className="bg-purple-600" label="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
