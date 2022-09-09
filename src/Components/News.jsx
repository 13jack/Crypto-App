import { Card, Col, Row } from "antd";
import React from "react";
import { useState } from "react";
// import { Select, Typography, Row, Col, Avatar, Card } from "antd";
// import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

// import {Text, Title} from Typography;

const News = ({ simplify }) => {
  const count = simplify ? 10 : 15;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count });

  return (
    <>
      <div>
        <h3>News !</h3>
      </div>
    </>
  );
};
export default News;
