import { useParams } from "react-router-dom";
import HelpGeneral from "./HelpGeneral";
import HelpSuggestion from "./HelpSuggestion";
import HelpBuqReport from "./HelpBuqReport";
import HelpPrivacy from "./HelpPrivacy";
import { useEffect } from "react";
import SettingEditName from "./SettingEditName";

const Setting = () => {
  const { section } = useParams();
  useEffect(() => {
    console.log(section);
  }, [section]);
  if (section === "edit-name") {
    return <SettingEditName />;
  }
  if (section === "suggestion") {
    return <HelpSuggestion />;
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
