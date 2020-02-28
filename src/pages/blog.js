import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import "../source/blog.css"

// import '../css/index.css'; // add some style if you want!


export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (

	<div class="outer-most">

		<div class="nav">
			<div class="nav__home">
				<a class="nav__home-link" href="https://rizwanakhan.com/">
					rizbizkits
				</a>
			</div>
		</div>

		<div className="blog-posts__container">
		<div class="blog-posts">
			<h1 class="blog-post__title">
			<span class="blog-posts__hightlight">B</span>
			e<span class="blog-posts__hightlight symbol">↸</span><span class="blog-posts__hightlight">o</span>n<span class="blog-posts__hightlight">g</span></h1>
			
			<div class="blog-post__subtitle">
				<p class="blog-post__subtitle-content">
					“Sometimes the right person tells the right story at the right moment, and through a combination of luck and design, a creative expression gains new force.” 
				― Lin-Manuel Miranda
				</p>
			</div>
			
			{posts
			.filter(post => post.node.frontmatter.title.length > 0 && ["Unapologetically, (Hire) Me"].indexOf(post.node.frontmatter.title) === -1 )
			.map(({ node: post }) => {
				return (
				<div className="blog-post-preview" key={post.id}>
					<h1>
					<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
					</h1>
					<h5 class="blog-posts__date">{post.frontmatter.date}</h5>
					<p class="blog-posts__excerpt"><Link to={post.frontmatter.path}>{post.excerpt}</Link></p>
				</div>
				);
			})}
		</div>
		</div>
	</div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
	allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
	  edges {
		node {
		  excerpt(pruneLength: 250)
		  id
		  frontmatter {
			title
			date(formatString: "MMMM DD, YYYY")
			path
		  }
		}
	  }
	}
  }
`;