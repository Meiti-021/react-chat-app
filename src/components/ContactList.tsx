import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WorkIcon from "@mui/icons-material/Work";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { users } from "../utils/users";
import { Link } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
const ContactList = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      {users
        .filter((item) => item.user_id !== "user1")
        .map((item) => {
          return (
            <Accordion
              expanded={expanded === item.user_id}
              onChange={handleChange(item.user_id)}
              elevation={0}
              sx={{ borderTop: "1px solid #EAEDF3" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Link
                  to={`/${item.user_id}`}
                  style={{ textDecoration: "none" }}
                  key={item.user_id + "member"}
                >
                  <ListItem disablePadding sx={{ display: "flex", gap: 2 }}>
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
                        {item.last_activity === "online"
                          ? "Online"
                          : `Last seen ${item.last_activity}`}
                      </Typography>
                    </Stack>
                  </ListItem>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <InfoOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>{item.biography}</ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <ChatOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        to={`/${item.user_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        Start Messaging
                      </Link>
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <AlternateEmailIcon />
                    </ListItemIcon>
                    <ListItemText>{item.email}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PersonPinCircleIcon />
                    </ListItemIcon>
                    <ListItemText>{item.location}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText>{item.career}</ListItemText>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </>
  );
};

export default ContactList;
