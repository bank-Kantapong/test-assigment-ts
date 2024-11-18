import IconSvg from "./IconSvg";
import { ReactComponent as edit } from "../Assets/edit.svg";
import { ReactComponent as upload_cloud } from "../Assets/upload_cloud.svg";

export const UploadCard = () => {
  return (
    <div className="flex relative flex-col items-center justify-center w-full px-4 py-6 border-2 border-gray-200 border-dashed h-[208px] das rounded-2xl">
      <div className="cursor-pointer flex absolute top-4 right-4 items-center justify-center bg-blue-100 w-6 h-6 rounded-[4px] border border-blue-600 p-1">
        <IconSvg src={edit} fontSize={16} />
      </div>
      <IconSvg src={upload_cloud} fontSize={56} />
    </div>
  );
};
