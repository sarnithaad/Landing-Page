import React from 'react';

const images = [
  '/images/img1.jpg','/images/img2.jpg','/images/img3.jpg','/images/img4.jpg','/images/img5.jpg','/images/img6.jpg','/images/img7.jpg'];
 

const gridItems = [
  { idx: 0, style: { gridColumn: '1 / span 2', gridRow: '1 / span 2' } }, // Large horizontal
  { idx: 1, style: { gridColumn: '3 / span 1', gridRow: '1 / span 1' } }, // Small square
  { idx: 2, style: { gridColumn: '3 / span 1', gridRow: '2 / span 2' } }, // Tall vertical
  { idx: 3, style: { gridColumn: '1 / span 1', gridRow: '3 / span 1' } }, // Small square
  { idx: 4, style: { gridColumn: '2 / span 1', gridRow: '3 / span 1' } }, // Small square
  { idx: 5, style: { gridColumn: '1 / span 1', gridRow: '4 / span 1' } }, // Small square
  { idx: 6, style: { gridColumn: '2 / span 2', gridRow: '4 / span 1' } }];

export default function GallerySection() {
  return (
    <section style={{ background: '#f3f6fb', padding: '0', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          padding: '3.5rem 2rem 0 2rem',
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <span style={{
            color: '#9ca3af',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.08em',
            marginBottom: '0.7rem',
            display: 'block'
          }}>
            NO LIMITS
          </span>
          <h2 style={{
            margin: '0.5rem 0 0.7rem 0',
            fontWeight: 800,
            fontSize: '2.3rem',
            lineHeight: 1.1,
            color: '#22223b',
            letterSpacing: '-0.02em',
          }}>
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p style={{
            color: '#333',
            maxWidth: 400,
            fontSize: '1.13rem',
            marginBottom: '2.3rem',
          }}>
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra tempor quis arcu. Ipsum rutrum.
          </p>
          <button style={{
            marginBottom: '2.5rem',
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '0.85rem 2.1rem',
            fontSize: '1.13rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(37,99,235,0.13)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}>
            Lorem Ipsum →
          </button>
        </div>
        {/* Right: Uneven Grid of Images */}
        <div
          style={{
            flex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '180px',
            gap: '1.5rem',
            width: '100%',
            minWidth: 550,
            maxWidth: 800,
          }}
        >
          {gridItems.map((item, i) => (
            <img
              key={i}
              src={images[item.idx]}
              alt={`Gallery ${i + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 14,
                boxShadow: '0 2px 12px rgba(0,0,0,0.09)',
                background: '#e5e7eb',
                display: 'block',
                ...item.style,
              }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
