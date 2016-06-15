import React from 'react';
import classNames from 'classnames';

class Card extends React.Component {
  render() {
    let arcEndClasses = classNames('rating', 'rating-end',
                                   {'rating-strong': this.props.ratingStrong},
                                   {'rating-solid':  this.props.ratingSolid},
                                   {'rating-some':   this.props.ratingSome},
                                   {'rating-slim':   this.props.ratingSlim});
    let arcStartClasses = classNames('rating', 'rating-start',
                                     {'rating-strong': this.props.ratingStrong},
                                     {'rating-solid':  this.props.ratingSolid},
                                     {'rating-some':   this.props.ratingSome},
                                     {'rating-slim':   this.props.ratingSlim});
    return (
      <div className="card">
        <h3>
          {this.props.language}
        </h3>
        <div className={arcStartClasses}></div>
        <div className={arcEndClasses}></div>
      </div>
    );
  }
};

export default Card;
