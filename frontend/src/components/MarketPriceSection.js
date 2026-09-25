import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MarketPriceSection = () => {
  const { t } = useTranslation();
  
  const [marketData] = useState([
    { 
      crop: 'Wheat', 
      price: '₹2,150', 
      change: '+2.5%', 
      location: 'Delhi Mandi',
      trend: 'up' 
    },
    { 
      crop: 'Rice', 
      price: '₹3,200', 
      change: '-1.2%', 
      location: 'Punjab Mandi',
      trend: 'down' 
    },
    { 
      crop: 'Cotton', 
      price: '₹5,800', 
      change: '+3.8%', 
      location: 'Gujarat Mandi',
      trend: 'up' 
    },
    { 
      crop: 'Sugarcane', 
      price: '₹280', 
      change: '+0.8%', 
      location: 'UP Mandi',
      trend: 'up' 
    },
    { 
      crop: 'Soybean', 
      price: '₹4,500', 
      change: '-2.1%', 
      location: 'MP Mandi',
      trend: 'down' 
    }
  ]);

  return (
    <div className="market-section">
      <div className="section-title">
        <span>📊</span>
        <span>{t('market.title')}</span>
      </div>
      
      <div className="market-table">
        <div className="market-header">
          <span>{t('market.crop')}</span>
          <span>{t('market.price')}</span>
          <span>{t('market.change')}</span>
          <span>{t('market.location')}</span>
        </div>
        
        {marketData.map((item, index) => (
          <div key={index} className="market-row">
            <span className="crop-name">{item.crop}</span>
            <span className="price">{item.price}</span>
            <span className={`change ${item.trend}`}>
              {item.trend === 'up' ? '📈' : '📉'} {item.change}
            </span>
            <span className="location">{item.location}</span>
          </div>
        ))}
      </div>
      
      <div className="market-note">
        <small>* Prices updated as of today. Market rates may vary by location and quality.</small>
      </div>
    </div>
  );
};

export default MarketPriceSection;