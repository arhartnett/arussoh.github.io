import React from 'react';
import classNames from 'classnames';

class Blurb extends React.Component{
  constructor() {
    super();
    this.state = {
      expanded: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    if (this.state.expanded) this.contract();
    else this.expand();
  }
  expand() {
    this.setState({expanded: true});
    console.log("expand");
  }
  contract() {
    this.setState({expanded: false});
    console.log("contract");
  }
  render() {
    let classes = classNames('blurb', {'expand': this.state.expanded});
    return (
      <div className={classes}>
        <div className="headline" onClick={this.toggle}>
          <h3>
            <img src={this.props.imgSrc} className='icon-small'></img>
            {this.props.name}
            <small>
              {this.props.years}
            </small>
          </h3>
        </div>
        <div className="details">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Blurb;
