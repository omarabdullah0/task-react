import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData'; 

export default function Blogs() {
  const [blogs] = useState(blogData);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filtedCategory = selectedCategory 
    ? blogs.posts.filter((blog) => blog.category === selectedCategory) 
    : blogs.posts;

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '50px 20px', color: 'white' }} dir="rtl">
      <h1 className='text-center mb-5 fw-bold'>المدونة</h1>
      
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        <button 
          onClick={() => setSelectedCategory(null)} 
          className="btn"
          style={{
            backgroundColor: selectedCategory === null ? '#ff6600' : '#1a1a1a',
            color: 'white', borderRadius: '50px', padding: '8px 25px', border: 'none'
          }}
        >
          الكل
        </button>
        {blogs.categories.map((c, index) => (
          <button 
            key={index}
            onClick={() => setSelectedCategory(c.name)} 
            className="btn"
            style={{
              backgroundColor: selectedCategory === c.name ? '#ff6600' : '#1a1a1a',
              color: 'white', borderRadius: '50px', padding: '8px 25px', border: 'none'
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="row g-4">
          {filtedCategory?.map((blog) => (
            <div className="col-12" key={blog.id}>
              <div style={{
                display: 'flex',
                backgroundColor: '#161616',
                borderRadius: '20px',
                overflow: 'hidden',
                minHeight: '320px',
                border: '1px solid #222'
              }}>
                
                <div style={{ flex: 1.2, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span style={{ color: '#ff6600', fontSize: '13px', fontWeight: 'bold' }}>{blog.category}</span>
                      <span style={{ color: '#666', fontSize: '12px' }}>{blog.readTime || '8 دقائق للقراءة'}</span>
                    </div>
                    <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '15px' }}>{blog.title}</h2>
                    <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.7' }}>{blog.excerpt}</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Link to={`/blog/${blog.id}`} style={{ color: '#ff6600', textDecoration: 'none', fontWeight: 'bold' }}>
                      اقرأ المقال ←
                    </Link>
                    
                    <div className="d-flex align-items-center gap-3">
                      <div className="text-end">
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{blog.author?.name}</div>
                        <div style={{ fontSize: '11px', color: '#666' }}>{blog.date}</div>
                      </div>
                      <img 
                        src={blog.author?.avatar} 
                        alt={blog.author?.name} 
                        style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #333' }} 
                      />
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1, position: 'relative' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', top: '20px', left: '20px', 
                    backgroundColor: '#ffaa00', color: '#000', 
                    padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' 
                  }}>
                    ★ مميز
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}