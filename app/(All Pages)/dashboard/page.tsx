import { Protect } from "@clerk/nextjs";
import DashboardProfile from "@/Components/TodoComponents/DashboardProfile";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function dashboard() {
  return (
    <Protect>
      {/*Protecting the dashboard page from unauthorised users and redirecting them to the login page */}
      <DashboardProfile />
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
    </Protect>
  );
}
