'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function FeatureGridSection() {
  const router = useRouter();

  const handleFeedbackClick = () => {
    router.push('/feedback');
  };

  return (
    <section
      style={{
        background: '#fff',
        padding: '4rem 0',
        minHeight: '600px',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
          padding: '0 3rem',
        }}
      >
        <img
          src="/images/feature.jpg"
          alt="Feature"
          style={{
            width: 500,
            height: 350,
            objectFit: 'cover',
            borderRadius: 12,
            boxShadow: '0 4px 32px rgba(0,0,0,0.09)'
          }}
        />
        <div style={{ flex: 1 }}>
          <span style={{ color: '#2563eb', fontWeight: 500, fontSize: '1.2rem' }}>Lorem Ipsum</span>
          <h2 style={{ margin: '1rem 0', fontWeight: 700, fontSize: '2.3rem' }}>
            <span style={{ color: '#2563eb' }}>LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </h2>
          <p style={{ color: '#333', maxWidth: 650, fontSize: '1.2rem' }}>
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem 3rem',
              margin: '2rem 0',
              fontSize: '1.1rem'
            }}
          >
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
          </div>
          <button
            style={{
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.8rem 2rem',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(37,99,235,0.13)'
            }}
            onClick={handleFeedbackClick}
          >
            Share Feedback →
          </button>
        </div>
      </div>
    </section>
  );
}
