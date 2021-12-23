import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { render } from "react-dom";
import Login from "./src/components/Login";
import Messager from "./src/components/Messager";
import { User } from "./src/models/user";

export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState<User>(null);
  const onChangeUser = useCallback((name: string) => {
    setUser({
      id: 1,
      name
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        {!!user ? (
          <UserContext.Provider value={user}>
            <Messager />
          </UserContext.Provider>
        ) : (
          <Login onChange={onChangeUser} />
        )}
      </Box>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
