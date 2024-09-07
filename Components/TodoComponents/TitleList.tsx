import { createClient } from "@/app/utils/supabase/server";
import DeleteButton from "./DeleteButton";

export default async function TitleList() {
  const supabase = createClient();
  const { data: titles, error } = await supabase.from("titles").select("*");

  if (error) {
    return <p className="text-red-500">Error loading titles</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4">Title List</h2>
      {titles?.length ? (
        <ul className="bg-white p-6 rounded-lg shadow-md">
          {titles.map((title: { title: string }, id: number) => (
            <li
              key={id}
              className="border-b py-2 flex justify-between items-center"
            >
              {title.title}
              <DeleteButton />
            </li>
          ))}
        </ul>
      ) : (
        <p>No titles found.</p>
      )}
    </div>
  );
}