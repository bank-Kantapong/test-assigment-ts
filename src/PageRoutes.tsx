import { Route, Routes } from "react-router-dom";
import FormContent from "./Pages/FormContent";
import NewSale from "./Pages/NewSale";
import Order from "./Pages/Order";
import RefundRequest from "./Pages/OrderRefunds/RefundRequest";
import BasicCampaigns from "./Pages/Campaigns/BasicCampaigns";
import ItemCampaigns from "./Pages/Campaigns/ItemCampaigns";
import Banners from "./Pages/Banners";
import OtherBanners from "./Pages/OtherBanners";
import Counpons from "./Pages/Coupons";
import Cashback from "./Pages/Cashback";
import PushNotification from "./Pages/PushNotification";
import Category from "./Pages/Categories/Category";
import SubCategory from "./Pages/Categories/SubCategory";
import BulkImport from "./Pages/Categories/BulkImport";
import BulkExport from "./Pages/Categories/BulkExport";
import Attributes from "./Pages/Attributes";
import Units from "./Pages/Units";
import CommonConditions from "./Pages/CommonConditions";
import AddNew from "./Pages/ProductSetup/AddNew";
import List from "./Pages/ProductSetup/List";
import ProductGallery from "./Pages/ProductSetup/ProductGallery";
import Review from "./Pages/ProductSetup/Review";
import SetupBulkImport from "./Pages/ProductSetup/SetupBulkImport";
import SetupBulkExport from "./Pages/ProductSetup/SetupBulkExport";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const PageRoutes = () => {
  const routeList: RouteType[] = [
    {
      path: "/",
      element: <FormContent />,
    },
    {
      path: "/new-sale",
      element: <NewSale />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/refund-request",
      element: <RefundRequest />
    },
    {
      path: "/basic-campaigns",
      element: <BasicCampaigns />
    },
    {
      path: "/item-campaigns",
      element: <ItemCampaigns />
    },
    {
      path: "/banners",
      element: <Banners />
    },
    {
      path: "/other-banners",
      element: <OtherBanners />
    },
    {
      path: "/coupons",
      element: <Counpons />
    },
    {
      path: "/cashback",
      element: <Cashback />
    },
    {
      path: "/push-noti",
      element: <PushNotification />
    },
    {
      path: "/category",
      element: <Category />
    },
    {
      path: "/sub-category",
      element: <SubCategory />
    },
    {
      path: "/bulk-import",
      element: <BulkImport />
    },
    {
      path: "/bulk-export",
      element: <BulkExport />
    },
    {
      path: "/attributes",
      element: <Attributes />
    },
    {
      path: "/units",
      element: <Units />
    },
    {
      path: "/common-conditions",
      element: <CommonConditions />
    },
    {
      path: "/add-new",
      element: <AddNew />
    },
    {
      path: "/list",
      element: <List />
    },
    {
      path: "/product-gallery",
      element: <ProductGallery />
    },
    {
      path: "/review",
      element: <Review />
    },
    {
      path: "/setup-bulk-import",
      element: <SetupBulkImport />
    },
    {
      path: "/setup-bulk-export",
      element: <SetupBulkExport />
    }
  ];

  return (
    <Routes>
      {routeList.map((item: RouteType, index: number) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default PageRoutes;
