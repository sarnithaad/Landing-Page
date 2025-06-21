// HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#f8f9fa',
        padding: '4rem 0', // Increased vertical padding
        minHeight: '600px', // Ensures a tall hero
        width: '100vw', // Full viewport width
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          flex: 1,
          padding: '4rem',
          maxWidth: '700px', // Increased maxWidth for content
        }}
      >
        <span style={{ color: '#2563eb', fontWeight: 500, fontSize: '1.2rem' }}>Lorem Ipsum</span>
        <h1 style={{ margin: '1rem 0', fontWeight: 700, fontSize: '3rem' }}>Lorem Ipsum Dolor Sit Amet</h1>
        <p style={{ color: '#333', maxWidth: 500, fontSize: '1.2rem' }}>
          Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna luctus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={{ height: 60 }}
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            style={{ height: 60 }}
          />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 0,
        }}
      >
        <img
          src="/images/Photo.jpg"
          alt="Hand holding phone"
          style={{
            maxHeight: 1000, 
            width: '100%',
            maxWidth: 1000,
            objectFit: 'contain',
          }}
        />
      </div>
    </section>
  );
}
