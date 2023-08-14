import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MemberList from "./MemberList";
import AttachedFiles from "./AttachedFiles";
const GroupInfoDetail = ({ participants }: { participants: string[] }) => {
  return (
    <div>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Admins</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MemberList participants={participants} admins={true} />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Members</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MemberList participants={participants} admins={false} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
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

export default GroupInfoDetail;