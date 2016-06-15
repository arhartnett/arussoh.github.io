import React from 'react';
import classNames from 'classnames';

class Link extends React.Component {
  render() {
    let bgImage = {
      backgroundImage : 'url(' + this.props.bgimgSrc + ")"
    };
    return (
      <a className="link" style={bgImage} href={this.props.link}>
        <h3>
          {this.props.language}
        </h3>
      </a>
    );
  }
};

export default Link;
