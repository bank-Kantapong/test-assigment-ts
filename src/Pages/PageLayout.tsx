import { Layout } from "antd";
import { useState } from "react";
import SiderMenu from "../Components/SiderMenu";
import HeaderMenu from "../Components/HeaderMenu";
import PageRoutes from "../PageRoutes";

const { Header, Sider, Content } = Layout;

const PageLayout = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const onChangeCollapse = () => {
    setIsCollapse((prev) => !prev);
  };

  return (
    <Layout className="w-screen h-screen">
      <Sider
        width={240}
        theme="light"
        collapsedWidth="60px"
        collapsible
        collapsed={isCollapse}
        trigger={null}
        style={{
          boxShadow: isCollapse ? "0px 1px 2px 0px rgba(0, 0, 0, 0.1)" : "",
        }}
      >
        <SiderMenu
          isCollapse={isCollapse}
          onChangeCollapse={onChangeCollapse}
        />
      </Sider>
      <Layout className="h-full overflow-auto bg-white">
        <Header className="p-6 pb-4 bg-white h-max" id="layout-container">
          <HeaderMenu />
        </Header>
        <Content>
          <PageRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
