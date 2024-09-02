//TODO: Make the Full crud operation available here soon
import Input from "@/app/ui/Input";

import { readNotes } from "@/app/utils/supabase/data";
export default async function page() {
  const readnotes = await readNotes();
  return (
    <div>
      <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
        {/* Title Input Section */}
        <Input />
        {/* Todo List Section */}
        <ul className="list-none p-0">
          {readnotes.map((note) => (
            <li className="p-2 border-b border-gray-200" key={note.id}>
              {note.title}
            </li>
          ))}

          {/* Add more todos as needed */}
        </ul>
      </div>
    </div>
  );
}
