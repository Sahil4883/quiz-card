import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id); // Convert id to an integer if it's supposed to be a number

  console.log("DELETE request received for ID:", id); // Check if ID is correct

  try {
    const supabase = createClient();

    // Log for debugging
    console.log(`Deleting task with ID: ${id}`);

    const { data, error } = await supabase.from("tasks").delete().eq("id", id); // Ensure "id" is the correct column name

    if (error) {
      console.error("Supabase Error: ", error); // Log any error from Supabase
      return NextResponse.json({ success: false, error: error.message });
    }

    console.log("Deleted data: ", data); // Log the response from Supabase
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Error: ", error); // Log any unexpected API error
    return "An unexpected error occurred.";
  }
}
