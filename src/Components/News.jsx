import React from "react";
import { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
const { Text, Title } = Typography;
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = ({ simplify }) => {
  const count = simplify ? 6 : 18;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count });
  const { data } = useGetCryptosQuery(100);
  if (!cryptoNews?.value) return "please wait...Loading";
  return (
    <>
      <Row gutter={[25, 25]}>
        {!simplify && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="enter your crypto"
              optionFilterProp="children"
              onChange={(input) => setNewsCategory(input)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option>cryptocurrency</Option>
              {data?.data?.coins?.map((coin) => (
                <option value={coin.name}>{coin.name}</option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card className="news-card" hoverable>
              <a href={news.url} target="_blank" rel="norefference">
                <div className="news-image-container">
                  <Title level={4} className="news-title">
                    {news.name}
                  </Title>
                  <img
                    style={{ maxHeight: "100px", maxWidth: "200px" }}
                    src={news?.image?.thumbnail?.contentUrl}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description < 150
                    ? news.description
                    : `${news.description.substring(0, 300)}...`}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                      alt="sec"
                    />
                    <Text className="provider-name">
                      {news.provider[0].name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default News;
