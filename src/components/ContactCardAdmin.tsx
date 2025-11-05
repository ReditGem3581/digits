/* eslint-disable react/jsx-one-expression-per-line, react/prop-types */

'use client';

import { Card, Image } from 'react-bootstrap';
import type { Contact } from '@/lib/validationSchemas';

interface Props {
  contact: Contact & { owner?: string };
}

const ContactCardAdmin: React.FC<Props> = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image
        src={contact.image}
        width={75}
        height={75}
        roundedCircle
        alt=""
      />
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {contact.firstName}
        {' '}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {contact.address}
      </Card.Subtitle>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;
