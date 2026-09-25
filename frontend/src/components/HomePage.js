import React from 'react';
import WeatherSection from './WeatherSections.js';
import IrrigationSection from './IrrigationSection';
import MarketPriceSection from './MarketPriceSection';
import SchemesSection from './SchemesSection';
import NewsSection from './NewsSection';
import CropHealthSection from './CropHealthSection';

const HomePage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <WeatherSection />
        <IrrigationSection />
        <MarketPriceSection />
        <SchemesSection />
        <NewsSection />
        <CropHealthSection />
      </div>
    </div>
  );
};

export default HomePage;