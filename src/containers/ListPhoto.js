import React from 'react';
import PropTypes from 'prop-types';

const ListPhoto = ({ photos, openModal }) => {
  return photos.map((photo) => (
    <div key={photo.id} className="photo">
      <img
        src={photo.sizes[2].url}
        alt="thumbnail vk"
        onClick={() => openModal(photo.sizes[4].url)}
      />

      <p>{photo.likes.count} ❤</p>
    </div>
  ));
};

export default ListPhoto;

ListPhoto.propTypes = {
  photos: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
