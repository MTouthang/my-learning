import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';

const RandomColor: React.FC = () => {
  const [typeOfColor, setTypeOfColor] = useState<string>('hex');
  const [color, setColor] = useState<string>('#000000');

  const randomColorUtils = (length: number): number => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHex = useCallback((): void => {
    const hex: Array<number | string> = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    let hexColor: string = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtils(hex.length)];
    }
    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback((): void => {
    const r: number = randomColorUtils(256);
    const g: number = randomColorUtils(256);
    const b: number = randomColorUtils(256);

    setColor(`rgb(${r},${g},${b})`);
  }, []);

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHex();
  }, [typeOfColor, handleCreateRandomHex, handleCreateRandomRgbColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
        textAlign: 'center',
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}> Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}> Create RGB Color </button>
      <button
        onClick={
          typeOfColor == 'hex'
            ? handleCreateRandomHex
            : handleCreateRandomRgbColor
        }
      >
        {' '}
        Generate Random Color{' '}
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
