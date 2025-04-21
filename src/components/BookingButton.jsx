import React, { useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";

const BookingButton = ({ btnClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {" "}
      <button onClick={showModal} className={btnClass}>
        Цаг авах
      </button>
      <Modal
        title="Цаг авах"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log("📩 Submitted values:", values);
            setIsModalOpen(false);
          }}
        >
          <Form.Item
            label="Нэр"
            name="name"
            rules={[{ required: true, message: "Нэрээ оруулна уу" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Утасны дугаар"
            name="phone"
            rules={[{ required: true, message: "Утасны дугаараа оруулна уу" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Үйлчилгээ"
            name="service"
            rules={[{ required: true, message: "Үйлчилгээ сонгоно уу" }]}
          >
            <Select placeholder="Сонгох">
              <Select.Option value="рентген">Нуруу</Select.Option>
              <Select.Option value="томограф">Тархи </Select.Option>
              <Select.Option value="мри">Цөс нойр булчирхай</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Зовиур"
            name="reason"
            rules={[{ required: true, message: "Шалтгаанаа бичнэ үү" }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-3">
              <Button
                style={{ backgroundColor: "#0da99e", color: "white" }}
                onClick={handleCancel}
              >
                Буцах
              </Button>
              <Button
                style={{ backgroundColor: "#0da99e", color: "white" }}
                htmlType="submit"
              >
                Илгээх
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BookingButton;
