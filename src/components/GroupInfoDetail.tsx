import MemberList from "./MemberList";
import AttachedFiles from "./AttachedFiles";
import { UserType } from "../utils/users";
import { Tabs, Tab, Typography, Box } from "@mui/material";

import * as React from "react";
import ChatMedia from "./ChatMedia";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  padding: boolean;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, padding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: padding ? 3 : 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GroupInfoDetail = ({ participants }: { participants: UserType[] }) => {
  const { language } = useSelector((store: RootState) => store.setting);
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={language.members} {...a11yProps(0)} />
          <Tab label={language.admins} {...a11yProps(1)} />
          <Tab label={language.media} {...a11yProps(2)} />
          <Tab label={language.files} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} padding={true}>
        <MemberList admins={false} participants={participants} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} padding={true}>
        <MemberList admins={true} participants={participants} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} padding={false}>
        <ChatMedia />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} padding={true}>
        <AttachedFiles />
      </CustomTabPanel>
    </Box>
  );
};

export default GroupInfoDetail;
