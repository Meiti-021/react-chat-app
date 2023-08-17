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
    username: "Meiti(MAhdi) Dehgani",
    email: "meiti.edu@gmail.com",
    location: "Los Angeles",
    career: "Front-end Developer",
    biography:
      "my powers are beyond any super power, i can develope everything that i can imagine.",
    profile_picture: "fav.png",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1"],
  },
  {
    user_id: "user2",
    username: "A-train",
    email: "A-train@example.com",
    location: "New York",
    career: "Speed runner",
    biography: "Passionate about Running and Killing passangers.",
    profile_picture: "A-train.webp",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1", "group_chat2"],
  },
  {
    user_id: "user3",
    username: "SoldierBoy",
    email: "soldierboy@example.com",
    location: "Chicago",
    career: "military expert",
    biography: "Fighting against nazis and destroying stuff",
    profile_picture: "soldierboy.webp",
    private_chats: ["private_chat2"],
    group_chats: ["group_chat1", "group_chat3"],
  },
  {
    user_id: "user4",
    username: "Deep",
    email: "deep@example.com",
    location: "San Francisco",
    career: "Swimmer",
    biography: "nothing special about this looser.",
    profile_picture: "Deep.webp",
    private_chats: ["private_chat3"],
    group_chats: ["group_chat3"],
  },
  {
    user_id: "user5",
    username: "starlight",
    email: "starlight@example.com",
    location: "Seattle",
    career: "Superhero at the seven",
    biography: " a cute feminin hero that everybody loves, cring af.",
    profile_picture: "starlight.webp",
    private_chats: ["private_chat4", "private_chat5"],
    group_chats: ["group_chat2", "group_chat3"],
  },
  {
    user_id: "user6",
    username: "Homlander",
    email: "frank@example.com",
    location: "Miami",
    career: "American facist evil military expert",
    biography: "Really good at mass murders and destroying everything",
    profile_picture: "homelander.webp",
    private_chats: ["private_chat5"],
    group_chats: ["group_chat1", "group_chat3"],
  },
  {
    user_id: "user7",
    username: "Lamblighter",
    email: "lamblighter@example.com",
    location: "Austin",
    career: "The cooke",
    biography: "He cookes everything spacially humans",
    profile_picture: "Lamplighter.webp",
    private_chats: ["private_chat6"],
    group_chats: ["group_chat2", "group_chat3"],
  },
  {
    user_id: "user8",
    username: "black-noir",
    email: "helen@example.com",
    location: "Denver",
    career: "martial art coach",
    biography: "ninja skills, no face, no voice, crrepy as shit!",
    profile_picture: "black-noir.webp",
    private_chats: ["private_chat7"],
    group_chats: ["group_chat2"],
  },
  {
    user_id: "user9",
    username: "billy butcher",
    email: "butcher@example.com",
    location: "Boston",
    career: "Private Detective",
    biography:
      "anti hero, human version of a superhero, hates superheros, kills superheros",
    profile_picture: "ivy_profile.webp",
    private_chats: ["private_chat8"],
    group_chats: ["group_chat2"],
  },
  {
    user_id: "user10",
    username: "captain",
    email: "captain@example.com",
    location: "Philadelphia",
    career: "A soldier boys placeholder",
    biography:
      "He doesn't exist in the boys, it here beacuse  i ran out of character",
    profile_picture: "captain.webp",
    private_chats: ["private_chat9", "private_chat10"],
    group_chats: ["group_chat1", "group_chat2"],
  },
];
