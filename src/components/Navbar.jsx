import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
const allLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المدونة', path: '/blogs' }, 
    { name: 'من نحن', path: '/aboutus' }
];

const styles = {
    navContainer: {backgroundColor: '#121212',padding: '10px 50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',
        direction: 'rtl',borderBottom: '1px solid #333',position: 'sticky',top: 0,zIndex: 1000},
    logoSection: {display: 'flex',alignItems: 'center',gap: '10px',color: 'white'},
    logoIcon: {
backgroundColor: '#ff6600',borderRadius: '50%',width: '35px',height: '35px',display: 'flex',alignItems: 'center',justifyContent: 'center'
    },
    logoTextContainer: {
    textAlign: 'right'
    },
    logoTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold'
    },
    logoSubtitle: {color: '#ff6600',fontSize: '9px',display: 'block'},
    linksCapsule: {
    backgroundColor: '#1a1a1a',
    borderRadius: '50px',
    padding: '5px',
    display: 'flex',
    border: '1px solid #333'
    },
    ul: {
    display: 'flex',listStyle: 'none',margin: 0,padding: 0},
    ctaButton: {backgroundColor: '#ff6600',color: 'white',border: 'none',padding: '10px 25px',borderRadius: '50px',fontWeight: 'bold',cursor: 'pointer',transition: '0.3s'}
};

const getLinkStyle = ({ isActive }) => ({textDecoration: 'none',color: isActive ? 'white' : '#888',backgroundColor: isActive ? '#ff6600' : 'transparent',padding: '8px 25px',borderRadius: '40px',fontSize: '16px',fontWeight: 'bold',transition: '0.3s'});

return (
    <nav style={styles.navContainer}>
    <div style={styles.logoSection}>
        <div style={styles.logoIcon}>
        <i className="fas fa-camera" style={{ color: 'black' }}></i>
        </div>
        <div style={styles.logoTextContainer}>
        <h4 style={styles.logoTitle}>عدسة</h4>
        <span style={styles.logoSubtitle}>عالم التصوير الفوتوغرافي</span>
        </div>
    </div>

    <div style={styles.linksCapsule}>
        <ul style={styles.ul}>
        {allLinks.map((link, index) => (
            <li key={index}>
            <NavLink to={link.path} style={getLinkStyle}>
                {link.name}
            </NavLink>
            </li>
        ))}
        </ul>
    </div>

    <button style={styles.ctaButton}>
        ابدأ القراءة
    </button>
    </nav>
);
}