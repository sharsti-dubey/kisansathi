import React from 'react';

const Post = ({ post, onLike, onComment, onShare, t }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-author-info">
          <div className="author-avatar">
            {post.author.charAt(0).toUpperCase()}
          </div>
          <div className="author-details">
            <h4 className="author-name">{post.author}</h4>
            <p className="author-location">{post.location} • {post.time}</p>
          </div>
        </div>
      </div>
      
      <div className="post-content">
        <p>{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post content" className="post-image" />
        )}
      </div>
      
      <div className="post-stats">
        <span>{post.likes} likes</span>
        <span>{post.comments} comments</span>
        <span>{post.shares} shares</span>
      </div>
      
      <div className="post-actions">
        <button className="action-btn like-btn" onClick={onLike}>
          👍 {t('community.like')}
        </button>
        <button className="action-btn comment-btn" onClick={onComment}>
          💬 {t('community.comment')}
        </button>
        <button className="action-btn share-btn" onClick={onShare}>
          📤 {t('community.share')}
        </button>
      </div>
    </div>
  );
};

export default Post;