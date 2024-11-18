import IconSvg from "./IconSvg";
import { ReactComponent as home_blue } from "../Assets/home_blue.svg";
import { ReactComponent as user } from "../Assets/user.svg";
import { ReactComponent as file } from "../Assets/file.svg";
import { ReactComponent as settings } from "../Assets/settings.svg";
import { ReactComponent as dispatch } from "../Assets/dispatch.svg";
import { ReactComponent as dark_mode } from "../Assets/dark_mode.svg";
import { ReactComponent as en } from "../Assets/en.svg";
import { ReactComponent as mail } from "../Assets/mail.svg";
import { ReactComponent as notification } from "../Assets/notification.svg";
import { ReactComponent as down } from "../Assets/down.svg";
import user_profile from "../Assets/user-profile.png";
import { Text } from "./Text";
import { Avatar, Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: "Option 1",
  },
  {
    key: "2",
    label: "Option 2",
  },
];

const headerMenu = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: home_blue,
  },
  {
    key: "users",
    label: "Users",
    icon: user,
  },
  {
    key: "transaction",
    label: "Transactions & Reports",
    icon: file,
  },
  {
    key: "settings",
    label: (
      <Dropdown
        menu={{
          items,
        }}
      >
        <a
          className="flex items-center gap-4 font-normal text-[#000000e0]"
          onClick={(e) => e.preventDefault()}
        >
          <Text label="Settings" />
          <IconSvg src={down} />
        </a>
      </Dropdown>
    ),
    icon: settings,
  },
  {
    key: "dispatchManagement",
    label: "Dispatch Management",
    icon: dispatch,
  },
];

const HeaderMenu = () => {
  return (
    <div className="flex gap-4 h-[60px] justify-between w-full items-center px-4 py-2 bg-white rounded-[6px] shadow-header-shadow">
      <div className="flex items-center gap-6">
        {headerMenu.map((item) => (
          <div key={item.key} className="flex gap-4 cursor-pointer">
            <IconSvg src={item.icon} />
            {typeof item.label === "string" ? (
              <Text label={item.label} />
            ) : (
              item.label
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="flex p-2 bg-gray-100 rounded-full cursor-pointer w-9 h-9">
          <IconSvg
            src={dark_mode}
            fill="rgb(243 244 246 / var(--tw-bg-opacity, 1))"
          />
        </div>
        <div className="flex p-2 bg-gray-100 rounded-full cursor-pointer w-9 h-9">
          <IconSvg src={en} />
        </div>
        <div className="flex p-2 bg-gray-100 rounded-full cursor-pointer w-9 h-9">
          <IconSvg
            src={mail}
            fill="rgb(243 244 246 / var(--tw-bg-opacity, 1))"
          />
        </div>
        <div className="relative flex p-2 bg-gray-100 rounded-full cursor-pointer w-9 h-9">
          <IconSvg
            src={notification}
            fill="rgb(243 244 246 / var(--tw-bg-opacity, 1))"
          />
          <div className="flex items-center justify-center absolute top-[-2px] right-[-2px] w-[14px] h-[14px] rounded-full bg-green-200">
            <div className="w-[6px] h-[6px] rounded-full bg-green-500" />
          </div>
        </div>
        <Avatar src={user_profile} size={36} shape="circle" />
      </div>
    </div>
  );
};

export default HeaderMenu;
