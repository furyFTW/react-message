import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { Button, Box, TextField, Grid } from "@mui/material";
import { Message } from "../models/message";
import Messages from "./Messages";
import { User } from "../models/user";
import { UserContext } from "../../index";
import { mocekdMessages } from "./mocks";

interface Props {
  friend: User;
}

const ChatComponent: React.FC<Props> = ({ friend }) => {
  const user = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const messagesFromFriend = mocekdMessages[friend?.id];
    setMessages(messagesFromFriend);
  }, [friend]);

  const onSendMessageCallback = useCallback(() => {
    const lastMessage = messages[messages.length - 1];
    const myMessage = {
      text: message,
      id: lastMessage.id + 1,
      fromUserId: user.id,
      toUserId: friend.id
    };
    const newMessages = [...messages, myMessage];

    setMessages(newMessages);
    mocekdMessages[friend?.id].push(myMessage);
    setMessage("");
  }, [setMessage, setMessages, user, friend, message, messages]);

  return (
    <Box
      style={{ height: "100vh" }}
      display="flex"
      width="100vh"
      flexDirection="column"
    >
      <Box flex={1}>
        <Messages messages={messages} />
      </Box>
      <Box
        style={{
          marginBottom: "1em"
        }}
        display="flex"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={10} md={10}>
            <TextField
              fullWidth
              value={message}
              aria-label="Write a message..."
              placeholder="Write a message..."
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={2} md={2}>
          <Button
            variant="text"
            disabled={message.length === 0}
            onClick={onSendMessageCallback}
          >
            Send
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

const Chat = memo(ChatComponent);

export default Chat;
