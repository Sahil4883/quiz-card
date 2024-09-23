import React from "react";
import { createClient } from "@/app/utils/supabase/server";
import { useState } from "react";

export default async function Form() {
  const supabase = createClient();
  const time = new Date();
  async function handleSubmit() {
    const { data, error } = await supabase.from("mails").insert({
      created_at: time,
      user_id: "123",
      email: "helloworld@123",
      name: "lol",
      subject: "hello",
      message: "hello",
    });
  }
  handleSubmit();
  async function func() {
    console.log();
  }
  return (
    <>
      <div>your here</div>
      <form action="submit" onSubmit={func}>
        <input type="text" />
        <button typeof="submit">done</button>
      </form>
    </>
  );
}
