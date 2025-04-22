import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
} from "antd";

const BookingButton = ({ btnClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // form.fieal reset
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
          <div className="justify-between gap-2 md:flex ">
            <Form.Item
              label="Өдөр"
              name="date"
              className="w-full"
              rules={[{ required: true, message: "Өдөрөө сонгоно уу" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Цаг"
              name="time"
              className="w-full"
              rules={[{ required: true, message: "Цагаа сонгоно уу" }]}
            >
              <TimePicker
                style={{ width: "100%" }}
                format="HH:mm"
                minuteStep={10}
                use12Hours={false}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Үйлчилгээ"
            name="service"
            rules={[{ required: true, message: "Үйлчилгээ сонгоно уу" }]}
          >
            <Select placeholder="Сонгох">
              <Select.Option value={1}>
                Соронзон үелзүүрт аппарат MRI
              </Select.Option>
              <Select.Option value={2}>Компьютер томографи CT </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Зовиур" name="reason">
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
