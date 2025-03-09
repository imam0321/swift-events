"use server";

import { createUser, fundUserByCredentials } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");
    const found = await fundUserByCredentials(credentials);
    return found;
  } catch (error) {
    throw error;
  }
}

export { registerUser, performLogin };
