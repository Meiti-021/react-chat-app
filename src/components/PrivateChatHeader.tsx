import { UserType } from "../utils/users";
import PrivateChatLargeScreenHeader from "./PrivateChatLargeScreenHeader";
import PrivateChatMobileHeader from "./PrivateChatMobileHeader";

const PrivateChatHeader = ({ user }: { user: UserType }) => {
  return (
    <>
      <PrivateChatMobileHeader user={user} />
      <PrivateChatLargeScreenHeader user={user} />
    </>
  );
};

export default PrivateChatHeader;
