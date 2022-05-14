import { Card, Image, ListGroup } from 'react-bootstrap';
import styles from './profile.module.scss';

export const Profile = ({
  profile: {
    userId,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
    photos,
  },
}) => {
  const contactsArr = [];

  for (const key in contacts) {
    contactsArr.push({ key, isPresent: contacts[key] });
  }
  return (
    <section className={styles.wrapper}>
      <Image
        fluid
        rounded
        className={styles.photo}
        src={photos?.large}
        alt="user photo"
        width={250}
      />

      <Card border="secondary" className="row g-0">
        <Card.Header>Status</Card.Header>
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {!lookingForAJob}
          </Card.Subtitle>
          <Card.Text>{lookingForAJobDescription}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          {contactsArr.map(
            ({ key, isPresent }) =>
              isPresent && (
                <ListGroup.Item
                  key={key}
                  action
                  variant="light"
                >{`${key}: ${isPresent}`}</ListGroup.Item>
              )
          )}
        </ListGroup>
        <Card.Footer>2 days ago</Card.Footer>
      </Card>
    </section>
  );
};
