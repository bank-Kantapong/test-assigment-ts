import { Text } from "./Text";
import { ReactComponent as info } from "../Assets/info.svg";
import IconSvg from "./IconSvg";

type FormLabelType = {
  label: string;
  isRequired?: boolean;
  isShowInfo?: boolean;
  children?: React.ReactNode;
  isShowRatio?: boolean;
};

export const FormLabel = ({
  label,
  isRequired,
  isShowInfo,
  children,
  isShowRatio,
}: FormLabelType) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-2">
        <Text label={`${label}${isRequired ? " *" : ""}`} />
        {isShowRatio && <Text label="(Ratio 1:1)" color="text-red-500" />}
        {isShowInfo && <IconSvg src={info} />}
      </div>
      {children}
    </div>
  );
};
