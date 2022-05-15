import { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { setAuthUserData, setUserAuth } from '../../redux/app-reducer';
import { handeleAPIRequest, loadData } from '../../utils/loadData';

import { Layout } from '.';

export const LayoutAPI = ({ isAuth, me, setUserAuth, setAuthUserData }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const setAuth = ({ resultCode, data }) => {
      setUserAuth(!resultCode);
      if (!resultCode)
        handeleAPIRequest('get', `/profile/${data.id}`, (dataAPI) =>
          setAuthUserData({ ...me, ...data, ...dataAPI })
        );
    };
    handeleAPIRequest('get', '/auth/me', setAuth);
  }, []);
  return <Layout isAuth={isAuth} me={me} />;
};

const mapStateToProps = ({ app }) => app;

export const LayoutC = connect(mapStateToProps, {
  setAuthUserData,
  setUserAuth,
})(LayoutAPI);
