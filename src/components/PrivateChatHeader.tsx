import { UserType } from "../utils/users";
import PrivateChatLargeScreenHeader from "./PrivateChatLargeScreenHeader";
import PrivateChatMobileHeader from "./PrivateChatMobileHeader";

const PrivateChatHeader = ({
  participants,
  user,
}: {
  participants: string[];
  user: UserType;
}) => {
  return (
    <>
      <PrivateChatMobileHeader participants={participants} user={user} />
      <PrivateChatLargeScreenHeader participants={participants} user={user} />
    </>
  );
};

export default PrivateChatHeader;
