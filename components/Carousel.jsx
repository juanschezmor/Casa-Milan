"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import patio1 from "../public/patio1.jpg";
import patio2 from "../public/patio2.jpg";
import salon from "../public/salon.jpg";
import comedor from "../public/comedor.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image
    className="w-auto h-auto mx-auto"
    key="patio1"
    src={patio1}
    onDragStart={handleDragStart}
    alt="presentation"
  />,
  <Image
    className="w-auto h-auto mx-auto "
    key="patio2"
    src={patio2}
    onDragStart={handleDragStart}
    alt="presentation"
  />,
  <Image
    className="w-auto h-auto mx-auto"
    key="salon"
    src={salon}
    onDragStart={handleDragStart}
    alt="presentation"
  />,
  <Image
    className="w-auto h-auto mx-auto"
    key="comedor"
    src={comedor}
    onDragStart={handleDragStart}
    alt="presentation"
  />,
];

const Carousel = () => {
  return <AliceCarousel mouseTracking items={items} />;
};
export default Carousel;
