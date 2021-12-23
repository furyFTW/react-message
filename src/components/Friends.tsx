import React, { memo, useState } from "react";
import {
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Person";
import { User } from "../models/user";
import { mockedFriends } from "./mocks";

const FriendsComponent = ({ changeFriend }) => {
  const [friends, setFriends] = useState<User[]>(mockedFriends);
  const [selectedFriend, setselectedFriend] = useState<User>(null);

  // useEffects(()=>{
  //   setFriends(friends)
  // })

  return (
    <List sx={{ minWidth: 200 }}>
      {friends.map((friend) => {
        const isActive = selectedFriend?.id === friend.id;
        return (
          <ListItemButton
            key={friend.id}
            onClick={() => {
              changeFriend(friend);
              setselectedFriend(friend);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon color={isActive ? "info" : "inherit"} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={friend.name}
              color="primary"
              secondary="online"
            />
          </ListItemButton>
        );
      })}
    </List>
  );
};

const Friends = memo(FriendsComponent);

export default Friends;
