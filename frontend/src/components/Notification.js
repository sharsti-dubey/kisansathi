import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample notifications
  useEffect(() => {
    const sampleNotifications = [
      {
        id: 1,
        type: 'weather',
        title: 'Weather Alert',
        message: 'Heavy rainfall expected in your area tomorrow. Ensure proper drainage.',
        time: '10 minutes ago',
        read: false
      },
      {
        id: 2,
        type: 'market',
        title: 'Price Alert',
        message: 'Wheat prices have increased by 3% in your local market.',
        time: '2 hours ago',
        read: false
      },
      {
        id: 3,
        type: 'scheme',
        title: 'New Scheme',
        message: 'PM-KISAN next installment will be credited on 15th of this month.',
        time: '1 day ago',
        read: true
      }
    ];

    setNotifications(sampleNotifications);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const clearNotification = (notificationId) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== notificationId)
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'weather': return '🌦️';
      case 'market': return '📊';
      case 'scheme': return '🏛️';
      default: return '🔔';
    }
  };

  return (
    <div className="notification-container">
      <button 
        className="notification-bell"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        🔔
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      {showNotifications && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h4>Notifications</h4>
            <button 
              className="close-notifications"
              onClick={() => setShowNotifications(false)}
            >
              ×
            </button>
          </div>
          
          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="no-notifications">
                <p>No notifications</p>
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                >
                  <div className="notification-content">
                    <div className="notification-icon">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="notification-text">
                      <h5>{notification.title}</h5>
                      <p>{notification.message}</p>
                      <small>{notification.time}</small>
                    </div>
                  </div>
                  <div className="notification-actions">
                    {!notification.read && (
                      <button 
                        className="mark-read-btn"
                        onClick={() => markAsRead(notification.id)}
                        title="Mark as read"
                      >
                        ✓
                      </button>
                    )}
                    <button 
                      className="clear-notification-btn"
                      onClick={() => clearNotification(notification.id)}
                      title="Clear notification"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;