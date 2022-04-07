import React from "react";
import { Upload, message, Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Request = () => {
  const { TextArea } = Input;
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div position="relative" >
      Your Request: 
      <TextArea rows={4} placeholder="" maxLength={100} />
      <Upload {...props}>
        Add Document:
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button type="primary">Submit</Button>
    </div>
  );
};
export default Request;
