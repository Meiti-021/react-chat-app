export type UserType = {
  user_id: string;
  username: string;
  email: string;
  profile_picture: string;
  private_chats: string[];
  group_chats: string[];
};

export const users = [
  {
    user_id: "user1",
    username: "Alice",
    email: "alice@example.com",
    profile_picture: "alice_profile.jpg",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1", "group_chat2"],
  },
  {
    user_id: "user2",
    username: "Bob",
    email: "bob@example.com",
    profile_picture: "bob_profile.jpg",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1"],
  },
  {
    user_id: "user3",
    username: "Charlie",
    email: "charlie@example.com",
    profile_picture: "charlie_profile.jpg",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1", "group_chat3"],
  },
  {
    user_id: "user4",
    username: "David",
    email: "david@example.com",
    profile_picture: "david_profile.jpg",
    private_chats: ["private_chat3"],
    group_chats: ["group_chat3"],
  },
  {
    user_id: "user5",
    username: "Eva",
    email: "eva@example.com",
    profile_picture: "eva_profile.jpg",
    private_chats: ["private_chat4", "private_chat5"],
    group_chats: ["group_chat2", "group_chat3"],
  },
  {
    user_id: "user6",
    username: "Frank",
    email: "frank@example.com",
    profile_picture: "frank_profile.jpg",
    private_chats: ["private_chat5"],
    group_chats: ["group_chat1", "group_chat3"],
  },
  {
    user_id: "user7",
    username: "Grace",
    email: "grace@example.com",
    profile_picture: "grace_profile.jpg",
    private_chats: ["private_chat6"],
    group_chats: ["group_chat2", "group_chat3"],
  },
  {
    user_id: "user8",
    username: "Helen",
    email: "helen@example.com",
    profile_picture: "helen_profile.jpg",
    private_chats: ["private_chat7"],
    group_chats: ["group_chat2"],
  },
  {
    user_id: "user9",
    username: "Ivy",
    email: "ivy@example.com",
    profile_picture: "ivy_profile.jpg",
    private_chats: ["private_chat8"],
    group_chats: ["group_chat2"],
  },
  {
    user_id: "user10",
    username: "Jack",
    email: "jack@example.com",
    profile_picture: "jack_profile.jpg",
    private_chats: ["private_chat9", "private_chat10"],
    group_chats: ["group_chat1", "group_chat2"],
  },
];
