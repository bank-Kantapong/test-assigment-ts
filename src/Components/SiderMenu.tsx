import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Image, Menu } from "antd";
import Logo from "../Assets/Logo.svg";
import { ReactComponent as search } from "../Assets/search.svg";
import IconSvg from "./IconSvg";
import { Text } from "./Text";
import { MENU_KEY, menuItems } from "./MenuData";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

type SiderMenuType = {
  isCollapse: boolean;
  onChangeCollapse: () => void;
};

const SiderMenu = ({ isCollapse, onChangeCollapse }: SiderMenuType) => {
  const navigate = useNavigate();

  const goToSideMenu: MenuProps["onClick"] = (menu) => {
    const groupKey = menu?.keyPath?.[1];
    const menuKey = menu.key;

    switch (groupKey) {
      case MENU_KEY.ORDER:
        navigate({
          pathname: `/${groupKey}`,
          search: `?status=${menuKey}`,
        });
        break;

      default:
        navigate({
          pathname: `/${menuKey === MENU_KEY.DASHBOARD ? "" : menuKey}`,
        });
        break;
    }
  };

  return (
    <div className="flex flex-col h-full gap-4 px-4 py-6 overflow-auto pe-0">
      <div className="flex flex-col gap-4 pe-4">
        <div
          onClick={onChangeCollapse}
          className="flex justify-between cursor-pointer"
        >
          <Image src={Logo} width={100} height={32} preview={false} />
          {isCollapse ? (
            <DoubleRightOutlined className="p-1 text-lg text-black" />
          ) : (
            <DoubleLeftOutlined className="p-1 text-lg text-black" />
          )}
        </div>
        {!isCollapse && (
          <div className="flex items-center w-full gap-2 px-4 py-3 border border-gray-300 border-solid rounded">
            <IconSvg src={search} fontSize={16} />
            <Text label="Search Menu..." color="text-gray-400" />
          </div>
        )}
      </div>
      {!isCollapse && (
        <Menu
          defaultSelectedKeys={[MENU_KEY.DASHBOARD]}
          mode="inline"
          items={menuItems}
          style={{ borderRight: "none" }}
          onClick={goToSideMenu}
        />
      )}
    </div>
  );
};

export default SiderMenu;
