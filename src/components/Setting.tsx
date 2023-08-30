import { useParams } from "react-router-dom";
import HelpBuqReport from "./HelpBuqReport";
import HelpPrivacy from "./HelpPrivacy";
import { useEffect } from "react";
import SettingEditName from "./SettingEditName";
import SettingLogOut from "./SettingLogOut";

const Setting = () => {
  const { section } = useParams();
  useEffect(() => {
    console.log(section);
  }, [section]);
  if (section === "edit-name") {
    return <SettingEditName />;
  }
  if (section === "logout") {
    return <SettingLogOut />;
  }
  if (section === "buq-report") {
    return <HelpBuqReport />;
  }
  if (section === "privacy-and-security") {
    return <HelpPrivacy />;
  }
  return <div></div>;
};

export default Setting;
