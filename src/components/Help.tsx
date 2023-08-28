import { useParams } from "react-router-dom";
import HelpGeneral from "./HelpGeneral";
import HelpSuggestion from "./HelpSuggestion";
import HelpBuqReport from "./HelpBuqReport";
import HelpPrivacy from "./HelpPrivacy";
import { useEffect } from "react";

const Help = () => {
  const { section } = useParams();
  useEffect(() => {
    console.log(section);
  }, [section]);
  if (section === "general") {
    return <HelpGeneral />;
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

export default Help;
