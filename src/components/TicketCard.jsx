const TicketCard = ({ ticket, onAdd }) => {
  const style1 = "badge badge-soft badge-success";
  const style2 = "badge badge-outline badge-warning";
  const statusClass = ticket.status === "open" ? style1 : style2;

  const value1 = "text-red-500";
  const value2 = "text-warning";
  const value3 = "text-green-500";
  const defaultValue = "text-black";

  const priorityStyle =
    ticket.priority === "High Priority"
      ? value1
      : ticket.priority === "Medium Priority"
        ? value2
        : ticket.priority === "Low Priority"
          ? value3
          : defaultValue;

  return (
    <div
      className="card w-auto bg-base-100 card-xs shadow-sm cursor-pointer"
      onClick={() => onAdd(ticket)}
    >
      <div className="card-body">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{ticket.title}</span>
          <span className={statusClass}>{ticket.status}</span>
        </div>
        <div className="text-lg text-gray-500">{ticket.description}</div>
        <div className="flex justify-between items-center text-gray-500 text-md font-semibold">
          <div className="space-x-1.5">
            <span>#{ticket.id}</span>
            <span className={priorityStyle}>{ticket.priority}</span>
          </div>
          <div className="space-x-2.5">
            <span>{ticket.createdAt}</span>
            <span> {ticket.customer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
