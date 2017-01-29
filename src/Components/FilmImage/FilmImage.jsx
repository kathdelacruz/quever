import React from 'react';

class FilmImage extends React.Component {
	render() {
		return (
      <figure>
        <img width="64px" src={this.props.poster} />
      </figure>
    )
	}
}

export default FilmImage;