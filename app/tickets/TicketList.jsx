async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='card my-5'>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            priorité {ticket.priority}
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className='text-center'>{`Il n'y a aucun ticket en cours`}</p>
      )}
    </>
  );
}
