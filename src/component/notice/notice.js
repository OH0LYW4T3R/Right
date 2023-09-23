import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../layout/footer/footer';
import Header from '../layout/header/header';
import background from "./backgroundimg.jpg";
import './notice.css';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://34.64.173.209:8000/patentNotices/');
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const handleNoticeClick = async (noticeId) => {
    try {
      const response = await axios.get(`http://34.64.173.209:8000/patentNotices/${noticeId}`);
      setSelectedNotice(response.data);
    } catch (error) {
      console.error('Error fetching notice details:', error);
    }
  };

  return (
    <div className='background' style={{backgroundImage: `url(${background})`}}>
      <Header />
      <div>
        <h1 className='notice'>공지사항 페이지</h1>
        <br/>
        <ul>
          {notices.map((notice) => (
            <li key={notice.id} onClick={() => handleNoticeClick(notice.id)}>
                {notice.title}
            </li>
          ))}
        </ul>
        {selectedNotice && (
          <div className='details'>
            <h2 className='detail'>선택한 공지사항 세부사항</h2>
            <a href={selectedNotice[0].image_url}><img src={selectedNotice[0].image}></img></a>
            <a href={selectedNotice[1].image_url}><img src={selectedNotice[1].image}></img></a>
            <a href={selectedNotice[2].image_url}><img src={selectedNotice[2].image}></img></a>
            <a href={selectedNotice[3].image_url}><img src={selectedNotice[3].image}></img></a>
            <a href={selectedNotice[4].image_url}><img src={selectedNotice[4].image}></img></a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
