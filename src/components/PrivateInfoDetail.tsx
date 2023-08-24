import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttachedFiles from "./AttachedFiles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { UserType } from "../utils/users";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WorkIcon from "@mui/icons-material/Work";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
const PrivateInfoDetail = ({ user }: { user: UserType }) => {
  return (
    <div>
      <Typography>About</Typography>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AlternateEmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={user.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Career" secondary={user.career} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonPinCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Location" secondary={user.location} />
        </ListItem>
      </List>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Attached Files</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AttachedFiles />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PrivateInfoDetail;
