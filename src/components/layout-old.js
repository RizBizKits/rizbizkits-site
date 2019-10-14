import React from "react"
import { Link } from "gatsby"
import Outer from "./outer"
// import "../source/styles.css"

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]')
}

const ListLink = props => (
	// <li style={{ display: `inline-block`, marginRight: `1rem` }}>

    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
  <body>

    <div class="header" style={{ minHeight: `20rem` }}>
		<header style={{ margin: `0 auto`, maxWidth:`800px`, padding: `1rem 1rem`}}>
			<h1>rizbizkitz</h1>
			<img src={'rizbizkits-logo.png'} class="logo"/>
		</header>
    </div>

	<div class="subtitle" style={{ margin: `0 auto`, maxWidth:`800px`, padding: `1rem 1rem`}}>
		<h2>sup? <span class="highlight">I'm riz.</span><br/>web designin' + web devin'.</h2>
		{/* <h3>final year comp sci student at NTU 👈 <br/>on a summer <span class="highlight">design internship</span> at JH 👈<br/>previously
			on placement at Cursor 👈 <br/>co-founder of Project Function 👈 <br/>public speaker and poet 👈
		</h3> */}
		{/* <ul style={{ listStyle: `none` }}>
			<ListLink to="/">final year comp sci student at NTU 👈 </ListLink>
			<ListLink to="/about/">on a summer <span class="highlight">design internship</span> at JH 👈</ListLink>
			<ListLink to="/contact/">previously on placement at Cursor 👈 </ListLink>
			<ListLink to="/contact/">co-founder of Project Function 👈 </ListLink>
			<ListLink to="/contact/">public speaker and poet 👈</ListLink>
		</ul> */}

		<ul style={{ listStyle: `none` }}>
			<li><a href="#grad">final year comp sci student at NTU 👈</a></li>
			<li><a href="#jh">on a summer <span class="highlight">design internship</span> at JH 👈</a></li>
			<li><a href="#cursor">previously on placement at Cursor 👈 </a></li>
			<li><a href="#">co-founder of Project Function 👈 </a></li>
			<li><a href="#">public speaker and poet 👈</a></li>
		</ul>

	</div>



	<div id="jh" class="jh" style={{ margin: `30px auto 0`, maxWidth:`800px`, padding: `1rem 1rem`}}>
		<div class="jh-brand">
			<h2><span class="highlight">JH and a Design-fueled Summer</span></h2>
			<h3>I have the privilege of joining Notts-based eCommerce agency, JH, for an exciting
				3 months, working in mentorship of the Design Team. As a first foray into a full designer role,
				my full thoughts on this are unravelled here.
			</h3>
		</div>
	</div>

	<div id="pfnotts" class="pfnotts" style={{ margin: `30px auto 0`, maxWidth:`800px`, padding: `1rem 1rem`}}>
		<div class="pfnotts-brand">
			<h2><span class="highlight">Origins: Co-founding Project Function</span></h2>
			<h3>Project Function is a platform for providing free web developemt 
				courses to under-represented folks, since its inception in Jan, 2019.
				As a co-founder of this initiative, I am proud of laying the groundwork
				in creating a welcoming and learning environment.
			</h3>
			<br/><br/>
			<a href="https://projectfunction.io">Visit the #PFSite.</a>
		</div>
	</div>

	<div id="cursor" class="cursor" style={{ margin: `30px auto 0`, maxWidth:`800px`, padding: `1rem 1rem`}}>
		<div class="cursor-brand">
			<h2><span class="highlight">The time and experience at Cursor</span></h2>

			<h3>For my placement year as part of my degree, I chose to work at Cursor
				as a Junior Web Designer/Developer in Lincoln for a year, commuting from Notts.
				I've aquired and polished skills, new and old. Read my attempt at summarising my wonderful
				time at Cursor, here.
			</h3>
		</div>
	</div>

	<div id="grad" class="grad" style={{ margin: `30px auto 0`, maxWidth:`800px`, padding: `1rem 1rem`}}>
		<h2>Days to Graduation:</h2>
		<h3>26/10/2020 minus Today.</h3>
		<h3 class="hashtag text-right">#Math 🎓</h3>
	</div>

    <div class="outer" style={{ minHeight: `20rem` }}>
		<img src={'riz-4.png'} class="riz"/>
	</div>

	<div id="grad" class="grad" style={{ margin: `30px auto 0`, maxWidth:`800px`, padding: `1rem 1rem`}}>
		<h3>26/10/2020 minus Today.</h3>
		<h3>Speaking + Poetry bits</h3>
	</div>

	{/* {children} */}

    {/* <div class="footer" style={{ marginBottom: `1.5rem`, minHeight: `20rem` }}>
		<footer style={{ margin: `0 auto`, maxWidth:`800px`, padding: `1rem 1rem`}}>
			<ul style={{ listStyle: `none` }}>
				<ListLink to="/">Twitter</ListLink>
				<ListLink to="/about/">Instagram</ListLink>
				<ListLink to="/contact/">LinkedIn</ListLink>
			</ul>
		</footer>
    </div> */}



	{/* <footer id="footer" class="footer" style={{ margin: `30px auto 0`, maxWidth:`800px`, padding: `1rem 1rem`}}> */}
    {/* <footer style={{ marginBottom: `1.5rem`, minHeight: `20rem` }}> */}
		{/* <ul style={{ listStyle: `none` }}>
			<ListLink to="/">Twitter</ListLink>
			<ListLink to="/about/">Instagram</ListLink>
			<ListLink to="/contact/">LinkedIn</ListLink>
		</ul>
    </footer> */}


    
  </body>
)