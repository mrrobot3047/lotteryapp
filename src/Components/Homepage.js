import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styles } from './styles';
import Congratulation from '../images/Group 1503.png';
import light from '../images/no1 1.png';
import flashlight from '../images/Group 1526.png';
import base from '../images/base.png';
import button from '../images/btn-1.png';

const Homepage = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const handleSpinClick = () => {
    setIsSpinning(true);
  };

  useEffect(() => {
    if (isSpinning) {
      const randomNumber = Math.floor(Math.random() * numbers.length);
      const shuffledNumbers = numbers.map((number, index) => {
        if (index === 0 ) return numbers[randomNumber];
        if(index === randomNumber) return numbers[0];
        return number;
      });

      setNumbers(shuffledNumbers);

      setTimeout(() => {
        setIsSpinning(false);
      }, 3000);
    }
  }, [isSpinning]);

  useEffect(() => {
    if (numbers[0] === 3 || numbers[4]===3) {
      setIsRed(true);
      setTimeout(() => {
        setIsRed(false);
        setNumbers([1, 2, 3, 4, 5, 6]);
      }, 3000);
    }
  }, [numbers]);

  const bounceInAnimation = `
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: translateY(-100px) scale(0.3);
      }
      50% {
        opacity: 1;
        transform: translateY(0) scale(1.05);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.childBox}>
        <img src={Congratulation} alt="congrats" style={styles.congrats} />
        <Typography
          component="h1"
          variant="h3"
          sx={{
            ...styles.firstprize,
            color: isRed ? 'red' : 'white',
            transition: 'color 2s ease',
          }}
        >
          <span style={{ fontSize: '64px' }}>1</span>ST{' '}
          <span style={{ fontSize: '64px' }}>P</span>RIZE
        </Typography>
        <Box>
          <Box sx={styles.Numberbox}>
            <style>{bounceInAnimation}</style> {/* Inject the CSS animation code */}
            {numbers.map((number, index) => {
              const delay = index * 0.2; // Adjust the delay as needed
              const animationStyle = isSpinning
                ? {
                    animation: `bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s both`,
                  }
                : {};

              const numberStyle =
                number === 1 ? styles.Number : styles.Numbertwo;

              return (
                <Typography
                  key={index}
                  sx={{
                    ...numberStyle,
                    ...animationStyle,
                  }}
                >
                  {number}
                </Typography>
              );
            })}
          </Box>
          <Box sx={styles.lightbox}>
            {Array(6)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={light}
                  alt="light"
                  style={styles.lightimage}
                />
              ))}
          </Box>
          <Box sx={styles.flashlightbox}>
            <img
              src={flashlight}
              alt="flashlight"
              style={styles.flashlight}
            />
          </Box>
        </Box>
        <Box sx={styles.basebox}>
          <Button onClick={handleSpinClick} disabled={isSpinning}>
            <img src={button} style={styles.button} alt="button" />
          </Button>
          <img src={base} alt="base" style={styles.base} />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
