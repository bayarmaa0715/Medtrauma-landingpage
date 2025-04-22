"use client";
import React from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
} from "antd";

const Booking = () => {
  return (
    <div className="container flex justify-center flex-1 p-5 mx-auto">
      <div className="w-full md:w-xl ">
        <h1 className="mb-6 text-2xl font-bold text-center uppercase">
          Цаг захиалах{" "}
        </h1>
        <div className="">
          <Form
            layout="vertical"
            className="w-full"
            onFinish={(values) => {
              console.log("📩 Submitted values:", values);
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
              rules={[
                { required: true, message: "Утасны дугаараа оруулна уу" },
              ]}
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
                  // onClick={handleCancel}
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
        </div>
      </div>
    </div>
  );
};

export default Booking;
