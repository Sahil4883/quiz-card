import CreateForm from "@/Components/TodoComponents/CreateForm";
import TitleList from "@/Components/TodoComponents/TitleList";

export async function UserProfile() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Supabase Titles</h1>
      {/* Form to create new title */}
      <CreateForm />
      {/* Fetches titles from Supabase */}
      <TitleList />
    </div>
  );
}
