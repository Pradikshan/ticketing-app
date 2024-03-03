import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shaodw-lg p-3 m-2">
      <PriorityDisplay />
      <DeleteBlock />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
