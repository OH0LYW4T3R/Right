import React, { useState, useCallback, useEffect, useRef } from "react";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

import "./right.css";

import img_1 from "./KIPRIS/KIPRIS_1.png";
import img_2 from "./KIPRIS/KIPRIS_2.png";
import img_3 from "./KIPRIS/KIPRIS_3.png";
import img_4 from "./KIPRIS/KIPRIS_4.png";
import img_5 from "./KIPRIS/KIPRIS_5.png";
import img_6 from "./KIPRIS/KIPRIS_6.png";
import img_7 from "./KIPRIS/KIPRIS_7.png";
import img_8 from "./KIPRIS/KIPRIS_8.png";
import background from "./backgroundimg.jpg";

const Right = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header/>
      <div className="content">
        <a 
            href="http://dtox.patent.go.kr/xmlconverter/sample/release/01_patent_ko.docx"
            className="download"
        >
            FILE : DOWNLOAD
        </a>
        <br />
        <a
            href="http://kportal.kipris.or.kr/kportal/search/search_frn_pct.do"
            className="kipris"
        >
            LINK : KIPRIS (한국특허 정보원)
        </a>
        <br />
      </div>
      
      <div className="search_img">
        <div className="line_1">
          <img className="img_1" src={img_1}></img>
          <span className="right_row">&#10140;</span>
          <img className="img_2" src={img_2}></img>
        </div>
        <br />
        <br />
        <div className="line_2">
          <img className="img_3" src={img_3}></img>
          <span className="right_row">&#10140;</span>
          <img className="img_4" src={img_4}></img>
        </div>
        <br />
        <br />
        <div className="line_3">
          <img className="img_5" src={img_5}></img>
          <span className="right_row">&#10140;</span>
          <img className="img_6" src={img_6}></img>
        </div>
        <br />
        <br />
        <div className="line_4">
          <img className="img_7" src={img_7}></img>
          <span className="right_row">&#10140;</span>
          <img className="img_8" src={img_8}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Right;

// http://dtox.patent.go.kr/xmlconverter/sample/release/01_patent_ko.docx
// 다운로드할 수 있는 링크
// http://kportal.kipris.or.kr/kportal/search/search_frn_pct.do
// 키프리스 무료 특허 정보사이트 링크
