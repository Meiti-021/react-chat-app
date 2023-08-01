export const chats = [
  {
    chat_id: "private_chat1",
    private: true,
    participants: ["user1", "user2"],
    messages: ["message1", "message2", "message3"],
  },
  {
    chat_id: "private_chat2",
    private: true,
    participants: ["user1", "user3"],
    messages: ["message4", "message5"],
  },
  {
    chat_id: "private_chat3",
    private: true,
    participants: ["user2", "user4"],
    messages: ["message6", "message7", "message8"],
  },
  {
    chat_id: "group_chat1",
    private: false,
    admin: "user1",
    participants: ["user1", "user2", "user5", "user6"],
    messages: ["message9", "message10"],
  },
  {
    chat_id: "group_chat2",
    private: false,
    admin: "user3",
    participants: ["user1", "user5", "user7", "user10"],
    messages: ["message11"],
  },
  {
    chat_id: "group_chat3",
    private: false,
    admin: "user5",
    participants: ["user3", "user6", "user7", "user10"],
    messages: ["message12", "message13", "message14"],
  },
  {
    chat_id: "private_chat4",
    private: true,
    participants: ["user5", "user8"],
    messages: ["message15", "message16"],
  },
  {
    chat_id: "private_chat5",
    private: true,
    participants: ["user5", "user6"],
    messages: ["message17"],
  },
  {
    chat_id: "private_chat6",
    private: true,
    participants: ["user7", "user9"],
    messages: ["message18", "message19", "message20"],
  },
  {
    chat_id: "private_chat7",
    private: true,
    participants: ["user8", "user10"],
    messages: ["message21", "message22", "message23"],
  },
  {
    chat_id: "private_chat8",
    private: true,
    participants: ["user9", "user10"],
    messages: ["message24", "message25"],
  },
  {
    chat_id: "private_chat9",
    private: true,
    participants: ["user10", "user7"],
    messages: ["message26", "message27"],
  },
  {
    chat_id: "private_chat10",
    private: true,
    participants: ["user10", "user8"],
    messages: ["message28", "message29"],
  },
];
