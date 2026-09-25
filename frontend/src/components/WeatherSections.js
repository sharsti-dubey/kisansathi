import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WeatherSection = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState('Delhi, India');
  
  // Placeholder data
  const [weatherData, setWeatherData] = useState({
    today: { temp: '28°C', humidity: '65%', precip: '20%' },
    tomorrow: { temp: '30°C', humidity: '70%', precip: '15%' },
    dayAfter: { temp: '32°C', humidity: '68%', precip: '10%' },
  });

  const handleUpdateWeather = () => {
    console.log(`Fetching weather for: ${location}`);
    // In a real app, you would make an API call here
    // and then use setWeatherData to update the state.
    alert(`Location updated to ${location}`);
  };

  return (
    <div className="location-weather-section" id="location-weather-section">
      <div className="section-title">
        <span>🌤️</span>
        <span>{t('weather.title')}</span>
      </div>
      
      <div className="location-input">
        <input 
          type="text" 
          placeholder={t('weather.locationPlaceholder')}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="location-input-field"
        />
        <button className="location-btn" onClick={handleUpdateWeather}>
          {t('weather.updateLocation')}
        </button>
      </div>
      
      <div className="weather-data-grid">
        {/* Today */}
        <div className="weather-day">
          <h4>{t('weather.today')}</h4>
          <p>{t('weather.temperature')}: <span>{weatherData.today.temp}</span></p>
          <p>{t('weather.humidity')}: <span>{weatherData.today.humidity}</span></p>
          <p>{t('weather.rain')}: <span>{weatherData.today.precip}</span></p>
        </div>
        
        {/* Tomorrow */}
        <div className="weather-day">
          <h4>{t('weather.tomorrow')}</h4>
          <p>{t('weather.temperature')}: <span>{weatherData.tomorrow.temp}</span></p>
          <p>{t('weather.humidity')}: <span>{weatherData.tomorrow.humidity}</span></p>
          <p>{t('weather.rain')}: <span>{weatherData.tomorrow.precip}</span></p>
        </div>
        
        {/* Day After Tomorrow */}
        <div className="weather-day">
          <h4>{t('weather.dayAfter')}</h4>
          <p>{t('weather.temperature')}: <span>{weatherData.dayAfter.temp}</span></p>
          <p>{t('weather.humidity')}: <span>{weatherData.dayAfter.humidity}</span></p>
          <p>{t('weather.rain')}: <span>{weatherData.dayAfter.precip}</span></p>
        </div>
      </div>
      
      <div className="weather-recommendations">
        <h4>{t('weather.suggestions')}</h4>
        <p>{t('weather.suggestionText')}</p>
      </div>
    </div>
  );
};

export default WeatherSection;