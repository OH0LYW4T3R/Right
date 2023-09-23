import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import axios from 'axios';
import Footer from '../layout/footer/footer';
import Header from '../layout/header/header';
import './patent.css';
import background from "./backgroundimg.jpg";

const Patent = () => {
  const [attorneys, setAttorneys] = useState([]);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenClick = () => {
    setOpen(true);
  };

  const onCloseClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchAttorneys = async () => {
      try {
        const response = await axios.get('http://34.64.173.209:8000/patentAttorneys/');
        setAttorneys(response.data);
      } catch (error) {
        console.error('Error fetching attorneys:', error);
      }
    };

    fetchAttorneys();
  }, []);

  const handleAttorneyClick = async (attorneyId) => {
    try {
      const response = await axios.get(`http://34.64.173.209:8000/patentAttorneys/${attorneyId}`);
      setSelectedAttorney(response.data);
    } catch (error) {
      console.error('Error fetching attorney details:', error);
      return;
    }

    onOpenClick();
  };

  return (
    <div className='background' style={{backgroundImage: `url(${background})`}}>
      <Header />
      <h1 className='patent_name'>변리사 정보</h1>
      <div className='patent_container'>
        <div className='grid'>
          {attorneys.map((attorney, index) => (
            <div
              key={attorney.id}
              className={`item ${index % 5 === 4 ? 'break' : ''}`}
              title={`
                이름: ${attorney.name}
                경력사항: ${attorney.license_acquisition_type}
                활동지역: ${selectedAttorney?.local || 'N/A'}
                개업여부: ${selectedAttorney?.is_opened || 'N/A'}
                전문분야: ${selectedAttorney?.field || 'N/A'}
              `}
            >
            <div className='default_patent'>
            <img
                src={attorney.image}
                className='man_img'
                alt="변리사 이미지"
                onClick={() => handleAttorneyClick(attorney.id)}
              />
              <br />
              <div className='attorney_name'>{attorney.name}</div>
            </div>
             
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={onCloseClick}
        aria-labelledby='patent-attorney-dialog-title'
        aria-describedby='patent-attorney-dialog-description'
      >
        <DialogTitle id='patent-attorney-dialog-title'>
          {selectedAttorney?.name}
        </DialogTitle>
        <DialogContent>
          <br/>
          <img src={selectedAttorney?.image} alt={selectedAttorney?.name} />
          <br/>
          활동지역: {selectedAttorney?.local || 'N/A'}
          <br/>
          개업여부: {selectedAttorney?.is_opened || 'N/A'}
          <br/>
          전화번호: {selectedAttorney?.phone_number || 'N/A'}
          <br/>
          전문분야: {selectedAttorney?.field || 'N/A'}
          <br/>
          주소: {selectedAttorney?.office_address || 'N/A'}
          <br/>
          전화번호: {selectedAttorney?.phone_number || 'N/A'}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseClick}>닫기</Button>  
        </DialogActions>
      </Dialog>
      {selectedAttorney && (
        <div className='select_info'>
          <div>ID: {selectedAttorney.id}</div>
          <div>License Acquisition Type: {selectedAttorney.license_acquisition_type}</div>
          <div>Is Opened: {selectedAttorney.is_opened}</div>
          <div>Office Name: {selectedAttorney.office_name}</div>
          <div>Office Address: {selectedAttorney.office_address}</div>
          <div>Phone Number: {selectedAttorney.phone_number}</div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Patent;
