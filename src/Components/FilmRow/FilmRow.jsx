import React from 'react';
import FilmImage from '../FilmImage/FilmImage';

class FilmRow extends React.Component {
  render() {
    return (
      <li>
        <FilmImage poster={this.props.poster} />
        <div>
          <h4>{this.props.title}</h4>
          <p>{this.props.plot}</p>
        </div>
      </li>
    )
  }
}

export default FilmRow;