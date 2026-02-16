import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Blogs() {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      <h1 style={{
        fontSize: '64px',
        fontWeight: 'bold',
        margin: '0 0 10px 0'
      }}>
        أهلاً بك في <span style={{ color: '#ff6600' }}>عدسة</span>
      </h1>
      
      <p style={{
        color: '#888',
        fontSize: '20px',
        marginBottom: '35px'
      }}>
        عالمك المفضل لتعلم فن التصوير.
      </p>

      <button 
        style={{
          backgroundColor: '#ff6600',
          padding: '12px 45px',
          borderRadius: '50px',
          border: 'none',
          cursor: 'pointer',
          transition: '0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <NavLink 
          to="/blogs" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          تصفح المدونة
        </NavLink>
      </button>
      
    </div>
  );
}