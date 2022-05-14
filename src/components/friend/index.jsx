import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { getRandomAvatar } from '../../utils';

const FriendPhoto = ({ to, src }) => {
  return (
    <NavLink to={to}>
      <img src={src} alt="frien photo" style={{ width: '100%' }} />
    </NavLink>
  );
};

export const Friend = ({
  id,
  name,
  status,
  photos: { small, large },
  // small, //mockapi

  followed,
  isAuth,
}) => {
  const hugeStatusLength = 20;
  const isHugeStatus = status?.length > hugeStatusLength;

  return (
    <>
      <Card>
        <Card.Img
          as={FriendPhoto}
          to={`/profile/${id}`}
          variant="top"
          className={small ? 'mb-2' : 'mt-2'}
          src={small || getRandomAvatar()}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-muted">id: {id}</Card.Text>

          <OverlayTrigger
            trigger={isHugeStatus ? ['hover', 'click', 'focus'] : 'focus'}
            overlay={
              <Popover id="tooltip">
                <Popover.Body>{status}</Popover.Body>
              </Popover>
            }
          >
            <span className="d-inline-block">
              {isHugeStatus
                ? `${status.slice(0, hugeStatusLength - 2)}...`
                : status}
            </span>
          </OverlayTrigger>
        </Card.Body>
        <Card.Footer>
          <Button
            disabled={!isAuth}
            variant={followed ? 'secondary' : 'success'}
          >
            {followed ? 'unfollow' : 'follow'}
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
