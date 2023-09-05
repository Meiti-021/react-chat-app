import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users, UserType } from "../utils/users";
import { messages, MessageType } from "../utils/messages";
import { chats, ChatType } from "../utils/chats";

const initialState: {
  users: UserType[];
  messages: MessageType[];
  chats: ChatType[];
} = {
  users: users,
  messages: messages,
  chats: chats,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (
      state,
      action: PayloadAction<{ chatId: string; message: MessageType }>
    ) => {
      const updatedChat = state.chats.find((item) => {
        return item.chat_id === action.payload.chatId;
      });
      const chatList = state.chats.filter((item) => {
        return item.chat_id !== action.payload.chatId;
      });
      state.chats = chatList;
      if (updatedChat) {
        updatedChat.messages.push(action.payload.message.message_id);
        state.chats.unshift(updatedChat);
        state.messages.push(action.payload.message);
      }
    },
  },
});

export const { sendMessage } = chatSlice.actions;

export default chatSlice.reducer;
