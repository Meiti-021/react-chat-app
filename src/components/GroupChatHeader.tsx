import { UserType } from "../utils/users";
import GroupChatLargeScreenHeader from "./GroupChatLargeScreenHeader";
import GroupChatMobileHeader from "./GroupChatMobileHeader";

const GroupChatHeader = ({
  participants,
  group_name,
  group_profile,
  description,
}: {
  participants: UserType[];
  group_name: string | null;
  group_profile: string | null;
  description: string | null;
}) => {
  return (
    <>
      <GroupChatMobileHeader
        participants={participants}
        group_name={group_name}
        group_profile={group_profile}
        description={description}
      />
      <GroupChatLargeScreenHeader
        participants={participants}
        group_name={group_name}
        group_profile={group_profile}
        description={description}
      />
    </>
  );
};

export default GroupChatHeader;
