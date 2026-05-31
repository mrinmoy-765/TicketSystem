import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onAdd }) => {
  return (
    <>
      <h1 className="text-xl font-bold text-gray-600 mb-3">Customer Tickets</h1>
      <div className="grid grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
};

export default TicketList;
