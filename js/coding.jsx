import React from 'react';
import Blurb from './blurb.jsx';
import Card from './card.jsx';

class Coding extends React.Component {
  render() {
    return (
      <div className="content-block">
        <h1>computers</h1>
        <div className='message'>
          I learned Python around age 14, and almost immediately dove into the pyGame library and started making games. I never had video games growing up, so I guess I decided to just make my own. I've more recently fallen in love with modern web, and have a growing appreciation for the power of data analysis.
        </div>
        <h2>jobs people paid me for</h2>
          <Blurb name="TAPD"
                 years="Summer 2016"
                 imgSrc="../img/princeton.png">
            <p>
              I'm currently working as a software intern at TAPD, a startup based in Manhattan. I do a lot of stuff with data.
            </p>
          </Blurb>
          <Blurb name="Whig Clio Webmaster"
                 years="Ongoing"
                 imgSrc="../img/whigclio.png">
                 <p>
                   While I'm not actually paid for this position, I was still "hired" so it fits here. I designed, maintain, and update the website for the American Whig-Cliosophic Society.
                 </p>
          </Blurb>
          <Blurb name="CS Lab TA"
                 imgSrc="../img/labta.png">
                 <p>
                   I help kids debug Java, C and (*gulps*) Assembly code for Princeton's three introductory CS courses.
                 </p>
          </Blurb>
        <h2>Jobs no one paid me for</h2>
          <Blurb name="KPasa"
                 years="2015-2015"
                 imgSrc="../img/kpasa.png">
            <p>
              KPasa is the largest project I've worked on to date. An "event network" for Princeton students, it sought to bridge the gap between student groups (especially performing groups and social clubs) looking to attract more student interest in their performances and events, and students looking for fun things to do on campus. Club-side event creation was easy and anonymous, and user-side interaction with these events was simple. The principle currency of the site was "Hype", a button users could click on events they were excited for. I set the project aside when the Undergraduate Student Government released their own, official version of an app like this.
            </p>
          </Blurb>
          <Blurb name="YourCongress"
                 years="2012-2014"
                 imgSrc="../img/yc.png">
             <p>
               My first experience with web design, YourCongress was a web-scraping and data-presentation site for roll-call votes in the United States Congress.
             </p>
          </Blurb>
          <Blurb name="Calculus: The Game"
                 years="2014"
                 imgSrc="../img/calculus.png">
             <p>
               As a final project for my AP Calculus class, I worked in a team of three to develop a platformer game based around our year in the class. I coded (writing entirely JavaScript using the <a href="http://craftyjs.com/" class="coding">CraftyJS engine</a>), while my team members directed the game's art and general story. This was, curiously, the project during which I gained a real understanding of what object oriented programming meant.
             </p>
          </Blurb>
        <h2>What I know</h2>
          <div className="card-cont">
            Languages:
            <Card language="Python" ratingStrong="true" />
            <Card language="Java" ratingStrong="true" />
            <Card language="R" ratingSolid="true" />
            <Card language="Matlab" ratingSome="true" />
            <Card language="C" ratingSome="True" />
        </div>
        <div className='card-cont'>
          Web:
            <Card language="LESS" ratingStrong="true" />
            <Card language="jQuery" ratingStrong="true" />
            <Card language="React" ratingSolid="true" />
            <Card language="Angular" ratingSome="true" />
            <Card language="Django" ratingSolid="true" />
            <Card language="Rails" ratingSlim="true" />
          </div>
      </div>
    );
  }
};

export default Coding;
