import Link from 'next/link';

export default async function EditPage() {
  return (
    <main>
      <p>
        The Edit page has been removed as part of the cleanup. Please use the
      </p>
      <p>
        <Link href="/list">List Contacts</Link>
        {' '}
        page.
      </p>
    </main>
  );
}
