import { Checkbox, Form, FormProps, Input, Select, Tabs } from "antd";
import { Card } from "../Components/Card";
import { Text, TEXT_TYPE, TEXT_WEIGHT } from "../Components/Text";
import { FormLabel } from "../Components/FormLabel";
import { UploadCard } from "../Components/UploadCard";
import IconSvg from "../Components/IconSvg";
import { ReactComponent as top } from "../Assets/top.svg";
import { useMemo, useRef, useState } from "react";

const { TextArea } = Input;

enum FORM_NAME {
  NAME = "name",
  DESCRIPTION = "description",
  ITEM_IMAGE = "itemImage",
  ITEM_THUMBNAIL = "itemThumbnail",
  STORE = "store",
  CATEGORY = "category",
  SUB_CATEGORY = "subCategory",
  SUITABLE_FOR = "suitableFor",
  UNIT = "unit",
  MAXIMUM_QUANTITY = "maximumQuantity",
  IS_BASIC_MEDICINE = "isBasicMedicine",
  IS_PRESCRIPTION = "isPrescription",
  PRICE = "price",
  TOTAL_STOCK = "totalStock",
  DISCOUNT_TYPE = "discountType",
  DISCOUNT = "discount",
  ATTRIBUTE = "attribute",
  TAGS = "tags",
}

enum TAB_KEY {
  DEFAULT = "default",
  ENGLISH = "en",
  THAI = "th",
}

const FormContent = () => {
  const [activeKey, setActiveKey] = useState(TAB_KEY.DEFAULT);
  const [form] = Form.useForm();
  const buttonRef = useRef(null);

  const onFinish: FormProps<FORM_NAME>["onFinish"] = (values) => {
    console.log("values", values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const scrollToTop = () => {
    const element = document.getElementById("layout-container");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const tabChildren = useMemo(
    () => (
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col h-auto max-w-full">
          <FormLabel
            label={`Name (${
              activeKey === "en"
                ? "Enlish"
                : activeKey === "th"
                ? "Thai-ไทย"
                : "Default"
            })`}
            isRequired
          >
            <Form.Item name={FORM_NAME.NAME}>
              <Input placeholder="New item" />
            </Form.Item>
          </FormLabel>
          <FormLabel
            label={`Short description (${
              activeKey === "en"
                ? "Enlish"
                : activeKey === "th"
                ? "Thai-ไทย"
                : "Default"
            })`}
            isRequired
          >
            <Form.Item name={FORM_NAME.DESCRIPTION}>
              <TextArea
                autoSize={{
                  minRows: 4,
                }}
                rows={4}
              />
            </Form.Item>
          </FormLabel>
        </div>
        <div className="h-auto max-w-full">
          <div className="flex gap-6">
            <FormLabel label="Item Image" isShowRatio isRequired>
              <Form.Item name={FORM_NAME.ITEM_IMAGE}>
                <UploadCard />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Item thumbnail" isShowRatio isRequired>
              <Form.Item name={FORM_NAME.ITEM_THUMBNAIL}>
                <UploadCard />
              </Form.Item>
            </FormLabel>
          </div>
        </div>
      </div>
    ),
    [activeKey]
  );

  const onChange = (key: string) => {
    setActiveKey(key as TAB_KEY);
  };

  const items = [
    {
      key: TAB_KEY.DEFAULT,
      label: "Default",
      children: tabChildren,
    },
    {
      key: TAB_KEY.ENGLISH,
      label: "English (EN)",
      children: tabChildren,
    },
    {
      key: TAB_KEY.THAI,
      label: "Thai-ไทย (TH)",
      children: tabChildren,
    },
  ];

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="flex flex-col gap-6 px-6">
        <Text
          label="Item update"
          type={TEXT_TYPE.HEADER}
          weight={TEXT_WEIGHT.SEMI_BOLD}
        />
        <Card>
          <Tabs activeKey={activeKey} items={items} onChange={onChange} />
        </Card>
        <Card>
          <Text
            label="Item details"
            type={TEXT_TYPE.LARGE}
            weight={TEXT_WEIGHT.BOLD}
          />
          <hr className="h-px mt-4 mb-6 bg-gray-300 border-1" />
          <div className="grid items-center grid-cols-4 gap-4">
            <FormLabel label="Store" isRequired>
              <Form.Item name={FORM_NAME.STORE}>
                <Select
                  placeholder="Select store"
                  options={[
                    { value: "store1", label: <span>Store 1</span> },
                    { value: "store2", label: <span>Store 2</span> },
                  ]}
                />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Category" isRequired>
              <Form.Item name={FORM_NAME.CATEGORY}>
                <Select
                  placeholder="Select Category"
                  options={[
                    { value: "category1", label: <span>Category 1</span> },
                    { value: "category2", label: <span>Category 2</span> },
                  ]}
                />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Sub category" isShowInfo>
              <Form.Item name={FORM_NAME.SUB_CATEGORY}>
                <Select
                  placeholder="Select Sub Category"
                  options={[
                    {
                      value: "subCategory1",
                      label: <span>Sub Category 1</span>,
                    },
                    {
                      value: "subCategory2",
                      label: <span>Sub Category 2</span>,
                    },
                  ]}
                />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Suitable For">
              <Form.Item name={FORM_NAME.SUITABLE_FOR}>
                <Select
                  placeholder="Select Condition"
                  options={[
                    { value: "condition1", label: <span>Condition 1</span> },
                    { value: "condition2", label: <span>Condition 2</span> },
                  ]}
                />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Unit">
              <Form.Item name={FORM_NAME.UNIT}>
                <Select
                  placeholder="แผง"
                  options={[
                    { value: "unit1", label: <span>Unit 1</span> },
                    { value: "unit2", label: <span>Unit 2</span> },
                  ]}
                />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Maximum Purchase Quantity Limit" isShowInfo>
              <Form.Item name={FORM_NAME.MAXIMUM_QUANTITY}>
                <Input placeholder="Ex: 0" type="number" />
              </Form.Item>
            </FormLabel>
            <Form.Item
              name={FORM_NAME.IS_BASIC_MEDICINE}
              className="mt-6"
              valuePropName="checked"
            >
              <Checkbox>Is Basic Medicine</Checkbox>
            </Form.Item>
            <Form.Item
              name={FORM_NAME.IS_PRESCRIPTION}
              className="mt-6"
              valuePropName="checked"
            >
              <Checkbox>Is prescription required</Checkbox>
            </Form.Item>
          </div>
        </Card>
        <Card>
          <Text
            label="Price Information"
            type={TEXT_TYPE.LARGE}
            weight={TEXT_WEIGHT.BOLD}
          />
          <hr className="h-px mt-4 mb-6 bg-gray-300 border-1" />
          <div className="grid items-center grid-cols-4 gap-4">
            <FormLabel label="Price" isRequired>
              <Form.Item name={FORM_NAME.PRICE}>
                <Input placeholder="1" type="number" />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Total stock">
              <Form.Item name={FORM_NAME.TOTAL_STOCK}>
                <Input placeholder="Ex: 10" type="number" />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Discount type" isRequired isShowInfo>
              <Form.Item name={FORM_NAME.DISCOUNT_TYPE}>
                <Select
                  placeholder="Percent (%)"
                  options={[
                    { value: "type1", label: <span>Type 1</span> },
                    { value: "type2", label: <span>Type 2</span> },
                  ]}
                />
              </Form.Item>
            </FormLabel>
            <FormLabel label="Discount (%)" isRequired>
              <Form.Item name={FORM_NAME.DISCOUNT}>
                <Input placeholder="0" type="number" />
              </Form.Item>
            </FormLabel>
          </div>
        </Card>
        <Card>
          <Text
            label="Attribute"
            type={TEXT_TYPE.LARGE}
            weight={TEXT_WEIGHT.BOLD}
          />
          <hr className="h-px mt-4 mb-6 bg-gray-300 border-1" />
          <FormLabel label="Attribute">
            <Form.Item name={FORM_NAME.ATTRIBUTE}>
              <Select
                options={[
                  { value: "attribute1", label: <span>Attribute 1</span> },
                  { value: "attribute2", label: <span>Attribute 2</span> },
                ]}
              />
            </Form.Item>
          </FormLabel>
        </Card>
        <Card>
          <Text label="Tags" type={TEXT_TYPE.LARGE} weight={TEXT_WEIGHT.BOLD} />
          <hr className="h-px mt-4 mb-6 bg-gray-300 border-1" />
          <FormLabel label="Tags">
            <Form.Item name={FORM_NAME.TAGS}>
              <Select
                mode="multiple"
                placeholder="Search tags"
                options={[
                  { label: "Tag 1", value: "tag1" },
                  { label: "Tag 2", value: "tag2" },
                ]}
                suffixIcon={null}
              />
            </Form.Item>
          </FormLabel>
        </Card>
        <div className="flex justify-end gap-4">
          <button
            onClick={onReset}
            type="button"
            className="w-32 h-10 py-2.5 px-5 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-300 dark:text-black dark:border-gray-300 hover:border-gray-300 dark:hover:text-black dark:hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            onClick={() => form.submit()}
            type="button"
            className="w-32 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
        <div className="relative flex items-center justify-center my-14">
          <Text label="© 2024. Telehealth thailand All rights reserved." />
          <div
            className="absolute right-0 cursor-pointer"
            onClick={scrollToTop}
            ref={buttonRef}
          >
            <IconSvg src={top} fontSize={35} />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FormContent;
