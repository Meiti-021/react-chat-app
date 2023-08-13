import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import GroupsIcon from "@mui/icons-material/Groups";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
const actions = [
  { icon: <MapsUgcIcon />, name: "New Chat" },
  { icon: <GroupsIcon />, name: "New Group" },
  { icon: <VolumeDownIcon />, name: "New Channel" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function ChatCardAction() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "absolute", bottom: 10, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
