// FeedbackPage.tsx
import React, { useState } from 'react';

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 600, margin: '4rem auto', padding: '2rem', background: '#f8f9fa', borderRadius: 8 }}>
      <h2 style={{ marginBottom: '1rem' }}>Share Your Feedback</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            rows={6}
            style={{ width: '100%', padding: '1rem', borderRadius: 4, border: '1px solid #ccc', fontSize: '1rem' }}
            placeholder="Type your feedback here..."
            required
          />
          <br />
          <button
            type="submit"
            style={{
              marginTop: '1rem',
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '0.7rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
