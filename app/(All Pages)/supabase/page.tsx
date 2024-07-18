//This page needs alot of work to setup and experiment with supabase
//IDK What to do at this point
//Learning Supabase to understand this asap
//Didn't learn Supabase yet
//Starting learning supabase for the same
"use client";
import { createClient } from "@supabase/supabase-js";
import { useRef, useState } from "react";
import { Protect } from "@clerk/nextjs";

// Add clerk to Window to avoid type errors
declare global {
  interface Window {
    Clerk: any;
  }
}

function createClerkSupabaseClient() {
  return createClient(
    process.env.SUPABASE_SECRET_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    {
      global: {
        // Get the Supabase token with a custom fetch method
        fetch: async (url, options = {}) => {
          const clerkToken = await window.Clerk.session?.getToken({
            template: "supabase",
          });

          // Construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );
}

const client = createClerkSupabaseClient();

export default function Supabase() {
  const [addresses, setAddresses] = useState<any>();
  const listAddresses = async () => {
    // Fetches all addresses scoped to the user
    // Replace "Addresses" with your table name
    const { data, error } = await client.from("Addresses").select();
    if (!error) setAddresses(data);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const sendAddress = async () => {
    if (!inputRef.current?.value) return;
    await client.from("Addresses").insert({
      // Replace content with whatever field you want
      content: inputRef.current?.value,
    });
  };

  return (
    <>
      <Protect>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            onSubmit={sendAddress}
            style={{ color: "black" }}
            type="text"
            ref={inputRef}
          />
          <button onClick={sendAddress}>Send Address</button>
          <button onClick={listAddresses}>Fetch Addresses</button>
        </div>
        <h2>Addresses</h2>
        {!addresses ? (
          <p>No addresses</p>
        ) : (
          <ul>
            {addresses.map((address: any) => (
              <li key={address.id}>{address.content}</li>
            ))}
          </ul>
        )}
      </Protect>
    </>
  );
}
