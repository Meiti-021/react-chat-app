export type UserType = {
  user_id: string;
  username: string;
  email: string;
  profile_picture: string;
  private_chats: string[];
  group_chats: string[];
  location: string;
  career: string;
  biography: string;
};

export const users = [
  {
    user_id: "user1",
    username: "Alice",
    email: "alice@example.com",
    location: "New York",
    career: "Frontend Developer",
    biography:
      "Passionate about creating beautiful and functional user interfaces.",
    profile_picture: "alice_profile.jpg",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1", "group_chat2"],
  },
  {
    user_id: "user2",
    username: "Bob",
    email: "bob@example.com",
    location: "Los Angeles",
    career: "Data Scientist",
    biography: "Using data to uncover insights and drive decision-making.",
    profile_picture: "bob_profile.jpg",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1"],
  },
  {
    user_id: "user3",
    username: "Charlie",
    email: "charlie@example.com",
    location: "Chicago",
    career: "UX Designer",
    biography: "Creating seamless and delightful user experiences.",
    profile_picture: "charlie_profile.jpg",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1", "group_chat3"],
  },
  {
    user_id: "user4",
    username: "David",
    email: "david@example.com",
    location: "San Francisco",
    career: "Product Manager",
    biography: "Leading cross-functional teams to deliver innovative products.",
    profile_picture: "david_profile.jpg",
    private_chats: ["private_chat3"],
    group_chats: ["group_chat3"],
  },
  {
    user_id: "user5",
    username: "Eva",
    email: "eva@example.com",
    location: "Seattle",
    career: "Marketing Specialist",
    biography: "Crafting compelling campaigns that resonate with the audience.",
    profile_picture: "eva_profile.jpg",
    private_chats: ["private_chat4", "private_chat5"],
    group_chats: ["group_chat2", "group_chat3"],
  },
  {
    user_id: "user6",
    username: "Frank",
    email: "frank@example.com",
    location: "Miami",
    career: "Software Engineer",
    biography: "Solving complex problems through elegant code solutions.",
    profile_picture: "frank_profile.jpg",
    private_chats: ["private_chat5"],
    group_chats: ["group_chat1", "group_chat3"],
  },
  {
    user_id: "user7",
    username: "Grace",
    email: "grace@example.com",
    location: "Austin",
    career: "Graphic Designer",
    biography: "Bringing ideas to life with visually stunning designs.",
    profile_picture: "grace_profile.jpg",
    private_chats: ["private_chat6"],
    group_chats: ["group_chat2", "group_chat3"],
  },
  {
    user_id: "user8",
    username: "Helen",
    email: "helen@example.com",
    location: "Denver",
    career: "Financial Analyst",
    biography:
      "Analyzing data to provide valuable insights for financial decisions.",
    profile_picture: "helen_profile.jpg",
    private_chats: ["private_chat7"],
    group_chats: ["group_chat2"],
  },
  {
    user_id: "user9",
    username: "Ivy",
    email: "ivy@example.com",
    location: "Boston",
    career: "Writer",
    biography: "Crafting stories that captivate and inspire readers.",
    profile_picture: "ivy_profile.jpg",
    private_chats: ["private_chat8"],
    group_chats: ["group_chat2"],
  },
  {
    user_id: "user10",
    username: "Jack",
    email: "jack@example.com",
    location: "Philadelphia",
    career: "Entrepreneur",
    biography: "Building businesses that make a positive impact on society.",
    profile_picture: "jack_profile.jpg",
    private_chats: ["private_chat9", "private_chat10"],
    group_chats: ["group_chat1", "group_chat2"],
  },
];
