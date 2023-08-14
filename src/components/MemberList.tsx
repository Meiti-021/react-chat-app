import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { userFind } from "../utils/utils";
import { Avatar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const MemberList = ({
  participants,
  admins,
}: {
  participants: string[];
  admins: boolean;
}) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {participants.map((item) => {
            const user = userFind(item);
            return (
              <Link to={`/${user?.user_id}`} style={{ textDecoration: "none" }}>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", gap: 2, mb: 2 }}
                >
                  <Avatar
                    src={`/assets/users/${user?.profile_picture}`}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Stack direction={"column"}>
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: "1.1rem",
                        textTransform: "capitalize",
                        fontFamily: "Public Sans",
                        fontWeight: 400,
                        color: "#000",
                      }}
                    >
                      {user?.username}
                    </Typography>
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: "0.8375rem",
                        textTransform: "capitalize",
                        fontFamily: "Public Sans",
                        fontWeight: 400,
                        color: "#7a7f9a",
                      }}
                    >
                      Last seen 8 min ago
                    </Typography>
                  </Stack>

                  <Typography
                    color={"blue"}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontSize: "0.8375rem",
                      textTransform: "capitalize",
                      fontFamily: "Public Sans",
                      fontWeight: 400,
                      marginLeft: "auto",
                    }}
                  >
                    {admins ? "admin" : undefined}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default MemberList;
