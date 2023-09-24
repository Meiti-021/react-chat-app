export type ChatType = {
  peer_private: boolean;
  participants: Array<string>;
  messages: Array<string>;
  group_name: string | null;
  group_profile: string | null;
  chat_id: string;
  description: string | null;
};

export const chats: ChatType[] = [
  {
    chat_id: "user2",
    peer_private: true,
    participants: ["user1", "user2"],
    messages: ["message1", "message2", "message3"],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "user3",
    peer_private: true,
    participants: ["user1", "user3"],
    messages: ["message4", "message5"],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "group_chat1",
    peer_private: false,
    participants: [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
      "user10",
    ],
    messages: ["message6", "message7", "message8", "message9", "message10"],
    group_name: "The boys",
    group_profile: "/assets/users/group_chat1.webp",
    description: "Let justice be done though the heavens fall",
  },
  {
    chat_id: "group_chat2",
    peer_private: false,
    participants: [
      "user1",
      "user2",
      "user4",
      "user5",
      "user6",
      "user7",
      "user10",
    ],
    messages: ["message11"],
    group_name: "THE SEVEN",
    group_profile: "/assets/users/group_chat2.jpg",
    description: "We Are Vought. We Make Heroes Super",
  },
  {
    chat_id: "group_chat3",
    peer_private: false,
    participants: ["user1", "user9", "user5", "user10"],
    messages: [
      "message12",
      "message13",
      "message14",
      "message15",
      "message16",
      "message17",
      "message18",
      "message19",
      "message20",
    ],
    group_name: "freedom!",
    group_profile: "/assets/users/group_chat3.png",
    description: "We'll Cross That Bridge When We Burn It.",
  },
  {
    chat_id: "user6",
    peer_private: true,
    participants: ["user1", "user6"],
    messages: ["message17"],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "user7",
    peer_private: true,
    participants: ["user1", "user7"],
    messages: [
      "message18",
      "message19",
      "message20",
      "message21",
      "message22",
      "message23",
    ],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "user9",
    peer_private: true,
    participants: ["user1", "user9"],
    messages: ["message24", "message25"],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "user8",
    peer_private: true,
    participants: ["user1", "user8"],
    messages: ["message26", "message27"],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "user4",
    peer_private: true,
    participants: ["user1", "user4"],
    messages: ["message28", "message29"],
    group_name: null,
    group_profile: null,
    description: null,
  },
  {
    chat_id: "user5",
    peer_private: true,
    participants: ["user1", "user5"],
    messages: ["message30", "message31"],
    group_name: null,
    group_profile: null,
    description: null,
  },
];
