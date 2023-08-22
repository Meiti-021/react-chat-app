import { UserType } from "../utils/users";
import GroupChatLargeScreenHeader from "./GroupChatLargeScreenHeader";
import GroupChatMobileHeader from "./GroupChatMobileHeader";

const GroupChatHeader = ({
  participants,
  group_name,
  group_profile,
}: {
  participants: UserType[];
  group_name: string | null;
  group_profile: string | null;
}) => {
  return (
    <>
      <GroupChatMobileHeader
        participants={participants}
        group_name={group_name}
        group_profile={group_profile}
      />
      <GroupChatLargeScreenHeader
        participants={participants}
        group_name={group_name}
        group_profile={group_profile}
      />
    </>
  );
};

export default GroupChatHeader;
