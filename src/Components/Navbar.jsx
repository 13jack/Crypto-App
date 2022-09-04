import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/cryptocurrency.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} />
        {/* <Typography.Title level={2} className="logo"></Typography.Title> */}
        <Typography level={2}>
          <Link to="/"> sdlfknls</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Navbar;
