import { Text, TEXT_TYPE, TEXT_WEIGHT } from "../Components/Text";

const Attributes = () => {
  return (
    <div className="flex flex-col gap-6 px-6">
      <Text
        label="Attributes"
        type={TEXT_TYPE.HEADER}
        weight={TEXT_WEIGHT.SEMI_BOLD}
      />
    </div>
  );
};

export default Attributes;