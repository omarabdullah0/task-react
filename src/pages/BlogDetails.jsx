import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../data/blogData';
import BlogCard from '../compCard/BlogCard';

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData.posts.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="container mt-5">Post not found!</div>;
  }

  return (
    <div className="container mt-4">
      <BlogCard blog={blog} fullWidth={true} />
    </div>
  )
}