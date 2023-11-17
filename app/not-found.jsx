import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>Il y a un problème</h2>
      <p>{`La page n'a pas été trouvée`}</p>
      <p>
        Retour au <Link href='/'>Dashboard</Link>
      </p>
    </main>
  );
}
