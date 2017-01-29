import React from 'react';
import FilmRow from '../FilmRow/FilmRow';

class FilmList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((film, index) => {
            return <FilmRow key={index}
                            poster={ film.Poster }
                            title={ film.Title }
                            plot={ film.Plot } />
          })
        }
      </ul>
    )
  }
}

export default FilmList;