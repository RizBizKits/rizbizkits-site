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

// export default ({ children }) => (


export default () => (
  <body>
    {/* <div class="header" style={{ minHeight: `20rem` }}> */}

    <div class="header">
		<header style={{ margin: `0 auto`, maxWidth:`800px`, padding: `1rem 1rem`}}>
			<h1>rizbizkitz</h1>
			<img src={'rizbizkits-logo.png'} class="logo"/>
		</header>
    </div>

	<div class="wrapper subtitle purple-bg" style={{ margin: `0 auto`, maxWidth:`800px`}}> 
		<h2>sup? <span class="highlight">I'm riz.</span><br/>web designin' + web devin'.</h2>
		<ul style={{ listStyle: `none` }}>
			<li><a href="#grad">final year comp sci student at NTU 👈</a></li>
			<li><a href="#jh">on a summer <span class="highlight">design internship</span> at JH 👈</a></li>
			<li><a href="#cursor">previously on placement at Cursor 👈 </a></li>
			<li><a href="#pfnotts">co-founder of Project Function 👈 </a></li>
			<li><a href="#speaking">public speaker and poet 👈</a></li>
		</ul>
	</div>

	<div class="wrapper purple-bg" style={{ margin: `0 auto`, maxWidth:`800px`, padding: `0`}}> 
		

		<div id="jh" class="panel jh">
			<div class="jh-brand">
				<h2><span class="highlight">JH and a Design-fueled Summer</span></h2>
				<h3>I have the privilege of joining Notts-based eCommerce agency, JH, for an exciting
					3 months, working under mentorship of the Design Team. As a first foray into a full designer role,
					I am humbled by the opportunity and very, very excited to, in the golden words of #TeamJH, make waves.
				</h3>
			</div>
		</div>

		<div id="pfnotts" class="panel pfnotts">
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

		<div id="cursor" class="panel cursor">
			<div class="cursor-brand">
				<h2><span class="highlight">The time and experience at Cursor</span></h2>
				<h3>For my placement year as part of my degree, I chose to work at Cursor
					as a Junior Web Designer/Developer in Lincoln for a year, commuting from Notts.
					This was a 
					
				</h3>
			</div>
		</div>

		<div id="grad" class="panel grad black-bg">
			<h2>Days to Graduation:</h2>
			<h3>26/10/2020 minus Today.</h3>
			<h3 class="hashtag text-right">#Math 🎓</h3>
		</div>
	</div>


	<div id="speaking" class="white-bg full-banner">

		<div class="wrapper" style={{ margin: `0 auto`, maxWidth:`800px`, paddingTop: `15px` }}> 

			<img src={'riz-banner.jpg'} class="riz"/>
			<div  class="panel extra">
				<h2>Speakin' + Poetin'</h2>
				<h3>After a 5-min Lightning Talk at <a href="https://www.technottingham.com">Tech Nottingham</a> in 2016 on
					Club Penguin, I've gradually
					built-up my Speaking experience. You might have found me infront of the
					Women in Tech Nottingham audience (reading a poem penned for the 
					occasion <a href="https://www.technottingham.com/news/2018/7/31/a-poem-by-rizwana">once</a> and 
					then <a href="https://www.instagram.com/p/BuwaHL_HV0a/">again</a>), 
					or opening the brilliant <a href="https://newadventuresconf.com">New
					Adventures 2019</a> conference with a poem on 
					<a href="https://newadventuresconf.com/2019/NA2019-mag.pdf"> Wonder</a>, 
					overlooking a crowd that could fill
					multiple buses. </h3>
					<br/>
					<h3>All in all, Speaking gives me great joy especially
						when I can bring together my poetry
						and wit, to form talks that people can laugh or relate to.
						If that sounds like something your meetup/conference/stage
						could do with, I'm happy to discuss over pretend coffee and
						an email.
					</h3>
					<br/>
		
			</div>

			<div class="panel yellow-bg" style={{ padding: `1rem 1rem`, marginBottom: `0`}}>
				<h2 class="m-0 p-0">Upcoming Speaking Deet:</h2>
				<br/>
				<h3 class="m-0 p-0"><strong>July 4th, 2019:</strong>
				<br/>
				<span class="highlight"><a href="https://www.technottingham.com/events/wit-july-2019"> No Time To Spare: Spark, Tinder, Breeze</a></span> for Women In Tech, Nottingham</h3>
			</div>
		</div>
	</div>

  </body>
)