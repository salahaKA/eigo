import React, { useEffect } from 'react';
import './ScrollCategory.css'; // Create a separate CSS file for styling

const ScrollCategory = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    let scrollAmount = 0;
    const scrollStep = 2; // Pixels per step
    const scrollInterval = 20; // Milliseconds per step

    const autoScroll = () => {
      if (
        scrollContainer.scrollWidth - scrollContainer.clientWidth <=
        scrollAmount
      ) {
        scrollAmount = 0; // Reset to the beginning
      } else {
        scrollAmount += scrollStep;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(autoScroll, scrollInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-item">Category 1</div>
      <div className="scroll-item">Category 2</div>
      <div className="scroll-item">Category 3</div>
      <div className="scroll-item">Category 4</div>
      <div className="scroll-item">Category 5</div>
      <div className="scroll-item">Category 7</div>
      <div className="scroll-item">Category 8</div>
      <div className="scroll-item">Category 9</div>
      <div className="scroll-item">Category 10</div>
      <div className="scroll-item">Category 11</div>
      <div className="scroll-item">Category 12</div>
      <div className="scroll-item">Category 13</div>
      <div className="scroll-item">Category 14</div>
      <div className="scroll-item">Category 15</div>
    </div>
  );
};

export default ScrollCategory;
