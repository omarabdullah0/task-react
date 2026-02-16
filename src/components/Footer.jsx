import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const styles = {
    container: {
      backgroundColor: '#161616',
      margin: '1rem auto',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      direction: 'rtl',
    },
    footerWrapper: {
      textAlign: 'right',
      color: 'white',
      backgroundColor: '#161616',
    },
    section: {
      backgroundColor: '#161616',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      borderRadius: '0.5rem',
    },
    heading: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    navList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    categoryLink: {
      color: '#f8f9fa',
      textDecoration: 'none',
      fontSize: '16px',
      marginBottom: '10px',
      display: 'block'
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #333',
      backgroundColor: '#222',
      color: 'white',
      outline: 'none'
    },
    button: {
      backgroundColor: 'orange',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    infoText: {
      marginBottom: '1rem',
      lineHeight: '1.6'
    }
  };

  const getLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline-block',
    transition: 'all 0.4s ease',
    color: isActive ? 'orange' : '#ccc',
    transform: isActive ? 'translateX(-10px)' : 'translateX(0)'
  });

  return (
    <div className='container' style={styles.container}>
      <footer style={styles.footerWrapper}>
        <section style={styles.section}>
          <div className="container mt-5">
            <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 style={styles.heading}>
                  <i className="fas fa-camera" style={{marginLeft: '10px'}} /> عدسة
                </h6>
                <p style={styles.infoText}>
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 style={styles.heading}>استكشف</h6>
                <nav>
                  <ul style={styles.navList}>
                    <li><NavLink to="/" style={getLinkStyle}>الرئيسية</NavLink></li>
                    <li><NavLink to="/blogs" style={getLinkStyle}>المدونة</NavLink></li>
                    <li><NavLink to="/aboutus" style={getLinkStyle}>من نحن</NavLink></li>
                  </ul>
                </nav>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 style={styles.heading}>التصنيفات</h6>
                <a href="#!" style={styles.categoryLink}>تصوير طبيعة</a>
                <a href="#!" style={styles.categoryLink}>بورتريه</a>
                <a href="#!" style={styles.categoryLink}>معدات إضاءة</a>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 style={styles.heading}>ابقى على اطلاع</h6>
                <p style={styles.infoText}>
                  <i className="fas fa-envelope" style={{marginLeft: '10px'}} /> اشترك للحصول على أحدث المقالات والتحديثات
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                  <input 
                    type='email' 
                    placeholder='أدخل بريدك الإلكتروني' 
                    style={styles.input}
                  />
                  <button style={styles.button}>اشترك</button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}