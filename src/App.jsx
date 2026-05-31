import "./App.css";

import { useState } from "react";
import ticketsData from "./data/tickets";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";
import Navbar from "./components/Navbar";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Add to In Progress
  const handleAddTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) return;
    else {
      ticket.status = "In Progress";
    }

    setInProgress([...inProgress, ticket]);
    alert("Added to Task Status!");
  };

  // Complete Task
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));

    alert("Task Completed!");
  };

  return (
    <div className=" bg-gray-50">
      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="grid grid-cols-3 gap-4 mt-6 px-4 pb-4">
        <div className="col-span-2">
          <TicketList tickets={tickets} onAdd={handleAddTask} />
        </div>

        <div>
          <TaskStatus tasks={inProgress} onComplete={handleComplete} />
          <ResolvedTask tasks={resolved} />
        </div>
      </div>
    </div>
  );
}

export default App;
