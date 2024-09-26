import React from 'react';

function Feedback() {
  const reviews = [
    { id: 1, customer: 'Alice', rating: 5, comment: 'Great service!' },
    { id: 2, customer: 'Bob', rating: 4, comment: 'Very professional.' }
  ];

  return (
    <div className="feedback">
      <h2>Customer Feedback</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p><strong>{review.customer}</strong> rated {review.rating} stars</p>
            <p>"{review.comment}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback;
