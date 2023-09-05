import { ChatType } from "./chats";
import { MessageType } from "./messages";
import { UserType } from "./users";

export const messageFind = (
  messages: MessageType[],
  id: string | undefined
) => {
  const result = messages.find((item) => item.message_id === id);
  if (result !== undefined) {
    return result;
  }
};
export const chatFind = (chats: ChatType[], id: string | undefined) => {
  return chats.find((item) => item.chat_id === id);
};
export const userFind = (users: UserType[], id: string | undefined) => {
  return users.find((item) => item.user_id === id);
};
export const userNameFind = (users: UserType[], id: string | undefined) => {
  const user = users.find((item) => item.user_id === id);
  if (user?.user_id === "user1") {
    return "YOU";
  } else {
    return user?.username;
  }
};
