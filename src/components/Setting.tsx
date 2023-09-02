import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SettingEditName from "./SettingEditName";
import SettingLogOut from "./SettingLogOut";
import SettingEmial from "./SettingEmial";
import SettingLocation from "./SettingLocation";
import SettingCareer from "./SettingCareer";
import SettingBio from "./SettingBio";
import SettingChat from "./SettingChat";
import SettingPrivacy from "./SettingPrivacy";
import SettingNotification from "./SettingNotification";

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
  if (section === "email") {
    return <SettingEmial />;
  }
  if (section === "location") {
    return <SettingLocation />;
  }
  if (section === "career") {
    return <SettingCareer />;
  }
  if (section === "bio") {
    return <SettingBio />;
  }
  if (section === "chat-setting") {
    return <SettingChat />;
  }
  if (section === "privacy") {
    return <SettingPrivacy />;
  }
  if (section === "notification") {
    return <SettingNotification />;
  }
  return <div></div>;
};

export default Setting;
