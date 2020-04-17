import React from "react"
import Test from "../components/test"
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import "../source/joy.css"


export default () => (
<div>
    <div class="nav">
        <div class="nav__home">
            <a class="nav__home-link" href="https://rizwanakhan.com/">
                rizbizkits
            </a>
        </div>
    </div>

<div class="joy-outer">



    <div class="joy-inner">

        <div class="joy-i">
            <div class="joy-content">
                <p class="joy-date"><span class="font-yellow">17.</span> <span class="font-purple">04.</span> <span class="font-clear">2020</span></p>
                <p>
                <strong>Today</strong> - An all too common #ThirdCultureAdult moment? Finding your childhood best friend on your timeline, thus making your day from faraway Canada!
                </p>
                <p>(Happy for even the bittersweet joy.)</p>
            </div>

            <div class="joy-image">

                <img src="/noj/nugget-1.jpg" class="joy-image-asset"/>
                <a alt="Finding Joy" href="https://rizwanakhan.com/finding-joy"><p class="joy-small-text">Confused? Allow me to explain.</p></a>

            </div>
        </div>

        <h1 class="joy-inner__title">
            <span class="joy-inner__title--line">Nugget</span> 
             <span class="joy-inner__title--subtle">of</span> 
            <span class="joy-inner__title--big">Joy</span>
        </h1>
    </div>



</div>
</div>

)