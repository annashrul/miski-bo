import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import NavbarDefault from 'Layouts/NavbarDefault';
import AppHeader from 'Layouts/AppHeader';

const Index: React.FC = () => {
  const onChange = (a, b, c) => {};
  return (
    <body>
      <NavbarDefault />
      <Carousel autoplay={false}>
        <div className="bg-green-500">
          <img
            className="w-screen h-screen"
            src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp"
          />
        </div>
        <div className="bg-green-500">
          <img
            className="w-screen h-screen"
            src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp"
          />
        </div>
      </Carousel>
    </body>
  );
};

export default Index;
