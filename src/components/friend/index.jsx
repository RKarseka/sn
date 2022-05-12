import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { getRandomInt } from '../../utils';

export const Friend = ({
  id,
  name,
  status,
  // photos: { small, large },
  small, //mockapi

  followed,
  isAuth,
}) => {
  const hugeStatusLength = 20;
  const isHugeStatus = status?.length > hugeStatusLength;
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
