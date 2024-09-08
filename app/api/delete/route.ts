import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function DELETE(request: Request) {
  const { title } = await request.json(); // Expecting 'title' in the request body

  const supabase = createClient();

  const { error } = await supabase.from("titles").delete().eq("title", title);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: `Note with title "${title}" deleted` });
}
