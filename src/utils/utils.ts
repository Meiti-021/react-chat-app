import { users } from "./users";
import { messages } from "./messages";
import { chats } from "./chats";

export const messageFind = (id: string | undefined) => {
  return messages.find((item) => item.message_id === id);
};
export const chatFind = (id: string | undefined) => {
  return chats.find((item) => item.chat_id === id);
};
export const userFind = (id: string | undefined) => {
  return users.find((item) => item.user_id === id);
};
export const userNameFind = (id: string | undefined) => {
  const user = users.find((item) => item.user_id === id);
  if (user?.user_id === "user1") {
    return "YOU";
  } else {
    return user?.username;
  }
};
