// app/api/create/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function POST(request: Request) {
  const { title } = await request.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const supabase = createClient();

  const { error } = await supabase.from("titles").insert([{ title }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Title created" });
}
