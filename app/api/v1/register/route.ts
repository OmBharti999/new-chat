import { createNewUSer } from "@/_actions/user.action";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password, pic } = await request.json();

  console.log({ name, email, password, pic });
  if (!name || !email || !password) {
    return NextResponse.json({ message: "Please enter all the fields" });
  }

  const newUser = createNewUSer({ name, email, password, pic });

  if (!newUser) {
    return NextResponse.json({ message: "User already exists" });
  }

  return NextResponse.json({ message: "User created!" });
};
