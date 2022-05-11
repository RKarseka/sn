import styles from './friend.module.scss';
import imgAvatarMini from '../../assets/img/user.jpg';
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { getRandomInt } from '../../utils';

export const Friend = ({
  id,
  name,
  status,
  photos: { small, large },
  followed,
  isAuth,
}) => {
  const hugeStatus = status?.length > 30;
  const imgAvatarMini = `./public/users/user-${getRandomInt(1, 21)}.svg`;

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          className={small ? 'mb-2' : 'mt-2'}
          src={small || imgAvatarMini}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-muted">id: {id}</Card.Text>

          <OverlayTrigger
            trigger={hugeStatus ? ['hover', 'click', 'focus'] : 'focus'}
            overlay={
              <Popover id="tooltip">
                <Popover.Body>{status}</Popover.Body>
              </Popover>
            }
          >
            <span className="d-inline-block">
              {hugeStatus ? `${status.slice(0, 28)}...` : status}
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
