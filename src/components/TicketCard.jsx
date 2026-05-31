const TicketCard = ({ ticket, onAdd }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="font-bold">{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Customer: {ticket.customer}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>

      <button
        onClick={() => onAdd(ticket)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default TicketCard;
