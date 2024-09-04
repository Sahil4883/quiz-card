//TODO: Make the Full crud operation available here soon
import Input from "@/app/ui/Input";

import { readNotes } from "@/app/utils/supabase/data";
export default async function page() {
  const readnotes = await readNotes();
  return (
    <div>
      <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
        {/* Title Input Section */}
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Enter new todo title"
            className="flex-grow p-2 border rounded-l-lg border-gray-300 focus:outline-none"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
            Add Todo
          </button>
        </div>
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
