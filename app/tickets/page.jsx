import TicketList from '@/app/tickets/TicketList';

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Tickets ouverts.</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
