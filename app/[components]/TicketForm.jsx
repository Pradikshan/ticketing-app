"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "hardware problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value={"Hardware problem"}>Hardware problem</option>
          <option value={"Software problem"}>Software problem</option>
          <option value={"Project"}>Project</option>
        </select>
      </form>
    </div>
  );
};

export default TicketForm;
