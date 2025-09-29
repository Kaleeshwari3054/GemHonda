import React from 'react';
import '../Styles/GoogleReviews.css';

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      date: "2 weeks ago",
      review: "Excellent service at Gem Honda! Bought my Activa 125 here and the staff was very helpful. Great after-sales service too. Highly recommended!",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      date: "1 month ago",
      review: "Amazing experience! The team helped me choose the perfect Dio 125. Very professional and knowledgeable staff. Best Honda dealer in the area!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 4,
      date: "3 weeks ago",
      review: "Good service and competitive prices. Bought Honda Shine here. The delivery was on time and all paperwork was handled smoothly.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      rating: 5,
      date: "1 week ago",
      review: "Outstanding customer service! The staff went above and beyond to help me with my Honda Activa purchase. Very satisfied with the experience.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 5,
      name: "Vikram Singh",
      rating: 5,
      date: "2 months ago",
      review: "Fantastic dealership! Great collection of Honda bikes and scooters. The team is very knowledgeable and provides excellent guidance.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 6,
      name: "Kavya Nair",
      rating: 4,
      date: "3 weeks ago",
      review: "Very good experience overall. Staff is friendly and helpful. Got my Honda Dio from here and I'm very happy with the purchase.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="google-reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2>What Our Customers Say</h2>
          <div className="google-badge">
            <img 
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
              alt="Google" 
              className="google-logo"
            />
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="reviews-carousel">
          <div className="reviews-track">
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                    <div className="reviewer-details">
                      <h4>{review.name}</h4>
                      <p className="review-date">{review.date}</p>
                    </div>
                  </div>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="review-text">{review.review}</p>
                <div className="google-icon">
                  <img 
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
                    alt="Google"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
