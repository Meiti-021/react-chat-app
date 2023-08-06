import { useParams } from "react-router-dom";

const Chat = () => {
  const { chatID } = useParams();
  return <div>{chatID}</div>;
};

export default Chat;
