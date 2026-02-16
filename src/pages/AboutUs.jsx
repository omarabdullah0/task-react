import React from 'react';

export default function AboutUs() {
  return (
    <div style={{
      backgroundColor: '#121212',
      color: 'white',
      padding: '80px 20px',
      direction: 'rtl',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
          نحن نوثق <span style={{ color: '#ff6600' }}>اللحظة</span>
        </h1>
        <p style={{ color: '#888', fontSize: '18px', lineHeight: '1.8' }}>
          بدأت "عدسة" كفكرة بسيطة لمشاركة شغف التصوير، واليوم نحن مجتمع يضم آلاف المصورين.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        
        <div style={{backgroundColor: '#1a1a1a',border: '1px solid #333',borderRadius: '20px',padding: '30px',flex: '1',minWidth: '250px',transition: '0.3s'}}>
          <div style={{backgroundColor: '#ff6600',width: '60px',height: '60px',
            borderRadius: '50%',display: 'flex',alignItems: 'center',justifyContent: 'center',margin: '0 auto 20px',color: 'black',fontSize: '24px'}}>
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3>رؤيتنا</h3>
          <p style={{ color: '#888' }}>أن نكون المصدر الأول لكل مصور يبحث عن الإلهام وتطوير أدواته البصرية.</p>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '30px',
          flex: '1',
          minWidth: '250px',
          transition: '0.3s'
        }}>
          <div style={{backgroundColor: '#ff6600',width: '60px',height: '60px',
            borderRadius: '50%',display: 'flex',alignItems: 'center',justifyContent: 'center',margin: '0 auto 20px',color: 'black',fontSize: '24px'
          }}>
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3>رسالتنا</h3>
          <p style={{ color: '#888' }}>تقديم محتوى تعليمي مبسط واحترافي يساعد المبتدئين على دخول عالم التصوير.</p>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',border: '1px solid #333',borderRadius: '20px',
          padding: '30px',flex: '1',minWidth: '250px',transition: '0.3s'
        }}>
          <div style={{
            backgroundColor: '#ff6600',
            width: '60px',height: '60px',borderRadius: '50%',display: 'flex',
            alignItems: 'center',justifyContent: 'center',margin: '0 auto 20px',color: 'black',fontSize: '24px'
          }}>
            <i className="fas fa-camera-retro"></i>
          </div>
          <h3>مجتمعنا</h3>
          <p style={{ color: '#888' }}>خلق بيئة تفاعلية لتبادل الخبرات والنقد البناء بين المصورين العرب.</p>
        </div>

      </div>
    </div>
  );
}