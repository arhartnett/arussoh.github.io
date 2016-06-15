import React from 'react';
import Link from './link.jsx';

class Contact extends React.Component {
  render() {
    return (
      <div className='content-block' style={{paddingBottom: '30px'}}>
        <h1>Contact</h1>
        <div className='card-cont'>
          <Link large='true'
                bgimgSrc="../img/linkedin.png"
                language="/arhartnett"
                link="www.linkedin.com/in/arhartnett" />
          <Link large='true'
                bgimgSrc="../img/github.png"
                language="/arussoh"
                link="https://github.com/arussoh" />
          <Link large='true'
                bgimgSrc="../img/twitter.png"
                language="@andrew hartnett"
                link="https://twitter.com/AndrewHartnett" />
        </div>
      </div>
    );
  }
};

export default Contact;