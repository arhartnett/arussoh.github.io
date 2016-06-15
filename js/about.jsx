import React from 'react';
import Blurb from './blurb.jsx';

class About extends React.Component {
  render() {
    return (
      <div className="content-block">
        <div className='message big'>
          <p>
            <img className='right' src='../img/headshot_sq.png'></img>
            Hi, I'm Andrew. I grew up on a farm in upstate New York, and I currently work at a startup in the big city. I love theater, cycling, and American history.
          </p>
        </div>
        <h2>School</h2>
        <Blurb name="Princeton University"
               years="Class of 2018"
               imgSrc="../img/princeton.png">
          <p>
            I'm a rising junior concentrating in the Woodrow Wilson School of Public and International Affairs. I'm also getting certificates in Computer Science and Creative Writing.
          </p>
          <p>
            Outside of class, I write for the Princeton Triangle Club, a musical and sketch comedy group. I'm a member of the Princeton Debate Panel, and was director of our high school debate tournament. I also give tours for the admissions office.
          </p>
        </Blurb>
        <Blurb name="Cobleskill Richmondville"
               years="Class of 2014"
               imgSrc="../img/cr.png">
          <p>
            In high school I was the concert master of the symphonic orchestra (on the violin) and also played drums in the band. I competed in Odyssey of the Mind for 9 years, leading up to my team's third place finish at the New York State finals my senior year. I also ran cross country and track and field. I spent my summers as a tour guide at Howe Caverns.
          </p>
        </Blurb>
      </div>
    );
  }
};

export default About;
