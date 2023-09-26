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
    editEmail: (
      state,
      action: PayloadAction<{
        newEmail: string;
      }>
    ) => {
      state.users[0].email = action.payload.newEmail;
    },
    editLocation: (
      state,
      action: PayloadAction<{
        newLocation: string;
      }>
    ) => {
      state.users[0].location = action.payload.newLocation;
    },
    editCareer: (
      state,
      action: PayloadAction<{
        newCareer: string;
      }>
    ) => {
      state.users[0].career = action.payload.newCareer;
    },
    editBio: (
      state,
      action: PayloadAction<{
        newBio: string;
      }>
    ) => {
      state.users[0].biography = action.payload.newBio;
    },
    seenMessage: (state, action: PayloadAction<{ messageId: string }>) => {
      const index = state.messages.findIndex(
        (item) => item.message_id === action.payload.messageId
      );
      if (state.messages[index].sender !== "user1") {
        state.messages[index].seen = true;
      }
    },
    uploadProfile: (state, action: PayloadAction<{ img: string }>) => {
      state.users[0].profile_picture = action.payload.img;
    },
    replayMessage: (state, action: PayloadAction<{ messageId: string }>) => {
      const index = state.chats.findIndex((item) =>
        item.messages.includes(action.payload.messageId)
      );
      state.chats[index].replay = action.payload.messageId;
    },
    cancelReplay: (state, action: PayloadAction<{ chatId: string }>) => {
      const index = state.chats.findIndex((item) => {
        return item.chat_id === action.payload.chatId;
      });
      state.chats[index].replay = undefined;
    },
  },
});

export const {
  sendMessage,
  deleteMessage,
  editMessage,
  editName,
  editEmail,
  editLocation,
  editCareer,
  editBio,
  seenMessage,
  uploadProfile,
  replayMessage,
  cancelReplay,
} = chatSlice.actions;

export default chatSlice.reducer;
