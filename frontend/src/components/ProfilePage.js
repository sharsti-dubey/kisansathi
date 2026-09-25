import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();
  
  const [profileData, setProfileData] = useState({
    name: 'राज कुमार',
    age: '45',
    location: 'Punjab, India',
    experience: '20',
    farmSize: '5.5',
    primaryCrops: 'Wheat, Rice, Cotton',
    farmingType: 'Conventional'
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    alert('Profile saved successfully!');
    console.log('Saved profile:', profileData);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>{t('profile.title')}</h2>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>{t('profile.personalInfo')}</h3>
          
          <div className="profile-form">
            <div className="form-group">
              <label>{t('profile.name')}:</label>
              <input 
                type="text"
                value={profileData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="profile-input"
              />
            </div>
            
            <div className="form-group">
              <label>{t('profile.age')}:</label>
              <input 
                type="number"
                value={profileData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="profile-input"
              />
            </div>
            
            <div className="form-group">
              <label>{t('profile.location')}:</label>
              <input 
                type="text"
                value={profileData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="profile-input"
              />
            </div>
            
            <div className="form-group">
              <label>{t('profile.experience')} ({t('profile.years')}):</label>
              <input 
                type="number"
                value={profileData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="profile-input"
              />
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>{t('profile.farmDetails')}</h3>
          
          <div className="profile-form">
            <div className="form-group">
              <label>{t('profile.farmSize')} (acres):</label>
              <input 
                type="number"
                step="0.1"
                value={profileData.farmSize}
                onChange={(e) => handleInputChange('farmSize', e.target.value)}
                className="profile-input"
              />
            </div>
            
            <div className="form-group">
              <label>{t('profile.primaryCrops')}:</label>
              <input 
                type="text"
                value={profileData.primaryCrops}
                onChange={(e) => handleInputChange('primaryCrops', e.target.value)}
                className="profile-input"
                placeholder="e.g., Wheat, Rice, Cotton"
              />
            </div>
            
            <div className="form-group">
              <label>{t('profile.farmingType')}:</label>
              <select 
                value={profileData.farmingType}
                onChange={(e) => handleInputChange('farmingType', e.target.value)}
                className="profile-select"
              >
                <option value="Conventional">Conventional</option>
                <option value="Organic">Organic</option>
                <option value="Mixed">Mixed</option>
                <option value="Sustainable">Sustainable</option>
              </select>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="save-profile-btn" onClick={handleSaveProfile}>
            {t('profile.save')}
          </button>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h4>Farm Experience</h4>
            <p>{profileData.experience} years</p>
          </div>
          <div className="stat-card">
            <h4>Farm Size</h4>
            <p>{profileData.farmSize} acres</p>
          </div>
          <div className="stat-card">
            <h4>Farming Type</h4>
            <p>{profileData.farmingType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;