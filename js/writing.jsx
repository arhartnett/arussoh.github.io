import React from 'react';
import Link from './link.jsx';

class Writing extends React.Component {
  render() {
    return (
      <div className='content-block'>
        <h1>Writing</h1>
        <div className='message'>
          I started writing in earnest around the age of 12, with a Brother electric type writer set on my mom's old desk. I've taken two introductory fiction classes at Princeton, with Boris Fishman, and this fall I'm taking screenwriting with  Christina Lazaridi. I'm also a proud member of the Triangle Club's writer workshop, a team of 12 that creates a brand new, full length musical comedy every fall, in addition to a low budget sketch show each spring.
        </div>
        <h2>Short Stories</h2>
        <div className='card-cont'>
          <Link bgimgSrc='../img/forgettable.png'
                language='Forgettable'
                link='writing/forgettable.html' />
          <Link bgimgSrc='../img/hair.png'
                language='Hair'
                link='writing/hair.html' />
        </div>
        <h2>Comedy Sketches</h2>
          <Link bgimgSrc='../img/hardestpart.png'
                language="The Hardest Part of Heaven"
                link="https://www.youtube.com/watch?v=mp6Nwtc4fyc&index=14&list=PLD0Xl55ohYOrQP8BoKt8v1NmOtL-Dpa23" />
      </div>
    )
  }
};

export default Writing;
