import CreateForm from "@/Components/TodoComponents/CreateForm";
import TitleList from "@/Components/TodoComponents/TitleList";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function UserProfile() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Supabase Titles</h1>
      {/* Form to create new title */}
      <CreateForm />
      {/* Fetches titles from Supabase */}
      <TitleList />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
