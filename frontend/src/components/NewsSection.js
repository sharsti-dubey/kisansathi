import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewsSection = () => {
  const { t } = useTranslation();
  
  const [newsItems] = useState([
    {
      title: 'New Organic Farming Techniques Show 30% Yield Increase',
      summary: 'Recent studies reveal that innovative organic farming methods are showing promising results...',
      date: '2 hours ago',
      source: 'Agriculture Today',
      category: 'Technology'
    },
    {
      title: 'Government Announces Additional Support for Drought-Affected Areas',
      summary: 'The agriculture ministry has announced a special relief package for farmers in drought-affected regions...',
      date: '5 hours ago',
      source: 'Farm News Network',
      category: 'Policy'
    },
    {
      title: 'Monsoon Forecast: Above Normal Rainfall Expected This Season',
      summary: 'The meteorological department predicts above-normal monsoon rainfall across major agricultural regions...',
      date: '1 day ago',
      source: 'Weather Agricultural Bureau',
      category: 'Weather'
    },
    {
      title: 'Digital Agriculture: Mobile Apps Helping Farmers Increase Productivity',
      summary: 'A new wave of agricultural mobile applications is transforming how farmers manage their crops and livestock...',
      date: '2 days ago',
      source: 'Tech Farm Magazine',
      category: 'Technology'
    }
  ]);

  const handleReadMore = (title) => {
    alert(`Opening full article: ${title}`);
    // In a real app, this would navigate to the full article
  };

  return (
    <div className="news-section">
      <div className="section-title">
        <span>📰</span>
        <span>{t('news.title')}</span>
      </div>
      
      <div className="news-container">
        {newsItems.map((news, index) => (
          <div key={index} className="news-item">
            <div className="news-header">
              <span className="news-category">{news.category}</span>
              <span className="news-date">{news.date}</span>
            </div>
            
            <h5 className="news-title">{news.title}</h5>
            <p className="news-summary">{news.summary}</p>
            
            <div className="news-footer">
              <span className="news-source">Source: {news.source}</span>
              <button 
                className="read-more-btn"
                onClick={() => handleReadMore(news.title)}
              >
                {t('news.readMore')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;