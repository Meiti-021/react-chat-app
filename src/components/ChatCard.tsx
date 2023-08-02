import Card from "@mui/material/Card";
import { users } from "../utils/users";
import { Link } from "react-router-dom";
import { useState } from "react";
const ChatCard = ({
  participants,
  messages,
}: {
  private: boolean;
  participants: Array<string>;
  messages: Array<string>;
}) => {
  const [user, setUser] = useState(undefined);
  return (
    <Card
      component={Link}
      to={"/"}
      sx={{ width: "100%", height: "100px", display: "flex" }}
    >
      {participants[1]}
    </Card>
  );
};

export default ChatCard;
