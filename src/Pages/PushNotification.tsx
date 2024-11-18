import { Text, TEXT_TYPE, TEXT_WEIGHT } from "../Components/Text";

const PushNotification = () => {
  return (
    <div className="flex flex-col gap-6 px-6">
      <Text
        label="Push Notification"
        type={TEXT_TYPE.HEADER}
        weight={TEXT_WEIGHT.SEMI_BOLD}
      />
    </div>
  );
};

export default PushNotification;
