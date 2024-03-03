"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "hardware problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return <div>TicketForm</div>;
};

export default TicketForm;
