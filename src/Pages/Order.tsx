import { Text, TEXT_TYPE, TEXT_WEIGHT } from "../Components/Text";
import { useQuery } from "../Utils/useQuery";

const Order = () => {
  const orderStatus = useQuery("status");

  return (
    <div className="flex flex-col gap-6 px-6">
      <Text
        label={`Order (${orderStatus})`}
        type={TEXT_TYPE.HEADER}
        weight={TEXT_WEIGHT.SEMI_BOLD}
      />
    </div>
  );
};

export default Order;
