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
    deleteMessage: (state, action: PayloadAction<{ messageId: string }>) => {
      const indexInMessageList = state.messages.findIndex(
        (item) => item.message_id === action.payload.messageId
      );
      state.messages.splice(indexInMessageList, 1);
      const indexOfChat = state.chats.findIndex((item) => {
        return item.messages.includes(action.payload.messageId);
      });
      const indexInChat = state.chats[indexOfChat].messages.findIndex(
        (item) => item === action.payload.messageId
      );
      state.chats[indexOfChat].messages.splice(indexInChat, 1);
    },
    editMessage: (
      state,
      action: PayloadAction<{ messageId: string; newContent: string }>
    ) => {
      const indexOfmessage = state.messages.findIndex(
        (item) => item.message_id === action.payload.messageId
      );
      state.messages[indexOfmessage].content = action.payload.newContent;
    },
    editName: (
      state,
      action: PayloadAction<{
        newName: string;
        newLastName: string;
      }>
    ) => {
      state.users[0].username = action.payload.newName;
      state.users[0].userLastName = action.payload.newLastName;
    },
  },
});

export const { sendMessage, deleteMessage, editMessage, editName } =
  chatSlice.actions;

export default chatSlice.reducer;
