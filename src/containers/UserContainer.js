import React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin } from '../actions/UserActions';
import { getPhotos } from '../actions/PageActions';
import { getCurrentYear } from '../util/date';

const UserContainer = ({ handleLogin, getPhotos, user }) => {
  handleLogin = () => {
    const successCallback = () => {
      const year = getCurrentYear();
      getPhotos(year);
    };

    handleLogin(successCallback);
  };

  return (
    <User
      name={user.name}
      error={user.error}
      isFetching={user.isFetching}
      handleLogin={handleLogin}
    />
  );
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (successCallback) => dispatch(handleLogin(successCallback)),
    getPhotos: (year) => dispatch(getPhotos(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
