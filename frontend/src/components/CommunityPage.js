import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Post from './Post';

const CommunityPage = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'राम प्रसाद',
      location: 'Punjab',
      time: '2 hours ago',
      content: 'मेरी गेहूं की फसल में पीले धब्बे दिखाई दे रहे हैं। क्या यह कोई बीमारी है? कोई सुझाव दे सकता है?',
      image: null,
      likes: 12,
      comments: 5,
      shares: 2
    },
    {
      id: 2,
      author: 'Priya Sharma',
      location: 'Haryana',
      time: '4 hours ago',
      content: 'Excellent results with organic fertilizers this season! My tomato yield increased by 40%. Happy to share the recipe with anyone interested.',
      image: null,
      likes: 25,
      comments: 8,
      shares: 6
    },
    {
      id: 3,
      author: 'अजय कुमार',
      location: 'UP',
      time: '6 hours ago',
      content: 'बारिश के कारण फसल में पानी भर गया है। ड्रेनेज के लिए कोई तुरंत समाधान बताइए।',
      image: null,
      likes: 8,
      comments: 12,
      shares: 4
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmitPost = () => {
    if (!newPost.trim()) {
      alert('Please write something before posting');
      return;
    }

    const post = {
      id: posts.length + 1,
      author: 'You', // In a real app, this would be the logged-in user
      location: 'Your Location',
      time: 'Just now',
      content: newPost,
      image: selectedImage ? URL.createObjectURL(selectedImage) : null,
      likes: 0,
      comments: 0,
      shares: 0
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setSelectedImage(null);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleComment = (postId) => {
    // In a real app, this would open a comment modal or navigate to post details
    alert(`Opening comments for post ${postId}`);
  };

  const handleShare = (postId) => {
    // In a real app, this would open sharing options
    alert(`Sharing post ${postId}`);
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <h2>{t('community.title')}</h2>
        <p>{t('community.shareExperience')}</p>
      </div>

      <div className="new-post-section">
        <div className="post-input-area">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder={t('community.postPlaceholder')}
            className="post-textarea"
            rows={4}
          />
          
          <div className="post-actions">
            <label className="image-upload-btn">
              📷 {t('community.attachImage')}
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </label>
            
            {selectedImage && (
              <span className="selected-image">Image selected: {selectedImage.name}</span>
            )}
            
            <button 
              className="post-submit-btn"
              onClick={handleSubmitPost}
            >
              {t('community.post')}
            </button>
          </div>
        </div>
      </div>

      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
            onComment={() => handleComment(post.id)}
            onShare={() => handleShare(post.id)}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;