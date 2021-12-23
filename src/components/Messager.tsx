import React, { memo, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";

import Friends from "./Friends";
import Chat from "./Chat";

const MessagerComponent = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <Grid
      container
      display="flex"
      style={{
        height: "100vh"
      }}
      flexDirection="row"
    >
      <Grid item>
        <Friends
          changeFriend={(friend) => {
            setSelectedFriend(friend);
          }}
        />
      </Grid>
      <Grid item>
        {selectedFriend && <Chat friend={selectedFriend} />}
        {!selectedFriend && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            flexDirection="column"
          >
            Select a friend
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

const Messager = memo(MessagerComponent);

export default Messager;
