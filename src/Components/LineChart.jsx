import React from "react";
import { Row, Col, Typography } from "antd";
import { Line } from "react-chartjs-2";

const { Title } = Typography;
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  return (
    <>
      <Row className="chart-header">
        <Title level={3} className="chart-title">
          Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} price {currentPrice}
          </Title>
        </Col>
        {/* <Col>
          {coinName} {currentPrice  }
        </Col> */}
      </Row>
    </>
  );
};
export default LineChart;
