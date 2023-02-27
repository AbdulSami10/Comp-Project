import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const DoctorCard = ({ title, description, imgSrc, alt, className }) => {
  return (
    <>
      <Card
        hoverable
        cover={<img alt={alt} src={imgSrc} className={className} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </>
  );
};

export default DoctorCard;
