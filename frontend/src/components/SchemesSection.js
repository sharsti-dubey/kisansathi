import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SchemesSection = () => {
  const { t } = useTranslation();
  
  const [schemes] = useState([
    {
      name: 'PM-KISAN Samman Nidhi',
      description: 'Financial support of ₹6000 per year to small and marginal farmers',
      eligibility: 'Small and marginal farmers with up to 2 hectares',
      benefit: '₹6000/year',
      status: 'Active'
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Crop insurance scheme providing coverage against crop failure',
      eligibility: 'All farmers (sharecroppers & tenant farmers)',
      benefit: 'Up to ₹2 lakh insurance',
      status: 'Active'
    },
    {
      name: 'Kisan Credit Card (KCC)',
      description: 'Credit support for agriculture and allied activities',
      eligibility: 'All farmers including tenant farmers',
      benefit: 'Low interest credit',
      status: 'Active'
    },
    {
      name: 'Soil Health Card Scheme',
      description: 'Provides soil health cards to farmers every 2 years',
      eligibility: 'All farmers',
      benefit: 'Free soil testing',
      status: 'Active'
    }
  ]);

  const handleApplyScheme = (schemeName) => {
    alert(`Redirecting to application for: ${schemeName}`);
    // In a real app, this would redirect to the official government portal
  };

  return (
    <div className="schemes-section">
      <div className="section-title">
        <span>🏛️</span>
        <span>{t('schemes.title')}</span>
      </div>
      
      <div className="schemes-container">
        <h4>{t('schemes.available')}</h4>
        
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <div className="scheme-header">
              <h5>{scheme.name}</h5>
              <span className="scheme-status">{scheme.status}</span>
            </div>
            
            <p className="scheme-description">{scheme.description}</p>
            
            <div className="scheme-details">
              <div className="scheme-detail">
                <strong>Eligibility:</strong> {scheme.eligibility}
              </div>
              <div className="scheme-detail">
                <strong>Benefit:</strong> {scheme.benefit}
              </div>
            </div>
            
            <button 
              className="apply-btn"
              onClick={() => handleApplyScheme(scheme.name)}
            >
              {t('schemes.apply')}
            </button>
          </div>
        ))}
      </div>
      
      <div className="schemes-note">
        <small>* For detailed information and application process, visit official government portals.</small>
      </div>
    </div>
  );
};

export default SchemesSection;