import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const IrrigationSection = () => {
  const { t } = useTranslation();
  const [cropType, setCropType] = useState('wheat');
  const [fieldSize, setFieldSize] = useState('');
  const [soilType, setSoilType] = useState('loamy');
  const [waterNeeds, setWaterNeeds] = useState(null);
  const [schedule, setSchedule] = useState(null);

  const calculateWaterNeeds = () => {
    if (!fieldSize || fieldSize <= 0) {
      alert('Please enter a valid field size');
      return;
    }

    // Simple calculation logic (placeholder)
    const baseWater = {
      wheat: 450,
      rice: 650,
      corn: 500,
      cotton: 700
    };

    const soilMultiplier = {
      sandy: 1.3,
      loamy: 1.0,
      clay: 0.8
    };

    const totalWater = (baseWater[cropType] || 500) * fieldSize * (soilMultiplier[soilType] || 1.0);
    
    setWaterNeeds(`${totalWater} liters per week`);
    setSchedule('Water every 2-3 days, early morning (6-8 AM) or evening (6-8 PM)');
  };

  return (
    <div className="irrigation-section">
      <div className="section-title">
        <span>💧</span>
        <span>{t('irrigation.title')}</span>
      </div>
      
      <div className="irrigation-inputs">
        <div className="input-group">
          <label>{t('irrigation.cropType')}:</label>
          <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
            <option value="cotton">Cotton</option>
          </select>
        </div>
        
        <div className="input-group">
          <label>{t('irrigation.fieldSize')}:</label>
          <input 
            type="number" 
            value={fieldSize}
            onChange={(e) => setFieldSize(e.target.value)}
            placeholder="Enter field size"
            min="0"
            step="0.1"
          />
        </div>
        
        <div className="input-group">
          <label>{t('irrigation.soilType')}:</label>
          <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
            <option value="sandy">Sandy</option>
            <option value="loamy">Loamy</option>
            <option value="clay">Clay</option>
          </select>
        </div>
        
        <button className="calculate-btn" onClick={calculateWaterNeeds}>
          {t('irrigation.calculate')}
        </button>
      </div>
      
      {waterNeeds && (
        <div className="irrigation-results">
          <div className="result-item">
            <h4>{t('irrigation.waterNeeds')}:</h4>
            <p>{waterNeeds}</p>
          </div>
          <div className="result-item">
            <h4>{t('irrigation.schedule')}:</h4>
            <p>{schedule}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrrigationSection;