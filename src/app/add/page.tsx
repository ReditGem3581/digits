import Link from 'next/link';

const AddPage = async () => (
  <main>
    <p>
      The Add page has been removed as part of the cleanup. Please use the
    </p>
    <p>
      <Link href="/list">List Contacts</Link>
      {' '}
      page.
    </p>
  </main>
);

export default AddPage;
