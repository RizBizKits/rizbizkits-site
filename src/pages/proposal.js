import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import "../source/style.css"

export default () => (
    <div class="outer-most-prop">

        <header class="header">
            <div class="header__container container">
                <h1 class="header__title">rizbizkits</h1>
                <h3 class="header__subtitle">^oh my, that rhymes! first impression? <span>✅</span></h3>
            </div>
        </header>


        <div class="intro-spread">
            <div class="intro-spread__container container">
                <div class="intro-spread__q"></div>
                {/* <div class="intro-spread__title">WHY ME?</div> */}
                <img class="backshot-img" src={'/backshot.jpg'}/>
            </div>
        </div>
    </div>
)