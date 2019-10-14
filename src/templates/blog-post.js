import React from 'react';
import Helmet from 'react-helmet';

import "../source/blog.css"

export default function Template({
	data
}) {
	const { markdownRemark: post } = data;
	return (

		<div class="outer-most">

			<div class="nav">
				<div class="nav__home">
					<a class="nav__home-link" href="https://rizwanakhan.com/">
						rizbizkits
					</a>
				</div>
			</div>
			
			<div class="blog-post">
				
				
				<div className="blog-post-container">
					
					<Helmet title={`Rizbizkits - ${post.frontmatter.title}`} />
					<div className="blog-post">
						<h1>{post.frontmatter.title}</h1>
						<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
						<a className="back-link" href="/blog">👈 Head back?</a>

					</div>
				</div>
			</div>

		</div>
	);
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;