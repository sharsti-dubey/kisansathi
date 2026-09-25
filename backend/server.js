const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: function (req, file, cb) {
    // Check file type
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Sample data
const farmersData = {
  'ramesh': {
    id: 'ramesh',
    name: 'राज कुमार',
    village: 'सुगहरा गांव',
    age: 45,
    phone: '+91 9876543210',
    landSize: 5,
    cropTypes: ['गेहूं', 'टमाटर', 'धान'],
    farmArea: 15,
    cropHealth: 87,
    soilMoisture: 68
  }
};

const diseaseDatabase = {
  'yellow_leaves': {
    disease: 'Yellow Leaf Disease',
    symptoms: ['Yellowing of leaves', 'Stunted growth', 'Wilting'],
    causes: ['Nutrient deficiency', 'Overwatering', 'Fungal infection'],
    treatment: [
      'Apply balanced fertilizer',
      'Improve drainage',
      'Use fungicide spray',
      'Remove affected leaves'
    ],
    prevention: [
      'Regular soil testing',
      'Proper watering schedule',
      'Crop rotation',
      'Use disease-resistant varieties'
    ]
  },
  'black_spots': {
    disease: 'Black Spot Disease',
    symptoms: ['Black circular spots on leaves', 'Leaf drop', 'Reduced yield'],
    causes: ['Fungal infection', 'High humidity', 'Poor air circulation'],
    treatment: [
      'Apply copper-based fungicide',
      'Remove infected plant parts',
      'Improve air circulation',
      'Reduce overhead watering'
    ],
    prevention: [
      'Plant resistant varieties',
      'Maintain proper spacing',
      'Avoid overhead irrigation',
      'Clean garden debris'
    ]
  },
  'wilting': {
    disease: 'Plant Wilting',
    symptoms: ['Drooping leaves', 'Brown leaf edges', 'Stem softening'],
    causes: ['Overwatering', 'Root rot', 'Bacterial infection', 'Heat stress'],
    treatment: [
      'Adjust watering schedule',
      'Improve soil drainage',
      'Apply appropriate pesticide',
      'Provide shade during hot days'
    ],
    prevention: [
      'Proper watering technique',
      'Well-draining soil',
      'Regular plant inspection',
      'Maintain optimal temperature'
    ]
  }
};

const marketPrices = {
  'wheat': { name: 'गेहूं', price: 2100, unit: 'per quintal', trend: 'up' },
  'rice': { name: 'धान', price: 1950, unit: 'per quintal', trend: 'stable' },
  'tomato': { name: 'टमाटर', price: 25, unit: 'per kg', trend: 'down' },
  'onion': { name: 'प्याज', price: 18, unit: 'per kg', trend: 'up' }
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'KisanSathi API is running' });
});

// User authentication
app.post('/api/auth/login', (req, res) => {
  const { aadhaar, phone } = req.body;
  
  // Simple authentication logic (in real app, validate against database)
  if (aadhaar || phone) {
    const userData = farmersData['ramesh'];
    res.json({
      success: true,
      message: 'Login successful',
      user: userData,
      token: 'dummy-jwt-token'
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Get user dashboard data
app.get('/api/dashboard/:userId', (req, res) => {
  const { userId } = req.params;
  const userData = farmersData[userId] || farmersData['ramesh'];
  
  // Simulate weather data
  const weatherData = {
    temperature: 28,
    humidity: 68,
    windSpeed: 12,
    condition: 'Partly Cloudy'
  };
  
  res.json({
    user: userData,
    weather: weatherData,
    lastUpdated: new Date().toISOString()
  });
});

// Plant disease analysis
app.post('/api/disease/analyze', upload.single('plantImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'No image file uploaded'
    });
  }
  
  // Simulate AI disease detection (in real app, integrate with ML model)
  const diseases = Object.keys(diseaseDatabase);
  const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
  const diseaseInfo = diseaseDatabase[randomDisease];
  
  const analysis = {
    success: true,
    confidence: Math.floor(Math.random() * 30) + 70, // 70-100%
    disease: diseaseInfo,
    imageUrl: `/uploads/${req.file.filename}`,
    analyzedAt: new Date().toISOString(),
    recommendations: diseaseInfo.treatment
  };
  
  res.json(analysis);
});

// Voice query processing
app.post('/api/voice/query', (req, res) => {
  const { query, language = 'hi' } = req.body;
  
  if (!query) {
    return res.status(400).json({
      success: false,
      message: 'No query provided'
    });
  }
  
  // Simple keyword matching for demo (in real app, use NLP)
  let response = '';
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes('yellow') || queryLower.includes('पीला')) {
    const diseaseInfo = diseaseDatabase['yellow_leaves'];
    response = `यह पीली पत्ती की बीमारी हो सकती है। मुख्य कारण: ${diseaseInfo.causes.join(', ')}। उपचार: ${diseaseInfo.treatment.join(', ')}।`;
  } else if (queryLower.includes('black') || queryLower.includes('काला') || queryLower.includes('spot')) {
    const diseaseInfo = diseaseDatabase['black_spots'];
    response = `यह काली धब्बे की बीमारी हो सकती है। उपचार: ${diseaseInfo.treatment.join(', ')}।`;
  } else if (queryLower.includes('wilt') || queryLower.includes('मुरझा')) {
    const diseaseInfo = diseaseDatabase['wilting'];
    response = `यह पौधे के मुरझाने की समस्या है। उपचार: ${diseaseInfo.treatment.join(', ')}।`;
  } else if (queryLower.includes('price') || queryLower.includes('भाव') || queryLower.includes('market')) {
    const prices = Object.values(marketPrices);
    response = `आज के बाजार भाव: ${prices.map(p => `${p.name} - ₹${p.price} ${p.unit}`).join(', ')}`;
  } else {
    response = 'मुझे खुशी होगी आपकी मदद करने में। कृपया अपनी समस्या के बारे में अधिक जानकारी दें।';
  }
  
  res.json({
    success: true,
    query: query,
    response: response,
    language: language,
    timestamp: new Date().toISOString()
  });
});

// Get market prices
app.get('/api/market/prices', (req, res) => {
  res.json({
    success: true,
    prices: marketPrices,
    lastUpdated: new Date().toISOString()
  });
});

// Update user profile
app.put('/api/user/profile/:userId', (req, res) => {
  const { userId } = req.params;
  const updates = req.body;
  
  if (farmersData[userId]) {
    farmersData[userId] = { ...farmersData[userId], ...updates };
    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: farmersData[userId]
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
});

// Weather data
app.get('/api/weather/:location', (req, res) => {
  const { location } = req.params;
  
  // Simulate weather data (in real app, integrate with weather API)
  const weatherData = {
    location: location,
    current: {
      temperature: 28,
      humidity: 68,
      windSpeed: 12,
      condition: 'Partly Cloudy',
      pressure: 1013,
      visibility: 10
    },
    forecast: [
      { day: 'Today', high: 32, low: 24, condition: 'Sunny' },
      { day: 'Tomorrow', high: 30, low: 22, condition: 'Cloudy' },
      { day: 'Day 3', high: 29, low: 21, condition: 'Rain' }
    ],
    lastUpdated: new Date().toISOString()
  };
  
  res.json(weatherData);
});

// Crop advisory
app.get('/api/advisory/:cropType', (req, res) => {
  const { cropType } = req.params;
  
  const advisories = {
    wheat: {
      crop: 'गेहूं',
      season: 'Rabi',
      recommendations: [
        'मिट्टी की नमी का ध्यान रखें',
        'उर्वरक का सही उपयोग करें',
        'कीट-पतंगों से बचाव करें'
      ],
      diseases: ['Yellow Rust', 'Black Rust', 'Powdery Mildew'],
      bestPractices: [
        'बीज की गुणवत्ता जांचें',
        'समय पर बुवाई करें',
        'उचित सिंचाई करें'
      ]
    },
    rice: {
      crop: 'धान',
      season: 'Kharif',
      recommendations: [
        'पानी का स्तर बनाए रखें',
        'खरपतवार नियंत्रण करें',
        'उचित पोषण प्रबंधन करें'
      ],
      diseases: ['Brown Spot', 'Blast', 'Sheath Blight'],
      bestPractices: [
        'स्वस्थ पौध तैयार करें',
        'उचित दूरी बनाए रखें',
        'समय पर रोपाई करें'
      ]
    }
  };
  
  const advisory = advisories[cropType] || advisories.wheat;
  
  res.json({
    success: true,
    advisory: advisory,
    generatedAt: new Date().toISOString()
  });
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 10MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: error.message || 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌱 KisanSathi server is running on port ${PORT}`);
  console.log(`📍 API base URL: http://localhost:${PORT}/api`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
});