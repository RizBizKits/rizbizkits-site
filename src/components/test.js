import React from "react"
import Test from "../components/test"
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import "../source/style.css"


if (typeof window !== "undefined") {
	require("smooth-scroll")('a[href*="#"]')
}

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)



export default () => (

    <div class="new">
        <header class="header">
            <div class="header__container container">
                <h1 class="header__title">rizbizkits</h1>
                <h3 class="header__subtitle">^oh my, that rhymes! first impression? <span>✅</span></h3>
            </div>
        </header>

        <div class="intro">
            <div class="intro__container container">
            
                <div class="intro__list">
                    <img src={'rizbizkits-logo.png'} class="intro__list--logo"/>

                    <div class="test">

                        <h2 class="intro__heading">sup? i'm riz. <br/> designin' + web devin'</h2>
                        <ul class="intro__list-outer">
                            <li class="intro__list--item">👉 final year comp sci student at NTU</li>
                            <li class="intro__list--item">👉 on a summer design internship at JH</li>
                            <li class="intro__list--item">👉 previously on placement at Cursor</li>
                            <li class="intro__list--item">👉 co-founder of Project Function</li>
                            <li class="intro__list--item">👉 public speaker + poet + podcaster</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div> 

        <div class="news">
            <div class="news__container">
                <div class="news__wrapper">

                    <p class="news__title underline">a (short) intermission:</p>

                    <div class="news__content">
                        <p>i’m currently on the look out for a part-time design or front-end dev role in Nottingham (or remote), starting Mid-Oct to take up alongside my final year in uni. 
                        <br/>
                        <span class="news__hashtags slant">#PartTimerRiz #LesDoDis  </span>
                        <br/>
                        <br/>
                        <br/>
                        Please get in contact if <br/>you've got something suitable.
                        <br/>
                        <a href="mailto:rizwana.akmal@hotmail.com" target="_blank" class="news__button--email news__button">Email Riz</a>
                        <a href="https://twitter.com/messages/compose?recipient_id=800085538954878976" target="_blank" class="news__button--dm news__button">Nah, DM Riz</a>
                        
                    
                        <br/>
                        <br/>
                     
                        </p>  
                    </div>
                    
                 

                    <div class="news__deets">
                        <span class="news__deets--email">

                        <a href="https://twitter.com/rizbizkits" target="_blank">@rizbizkits  </a>//<a href="mailto:rizwana.akmal@hotmail.com" target="_blank">  rizwana.akmal@hotmail.com</a>
                    

                        </span>

                         
                    </div>
                </div>
            </div>
        </div>

        <div class="trio-intro">
            <div class="trio__container container">
                <h2 class="trio__intro--title">
                    time now for a <br/>
                    three-parter
                    opening. <br/><span>let’s get 
                    acquainted, <br/> shall we?</span>
                </h2>
                <div class="trio__into-arrow">
                    <i class="arrow down i-one"></i>
                    <br/>
                    <i class="arrow down i-two"></i>
                    <br/>
                    <i class="arrow down i-three"></i>
                    <br/>
                    <i class="arrow down i-four"></i>
                    <br/>
                    <i class="arrow down i-five"></i>
                </div>
            </div>
        </div>

        <div class="werds">
            <div class="werds__container container">

                <div class="werds__spread--outer">
                    <div class="werds__spread">
                        <img class="werds__spread--img" src={'/spreads/werds_spread.jpg'}/>
                    
                        <div class="werds__lyric">
                            <div class="werds__lyric--content">
                                <p class="werds__lyric--content-highlight">“I’m a diamond in the rough, a shiny piece of coal</p>
                                <p class="werds__lyric--content-highlight">
                                Tryin’ to reach my goal, my power of speech: unimpeachable”
                                </p>
                                <p class="ref">- Hamilton, My Shot </p>
                            </div>
                        </div>
                    </div>
                </div>
           
                <div class="werds__content--wrapper">
                    <div class="werds__liner">
                        WERDS
                    </div>

                    <div class="werds__content">
                        <p>
                        After a 5-min Lightning Talk at <a href="https://www.technottingham.com">Tech Nottingham</a> in 2016 on Club Penguin, I've gradually built-up my Speaking experience. You might have found me infront of the Women in Tech Nottingham audience (reading a poem penned for the occasion <a href="https://www.technottingham.com/news/2018/7/31/a-poem-by-rizwana">once</a> and then <a href="https://www.instagram.com/p/BuwaHL_HV0a/">again</a>), or opening the brilliant <a href="https://newadventuresconf.com">New Adventures 2019</a> conference with a poem on <a href="https://newadventuresconf.com/2019/NA2019-mag.pdf">Wonder</a>, overlooking a crowd that could fill multiple buses (mind=blown!).
                        <br/>
                        <br/>
                        All in all, Speaking gives me great joy especially when I can bring together my <a href="https://www.instagram.com/tinkererofwords/">poetry</a> and wit, to form talks that people can laugh or relate to. If that sounds like something your meetup/conference/stage could do with, I'm happy to discuss over pretend coffee and an <a href="mailto:rizwana.akmal@hotmail.com">email</a>.
                        </p>
                    </div>

                    <div class="werds__deets">
                        <div class="werds__deets--title">Prev Speaking Deet(s):</div>
                        <br/>
                        <p class="werds__deets--content">✩  July 4th, 2019: 
                            <a href="https://www.technottingham.com/events/wit-july-2019">
                                <span class="highlight">    No Time To Spare: Spark, Tinder, Breeze </span>
                                <span class="reset">@</span> Women In Tech, Nottingham
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="werk">
            <div class="werk__container container">

                <div class="werk__spread--outer">
                    <div class="werk__spread">
                        <img class="werk__spread--img" src={'/spreads/werk_spread.jpg'}/>
                    
                        <div class="werk__lyric">
                            <div class="werk__lyric--content">
                                <p class="werk__lyric--content-highlight">
                                “We’re finally on the field, we’ve had quite a run.
                                </p>
                             
                                <p class="werk__lyric--content-highlight">
                                Immigrants: we get the job done.”
                                </p>
                                <p class="ref">- Hamilton, Yorktown</p>
                            </div>
                        </div>
                    </div>
                </div>
           
                <div class="werk__content--wrapper">
                    <div class="werk__liner">
                        WERK
                        
                    </div>

                    <div class="werk__content">
                        <p>
                        <strong>To put simply: I can design and code.</strong>
                        <br/>I can’t, however, claim to be a unicorn IRL. 🦄</p>
                        I’ve strived to benefit from the learnings of actually working in the Industry. Thus, the past (nearly) 15 months of combined experience at two agencies, <strong><a href="https://cursor.co.uk/">Cursor</a></strong> and <strong><a href="https://wearejh.com">JH</a></strong>, have been crucial for my self-development, in every regard.                       
                        <br/>
                        <p>
                            <span class="stylize_i">“[Riz is] a fantastically talented woman set for great things.”</span>
                            <br/>
                            -Daniel Westlake, MD Cursor
                        </p>
                        <br/>
                       
                        <p>BTW, as a third-culture adult, I’ve grown up greatly valuing diverse work environments and will always stand for, and behind, spaces where ‘people whom may be seen as outsiders are given centre stage’. That's the crucial bit.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>        
        
        <div class="whoopee">
            <div class="whoopee__container container">

                <div class="whoopee__spread--outer">
                    <div class="whoopee__spread">
                        <img class="whoopee__spread--img" src={'/spreads/whoopee_spread.jpg'}/>
                    
                        <div class="whoopee__lyric">
                            <div class="whoopee__lyric--content">
                                <p class="whoopee__lyric--content-highlight">“Look around, look around at how lucky we are</p>
                               
                                <p class="whoopee__lyric--content-highlight">to be alive right now”</p>
                                <p class="ref">- Hamilton, That Would Be Enough</p>
                            </div>

                        </div>
                    </div>
                </div>
           
                <div class="whoopee__content--wrapper">
                    <div class="whoopee__liner">
                        WHOOPEE
                    </div>
                    <div class="whoopee__content">
                        <p>
                        You’ll find my chasing after stuff that makes the heart sings on a regular basis.
                        In doing so, I’ve had some great many wonderful experiences. To name but a few:
                        </p>

                        <p>
                           <strong>1.  Co-founding <a href="https://projectfunction.io">Project Function</a></strong> - from a notion to reality.  Currently, in its 3rd cohort of
                           students, #PFNotts has go from strength to strength from the very beginning.
                        </p>

                        <p>
                           <strong>2.  Attending Tech Community events</strong> - More than just the free pizza, these events
                           have graciously provided an invaluable sense of Community and Comradery in the Tech world. To be 
                           able to attend them has been a constant source of delight.
                           <br/>
                           <br/>
                           Must-mentions: <a href="https://twitter.com/technottingham" target="_blank">@TechNotts</a>, <a href="https://twitter.com/WiT_Notts" target="_blank">@WiTNotts</a>, <a href="https://twitter.com/dxnevent" target="_blank">@dxnevent</a>
                        </p>
                       
                        <p>
                           <strong>3.  Rambling on my podcast, <a href="https://pods.slantedpress.com/listen/rss/3">Rizamblings</a></strong> - After THAT penguin Lightning talk, my
                           ramblings have further been amplified through podcasting (Rizamblings, succinctly defined, as: 'Riz rambles. 
                           That's it that's the description').
                        </p>
                       <p>
                       <br/>
 
                        <br/>
                        <strong>Life’s too short; I try to make the most of every opportunity. </strong>                                               
                        </p>
                    </div>
                </div>
            </div>
        </div> 

        <div class="blog-preview">
            <div class="blog-preview__container">
                <a class="blog-preview__outer" href="/blog" target="_blank">
                    <div class="blog-preview__content">
                    allow me to nudge you towards my
                        <span> humble blog dwellings</span>
                    </div>
                    <div class="blog-preview__arrow">
                        <i class="arrow right i-one"></i>

                        <i class="arrow right i-two"></i>
                    
                        <i class="arrow right i-three"></i>
                        
                        <i class="arrow right i-four"></i>
                    
                        <i class="arrow right i-five"></i>
                    </div>
                </a>
            </div>
        </div> 




        <div class="footer">
            <div class="footer__container container">
                <p class="footer__social">Find me on other places on the internet <br/> <br/>
                
                <a href="https://twitter.com/rizbizkits">Twitter</a> / 
                <a href="mailto:rizwana.akmal@hotmail.com">  Email</a> / 
                <a href="https://linkedin.com/in/riz">  LinkedIn</a></p>  

                <p class="graduation__title">p.s. days to Graduation: 09/06/2020 minus Today! #Math 🎓</p>
    
            </div>
        </div>
        {/* <div class="graduation">
            <div class="graduation__container container">
                <p class="graduation__title">p.s. days to Graduation: 09/06/2020 minus Today. #Math 🎓</p>
                <p class="graduation__date">09/06/2020 minus Today.</p>
         5y6       <p class="graduation__hashtag">#Math 🎓</p>
            </div>
        </div> */}


    </div>
)

