import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Avatar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { UserType } from "../utils/users";
const MemberList = ({
  participants,
  admins,
}: {
  participants: UserType[];
  admins: boolean;
}) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {participants
            .slice(admins ? 0 : 2, admins ? 2 : participants.length)
            .map((item) => {
              return (
                <Link
                  to={`/${item.user_id}`}
                  style={{ textDecoration: "none" }}
                  key={item.user_id + "member"}
                >
                  <ListItem
                    disablePadding
                    sx={{ display: "flex", gap: 2, mb: 2 }}
                  >
                    <Avatar
                      src={`/assets/users/${item.profile_picture}`}
                      sx={{
                        width: 40,
                        height: 40,
                        background:
                          "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
                      }}
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
                        {item.username}
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
                        Last seen recently
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
