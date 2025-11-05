import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import ContactCard from '@/components/ContactCard';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of contacts for the logged-in user */
const ListPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session as { user: { email: string; id: string; randomKey: string } } | null);
  const owner = (session && session.user && session.user.email) || '';
  const contacts = await prisma.contact.findMany({ where: { owner } }) as any[];

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center">Contacts</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
              {contacts.map((c) => (
                <Col key={`Contact-${c.id}`}>
                  <ContactCard
                    contact={{
                      id: c.id,
                      firstName: c.firstName,
                      lastName: c.lastName,
                      address: c.address,
                      image: c.image,
                      description: c.description,
                      owner: c.owner,
                    }}
                  />
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
