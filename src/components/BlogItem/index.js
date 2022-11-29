// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, publishedDate, description} = blogDetails

  return (
    <li className="list-container">
      <div className="blog-item-container">
        <h1 className="blog-item-heading">{title}</h1>
        <p className="blog-item-paragraph">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
