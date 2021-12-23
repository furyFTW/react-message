import React, { memo, useContext } from "react";
import { Box, ListItem, List, ListItemText } from "@mui/material";
import { Message } from "../models/message";
import { UserContext } from "../../index";

interface Props {
  messages: Message[];
}

const MessagesComponent: React.FC<Props> = ({ messages = [] }) => {
  const user = useContext(UserContext);
  return (
    <Box display="flex" width="100vh" flexDirection="column">
      <List sx={{ width: "100%" }}>
        {messages.map((message) => {
          const isUser = message.fromUserId === user?.id;
          return (
            <ListItem key={message.id} component="div">
              <ListItemText
                style={{
                  textAlign: isUser ? "right" : "left",
                  margin: "5px"
                }}
                primary={message.text}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

const Messages = memo(MessagesComponent);

export default Messages;
