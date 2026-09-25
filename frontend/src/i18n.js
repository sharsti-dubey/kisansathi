import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      navbar: {
        dashboard: "Dashboard",
        community: "Community",
        profile: "Profile"
      },
      weather: {
        title: "Weather Information and Suggestions",
        locationPlaceholder: "Enter your location (e.g., Delhi, India)",
        updateLocation: "Update Location",
        today: "Today",
        tomorrow: "Tomorrow",
        dayAfter: "Day After Tomorrow",
        temperature: "Temperature",
        humidity: "Humidity",
        rain: "Rain",
        suggestions: "Weather-based Suggestions:",
        suggestionText: "Current weather conditions suggest your crops may need irrigation. Consider providing shade as temperatures are expected to rise."
      },
      irrigation: {
        title: "Irrigation Planning",
        cropType: "Crop Type",
        fieldSize: "Field Size (in acres)",
        soilType: "Soil Type",
        calculate: "Calculate Water Needs",
        waterNeeds: "Water Requirements",
        schedule: "Recommended Irrigation Schedule"
      },
      market: {
        title: "Market Prices",
        crop: "Crop",
        price: "Price (per quintal)",
        change: "24h Change",
        location: "Location"
      },
      schemes: {
        title: "Government Schemes",
        available: "Available Schemes",
        apply: "Apply Now"
      },
      news: {
        title: "Agricultural News & Updates",
        readMore: "Read More"
      },
      cropHealth: {
        title: "AI-Powered Crop Health Detection",
        cropType: "Crop Type",
        plantingDate: "Planting Date",
        uploadImage: "Upload Crop Image",
        analyze: "Analyze Crop Health",
        analyzing: "Analyzing...",
        result: "Analysis Result"
      },
      community: {
        title: "Farmer Community Chat",
        shareExperience: "Share your farming experience, ask questions, or help fellow farmers!",
        postPlaceholder: "Share your thoughts, questions, or farming tips...",
        attachImage: "Attach Image",
        post: "Post",
        like: "Like",
        comment: "Comment",
        share: "Share"
      },
      profile: {
        title: "Farmer Profile",
        personalInfo: "Personal Information",
        name: "Name",
        age: "Age",
        location: "Location",
        experience: "Farming Experience",
        farmDetails: "Farm Details",
        farmSize: "Farm Size",
        primaryCrops: "Primary Crops",
        farmingType: "Farming Type",
        save: "Save Profile",
        years: "years"
      }
    }
  },
  hi: {
    translation: {
      navbar: {
        dashboard: "डैशबोर्ड",
        community: "समुदाय",
        profile: "प्रोफ़ाइल"
      },
      weather: {
        title: "मौसम की जानकारी और सुझाव",
        locationPlaceholder: "अपना स्थान दर्ज करें (जैसे दिल्ली, भारत)",
        updateLocation: "स्थान अपडेट करें",
        today: "आज",
        tomorrow: "कल",
        dayAfter: "परसों",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        rain: "बारिश",
        suggestions: "मौसम आधारित सुझाव:",
        suggestionText: "वर्तमान मौसम स्थितियों के अनुसार आपकी फसलों को सिंचाई की जरूरत हो सकती है। तापमान बढ़ने की उम्मीद है इसलिए छाया प्रदान करने पर विचार करें।"
      },
      irrigation: {
        title: "सिंचाई योजना",
        cropType: "फसल का प्रकार",
        fieldSize: "खेत का आकार (एकड़ में)",
        soilType: "मिट्टी का प्रकार",
        calculate: "पानी की आवश्यकता की गणना करें",
        waterNeeds: "पानी की आवश्यकताएं",
        schedule: "अनुशंसित सिंचाई कार्यक्रम"
      },
      market: {
        title: "बाजार भाव",
        crop: "फसल",
        price: "मूल्य (प्रति क्विंटल)",
        change: "24 घंटे में परिवर्तन",
        location: "स्थान"
      },
      schemes: {
        title: "सरकारी योजनाएं",
        available: "उपलब्ध योजनाएं",
        apply: "अभी आवेदन करें"
      },
      news: {
        title: "कृषि समाचार और अपडेट",
        readMore: "और पढ़ें"
      },
      cropHealth: {
        title: "AI-संचालित फसल स्वास्थ्य जांच",
        cropType: "फसल का प्रकार",
        plantingDate: "रोपण की तारीख",
        uploadImage: "फसल की तस्वीर अपलोड करें",
        analyze: "फसल स्वास्थ्य का विश्लेषण करें",
        analyzing: "विश्लेषण कर रहे हैं...",
        result: "विश्लेषण परिणाम"
      },
      community: {
        title: "किसान समुदाय चैट",
        shareExperience: "अपना खेती का अनुभव साझा करें, सवाल पूछें, या साथी किसानों की मदद करें!",
        postPlaceholder: "अपने विचार, सवाल या खेती की सलाह साझा करें...",
        attachImage: "तस्वीर संलग्न करें",
        post: "पोस्ट करें",
        like: "पसंद",
        comment: "टिप्पणी",
        share: "साझा करें"
      },
      profile: {
        title: "किसान प्रोफ़ाइल",
        personalInfo: "व्यक्तिगत जानकारी",
        name: "नाम",
        age: "उम्र",
        location: "स्थान",
        experience: "खेती का अनुभव",
        farmDetails: "खेत विवरण",
        farmSize: "खेत का आकार",
        primaryCrops: "मुख्य फसलें",
        farmingType: "खेती का प्रकार",
        save: "प्रोफ़ाइल सेव करें",
        years: "साल"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;