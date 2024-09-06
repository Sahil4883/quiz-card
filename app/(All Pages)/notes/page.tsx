// app/page.tsx
import CreateForm from "@/Components/CreateForm";
import TitleList from "@/Components/TitleList";
export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Supabase Titles</h1>
      <CreateForm />
      {/* Fetches titles from Supabase */}
      <TitleList />
    </div>
  );
}
