import Ticket from "../../[models]/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST Request Received");

  try {
    const body = await req.json();
    // console.log("Request Body:", body);

    const ticketData = body.formData;
    // console.log("Ticket Data:", ticketData);

    await Ticket.create(ticketData);

    console.log("Ticket created successfully");

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
