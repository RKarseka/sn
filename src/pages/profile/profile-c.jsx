import { useEffect, useState } from 'react';
import { Profile } from '.';

import { connect } from 'react-redux';
import { handeleAPIRequest } from '../../utils/loadData';
import { SpinnerComp } from '../../components/spinner';
import { useParams } from 'react-router-dom';

const ProfileAPI = ({ me }) => {
  const { userId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const [profile, setProfile] = useState(me);

  useEffect(() => {
    if (profile.id !== +userId) {
      handeleAPIRequest('get', `/profile/${userId}`, setProfile, setIsLoading);
    }
  }, [userId]);

  return (
    <section className="wrapper">
      {isLoading ? <SpinnerComp /> : <Profile profile={profile} />}
    </section>
  );
};

const mapStateToProps = ({ app }) => ({ me: app.me });

export const ProfileC = connect(mapStateToProps, {})(ProfileAPI);
