import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
export const helpDatacenter = [
  {
    id: "general",
    title: "General",
    icon: <SettingsOutlinedIcon sx={{ fontSize: "inherit" }} />,
  },
  {
    id: "suggestion",
    title: "Suggestion",
    icon: <AssistantOutlinedIcon sx={{ fontSize: "inherit" }} />,
  },
  {
    id: "buq-report",
    title: "Buq Report",
    icon: <BugReportOutlinedIcon sx={{ fontSize: "inherit" }} />,
  },
  {
    id: "privacy-and-security",
    title: "Privacy & Security",
    icon: <PrivacyTipOutlinedIcon sx={{ fontSize: "inherit" }} />,
  },
];
