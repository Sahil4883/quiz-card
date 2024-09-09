import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

const supabase = createClient();

export async function GET() {
  try {
    // Fetch all records from the 'titles' table
    const { data: titles, error } = await supabase
      .from("titles") // <-- your table name
      .select("title"); // <-- fetch all columns

    if (error) {
      console.error("Error loading titles:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return the fetched data as a JSON response
    return NextResponse.json(titles, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
