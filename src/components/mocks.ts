import { Message } from "../models/message";
import { User } from "../models/user";

export const mocekdMessages: Record<string, Message[]> = {
  2: [
    {
      id: 1,
      text: "Message 1 ",
      fromUserId: 2
    },
    {
      id: 2,
      text: "Text 123",
      fromUserId: 2
    },
    {
      id: 3,
      text: "My messages",
      fromUserId: 1,
      toUserId: 2
    }
  ],
  3: [
    {
      id: 5,
      text: "User 3",
      fromUserId: 3
    },
    {
      id: 4,
      text: "My messages to 3 ",
      fromUserId: 1,
      toUserId: 3
    }
  ],
  4: [
    {
      id: 5,
      text: "User 4",
      fromUserId: 4
    },
    {
      id: 4,
      text: "My messages to 4 ",
      fromUserId: 1,
      toUserId: 4
    }
  ]
};

export const mockedFriends: User[] = [
  {
    id: 2,
    name: "Linda"
  },
  {
    id: 3,
    name: "Peter"
  },
  {
    id: 4,
    name: "John"
  }
];
