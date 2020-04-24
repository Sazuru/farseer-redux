import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { getCurrentYear, LAST_5_YEARS } from '../util/date';

const PageContainer = ({ page, getPhotos }) => {
  const years = () =>
    Array.from({ length: LAST_5_YEARS }, (el, i) => getCurrentYear() - i);

  return (
    <Page
      photos={page.photos}
      year={page.year}
      isFetching={page.isFetching}
      error={page.error}
      getPhotos={getPhotos}
      years={years()}
    />
  );
};

const mapStateToProps = (store) => {
  return {
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: (year) => dispatch(getPhotos(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
