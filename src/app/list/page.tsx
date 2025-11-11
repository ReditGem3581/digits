import { getServerSession } from 'next-auth';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of contacts for the logged in user. */
const ListPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as { user: { email: string; id: string; randomKey: string } } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const contacts = await prisma.contact.findMany({ where: { owner } });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>Contacts</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
              {contacts.map((c) => (
                <Col key={c.id}>
                  <Card>
                    <Card.Img variant="top" src={c.image} />
                    <Card.Body>
                      <Card.Title>{`${c.firstName} ${c.lastName}`}</Card.Title>
                      <Card.Text>{c.address}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
