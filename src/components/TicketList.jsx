import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onAdd }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default TicketList;
