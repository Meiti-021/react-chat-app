import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ChatCardAction() {
  const { language } = useSelector((store: RootState) => store.setting);
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "absolute", bottom: 10, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      {language.actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
