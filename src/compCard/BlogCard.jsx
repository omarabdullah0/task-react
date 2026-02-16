import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog, fullWidth }) {
  const CardContent = (
    <div className="row g-0 align-items-center h-100">
      
      <div className="col-md-7 p-4 p-lg-5 order-2 order-md-1">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#e67e22' }}>
            {blog.category}
          </span>
          <small className="text-secondary">
             <i className="far fa-clock me-1"></i> {blog.readTime || '5'} دقائق للقراءة
          </small>
        </div>

        <h2 className={`fw-bold text-white ${fullWidth ? "display-5" : "h2 mb-3"}`}>
          {blog.title}
        </h2>
        
        <p className="text-secondary mb-4 leading-relaxed" style={{ fontSize: '1.1rem' }}>
          {fullWidth ? blog.content : `${blog.content.substring(0, 150)}...`}
        </p>
        
        <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex align-items-center gap-2">
                <img src={blog.authorImg || "https://via.placeholder.com/40"} alt="" className="rounded-circle" style={{width: '40px', height: '40px', objectFit: 'cover'}} />
                <div>
                   <p className="m-0 text-white small fw-bold">{blog.authorName || "سالم أحمد"}</p>
                   <small className="text-muted" style={{fontSize: '0.7rem'}}>{blog.date || "15 يناير 2026"}</small>
                </div>
            </div>
            
            {!fullWidth && (
                <span className="text-warning fw-bold text-decoration-none">
                    اقرأ المقال <i className="fas fa-arrow-left ms-1"></i>
                </span>
            )}
        </div>
      </div>

      <div className="col-md-5 order-1 order-md-2 h-100">
        <img 
          src={blog.image} 
          className="img-fluid w-100 h-100" 
          style={{ objectFit: "cover", minHeight: fullWidth ? "400px" : "300px" }} 
          alt={blog.title} 
        />
      </div>
    </div>
  );

  return (
    <div 
      className={`overflow-hidden ${fullWidth ? "" : "card shadow-lg"}`}
      style={{ 
        backgroundColor: '#1a1a1a', 
        borderRadius: fullWidth ? '0' : '25px',
        border: 'none',
        transition: 'transform 0.3s ease'
      }}
    >
      {!fullWidth ? (
        <Link to={`/blogs/${blog.slug}`} className="text-decoration-none">
          {CardContent}
        </Link>
      ) : (
        <div className="container py-4">
            {CardContent}
        </div>
      )}
    </div>
  );
}