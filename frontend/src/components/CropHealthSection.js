import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CropHealthSection = () => {
  const { t } = useTranslation();
  const [cropType, setCropType] = useState('wheat');
  const [plantingDate, setPlantingDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      alert('Please upload an image first');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const mockResults = [
        {
          condition: 'Healthy',
          confidence: '95%',
          recommendation: 'Your crop appears healthy. Continue current care routine.',
          severity: 'low'
        },
        {
          condition: 'Leaf Blight',
          confidence: '87%',
          recommendation: 'Apply copper-based fungicide. Remove affected leaves immediately.',
          severity: 'medium'
        },
        {
          condition: 'Nutrient Deficiency',
          confidence: '92%',
          recommendation: 'Apply nitrogen-rich fertilizer. Consider soil testing.',
          severity: 'medium'
        }
      ];

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setAnalysisResult(randomResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="crop-health-section">
      <div className="section-title">
        <span>🔬</span>
        <span>{t('cropHealth.title')}</span>
      </div>
      
      <div className="crop-health-form">
        <div className="form-row">
          <div className="input-group">
            <label>{t('cropHealth.cropType')}:</label>
            <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="corn">Corn</option>
              <option value="cotton">Cotton</option>
              <option value="tomato">Tomato</option>
              <option value="potato">Potato</option>
            </select>
          </div>
          
          <div className="input-group">
            <label>{t('cropHealth.plantingDate')}:</label>
            <input 
              type="date" 
              value={plantingDate}
              onChange={(e) => setPlantingDate(e.target.value)}
            />
          </div>
        </div>
        
        <div className="image-upload-section">
          <label className="upload-label">
            {t('cropHealth.uploadImage')}:
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
          </label>
          
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Crop preview" className="preview-image" />
            </div>
          )}
        </div>
        
        <button 
          className="analyze-btn"
          onClick={handleAnalyze}
          disabled={isAnalyzing || !selectedImage}
        >
          {isAnalyzing ? t('cropHealth.analyzing') : t('cropHealth.analyze')}
        </button>
      </div>
      
      {isAnalyzing && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>{t('cropHealth.analyzing')}</p>
        </div>
      )}
      
      {analysisResult && (
        <div className="analysis-result">
          <h4>{t('cropHealth.result')}</h4>
          <div className={`result-card ${analysisResult.severity}`}>
            <div className="result-header">
              <span className="condition">{analysisResult.condition}</span>
              <span className="confidence">Confidence: {analysisResult.confidence}</span>
            </div>
            <p className="recommendation">{analysisResult.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropHealthSection;