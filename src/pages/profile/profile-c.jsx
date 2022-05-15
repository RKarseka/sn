import { useEffect, useState } from 'react';
import { Profile } from '.';

import { connect } from 'react-redux';
import { loadData } from '../../utils/loadData';
import { SpinnerComp } from '../../components/spinner';
import { useParams } from 'react-router-dom';
import { getRandomAvatar } from '../../utils';

const ProfileAPI = () => {
  const { userId } = useParams(2);

  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const url = `/profile/${userId}`;

  useEffect(() => {
    loadData(setIsLoading, setProfile, url, { withCredentials: true });
  }, [userId]);

  if (!profile.photos?.large)
    setProfile((prev) => ({
      ...prev,
      photos: { large: `${getRandomAvatar()}` },
    }));

  return (
    <section className="wrapper">
      {isLoading ? <SpinnerComp /> : <Profile profile={profile} />}
    </section>
  );
};

const mapStateToProps = (state) => ({ state });

export const ProfileC = connect(mapStateToProps, {})(ProfileAPI);
