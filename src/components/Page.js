import React from 'react';
import PropTypes from 'prop-types';
import PhotoManager from './PhotoManager';

export class Page extends React.Component {
  onBtnClick = (event) => {
    const year = +event.currentTarget.innerText;
    this.props.getPhotos(year);
  };

  renderButtons = () => {
    // const years = [2020, 2019, 2018, 2017, 2016];
    const { years } = this.props;

    return years.map((item, index) => {
      return (
        <button key={index} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      );
    });
  };

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props;

    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>;
    }

    if (isFetching) {
      return <p>Загрузка...</p>;
    } else {
      return <PhotoManager photos={photos} />;
    }
  };

  render() {
    const { year, photos } = this.props;
    return (
      <div className="ib page">
        <p>{this.renderButtons()}</p>
        <h3>
          {year} год [{photos.length} фотографии]
        </h3>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};
