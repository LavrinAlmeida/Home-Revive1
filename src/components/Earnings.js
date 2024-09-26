import React from 'react';

function Earnings() {
  const earnings = {
    total: 1200,
    pending: 300,
    completed: 900
  };

  return (
    <div className="earnings">
      <h2>Earnings Summary</h2>
      <p><strong>Total Earnings:</strong> ${earnings.total}</p>
      <p><strong>Pending Payments:</strong> ${earnings.pending}</p>
      <p><strong>Completed Payments:</strong> ${earnings.completed}</p>
    </div>
  );
}

export default Earnings;
