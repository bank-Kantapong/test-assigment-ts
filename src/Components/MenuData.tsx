import IconSvg from "./IconSvg";
import { ReactComponent as home } from "../Assets/home.svg";
import { ReactComponent as basket } from "../Assets/basket.svg";
import { ReactComponent as cart } from "../Assets/cart.svg";
import { ReactComponent as receipt } from "../Assets/receipt.svg";
import { ReactComponent as layers } from "../Assets/layers.svg";
import { ReactComponent as photo } from "../Assets/photo.svg";
import { ReactComponent as gallery } from "../Assets/gallery.svg";
import { ReactComponent as coupon } from "../Assets/coupon.svg";
import { ReactComponent as refresh } from "../Assets/refresh.svg";
import { ReactComponent as bell } from "../Assets/bell.svg";
import { ReactComponent as carbon_category } from "../Assets/carbon_category.svg";
import { ReactComponent as grid } from "../Assets/grid.svg";
import { Text, TEXT_TYPE, TEXT_WEIGHT } from "./Text";
import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export enum MENU_KEY {
  DASHBOARD = "dashboard",
  POS_SECTION = "pos-section",
  NEW_SALE = "new-sale",
  ORDER_MANAGEMENT = "order-management",
  ORDER = "order",
  ORDER_ALL = "order-all",
  ORDER_SCHEDULED = "order-scheduled",
  ORDER_PENDING = "order-pending",
  ORDER_ACCEPTED = "order-accepted",
  ORDER_PROCESSING = "order-processing",
  ORDER_ON_THE_WAY = "order-on-the-way",
  ORDER_DELIVERED = "order-delivered",
  ORDER_CANCELED = "order-canceled",
  ORDER_PAYMENT_FAILED = "order-payment-failed",
  ORDER_REFUNDED = "order-refunded",
  ORDER_OFFLINE_PAYMENT = "order-offline-payment",
  ORDER_REFUNDS = "order-refunds",
  REFUND_REQUEST = "refund-request",
  PROMOTION_MANAGEMENT = "promotion-management",
  CAMPAIGN = "campaigns",
  BASIC_CAMPAIGN = "basic-campaigns",
  ITEM_CAMPAIGN = "item-campaigns",
  BANNERS = "banners",
  OTHER_BANNERS = "other-banners",
  COUPONS = "coupons",
  CASHBACK = "cashback",
  PUSH_NOTI = "push-noti",
  PRODUCT_MANAGEMENT = "product-management",
  CATEGORIES = "categories",
  CATEGORY = "category",
  SUB_CATEGORY = "sub-category",
  BULK_IMPORT = "bulk-import",
  BULK_EXPORT = "bulk-export",
  ATTRIBUTES = "attributes",
  UNITS = "units",
  COMMON_CONDITIONS = "common-conditions",
  PRODUCT_SETUP = "product-setup",
  ADD_NEW = "add-new",
  LIST = "list",
  PRODUCT_GALLERY = "product-gallery",
  REVIEW = "review",
  SETUP_BULK_IMPORT = "setup-bulk-import",
  SETUP_BULK_EXPORT = "setup-bulk-export",
}

export const menuItems: MenuItem[] = [
  {
    key: MENU_KEY.DASHBOARD,
    icon: <IconSvg src={home} />,
    label: "Dashboard",
  },
  {
    key: MENU_KEY.POS_SECTION,
    label: (
      <Text
        label="POS SECTION"
        type={TEXT_TYPE.MINI}
        weight={TEXT_WEIGHT.SEMI_BOLD}
        color="text-gray-400"
      />
    ),
    type: "group",
    children: [
      {
        key: MENU_KEY.NEW_SALE,
        icon: <IconSvg src={basket} fill="white" />,
        label: "New Sale",
      },
    ],
  },
  {
    key: MENU_KEY.ORDER_MANAGEMENT,
    label: (
      <Text
        label="ORDER MANAGEMENT"
        type={TEXT_TYPE.MINI}
        weight={TEXT_WEIGHT.SEMI_BOLD}
        color="text-gray-400"
      />
    ),
    type: "group",
    children: [
      {
        key: MENU_KEY.ORDER,
        label: "Orders",
        icon: <IconSvg src={cart} />,
        children: [
          {
            key: MENU_KEY.ORDER_ALL,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="All" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_SCHEDULED,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Scheduled" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_PENDING,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Pending" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_ACCEPTED,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Accepted" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_PROCESSING,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Processing" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_ON_THE_WAY,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Order On The Way" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_DELIVERED,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Delivered" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_CANCELED,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Canceled" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_PAYMENT_FAILED,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Payment Failed" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_REFUNDED,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Refunded" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ORDER_OFFLINE_PAYMENT,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Offline Payment" />
              </div>
            ),
          },
        ],
      },
      {
        key: MENU_KEY.ORDER_REFUNDS,
        label: "Orders Refunds",
        icon: <IconSvg src={receipt} />,
        children: [
          {
            key: MENU_KEY.REFUND_REQUEST,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Refund Request" />
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    key: MENU_KEY.PROMOTION_MANAGEMENT,
    label: (
      <Text
        label="PROMOTION MANAGEMENT"
        type={TEXT_TYPE.MINI}
        weight={TEXT_WEIGHT.SEMI_BOLD}
        color="text-gray-400"
      />
    ),
    type: "group",
    children: [
      {
        key: MENU_KEY.CAMPAIGN,
        icon: <IconSvg src={layers} />,
        label: "Campaigns",
        children: [
          {
            key: MENU_KEY.BASIC_CAMPAIGN,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Basic Campaigns" />
              </div>
            ),
          },
          {
            key: MENU_KEY.ITEM_CAMPAIGN,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Item Campaigns" />
              </div>
            ),
          },
        ],
      },
      {
        key: MENU_KEY.BANNERS,
        icon: <IconSvg src={photo} fill="white" />,
        label: "Banners",
      },
      {
        key: MENU_KEY.OTHER_BANNERS,
        icon: <IconSvg src={gallery} fill="white" />,
        label: "Other Banners",
      },
      {
        key: MENU_KEY.COUPONS,
        icon: <IconSvg src={coupon} fill="white" />,
        label: "Coupons",
      },
      {
        key: MENU_KEY.CASHBACK,
        icon: <IconSvg src={refresh} fill="white" />,
        label: "Cashback",
      },
      {
        key: MENU_KEY.PUSH_NOTI,
        icon: <IconSvg src={bell} fill="white" />,
        label: "Push Notification",
      },
    ],
  },
  {
    key: MENU_KEY.PRODUCT_MANAGEMENT,
    label: (
      <Text
        label="PRODUCT MANAGEMENT"
        type={TEXT_TYPE.MINI}
        weight={TEXT_WEIGHT.SEMI_BOLD}
        color="text-gray-400"
      />
    ),
    type: "group",
    children: [
      {
        key: MENU_KEY.CATEGORIES,
        icon: <IconSvg src={carbon_category} />,
        label: "Categories",
        children: [
          {
            key: MENU_KEY.CATEGORY,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Category" />
              </div>
            ),
          },
          {
            key: MENU_KEY.SUB_CATEGORY,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Sub Category" />
              </div>
            ),
          },
          {
            key: MENU_KEY.BULK_IMPORT,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Bulk Import" />
              </div>
            ),
          },
          {
            key: MENU_KEY.BULK_EXPORT,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Bulk Export" />
              </div>
            ),
          },
        ],
      },
      {
        key: MENU_KEY.ATTRIBUTES,
        icon: <IconSvg src={grid} />,
        label: "Attributes",
      },
      {
        key: MENU_KEY.UNITS,
        icon: <IconSvg src={receipt} />,
        label: "Units",
      },
      {
        key: MENU_KEY.COMMON_CONDITIONS,
        icon: <IconSvg src={receipt} />,
        label: "Common Conditions",
      },
      {
        key: MENU_KEY.PRODUCT_SETUP,
        icon: <IconSvg src={receipt} />,
        label: "Product Setup",
        children: [
          {
            key: MENU_KEY.ADD_NEW,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Add New" />
              </div>
            ),
          },
          {
            key: MENU_KEY.LIST,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="List" />
              </div>
            ),
          },
          {
            key: MENU_KEY.PRODUCT_GALLERY,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Product Gallery" />
              </div>
            ),
          },
          {
            key: MENU_KEY.REVIEW,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Review" />
              </div>
            ),
          },
          {
            key: MENU_KEY.SETUP_BULK_IMPORT,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Bulk Import" />
              </div>
            ),
          },
          {
            key: MENU_KEY.SETUP_BULK_EXPORT,
            label: (
              <div className="flex gap-2">
                <Text
                  label="-"
                  color="text-gray-300"
                  weight={TEXT_WEIGHT.SEMI_BOLD}
                />
                <Text label="Bulk Export" />
              </div>
            ),
          },
        ],
      },
    ],
  },
];
