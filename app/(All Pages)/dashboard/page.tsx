import { Suspense } from "react";
import Textloading from "@/Components/(Skeleton)/Loading";
import { Protect } from "@clerk/nextjs";
import DashboardProfile from "@/Components/TodoComponents/DashboardProfile";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function dashboard() {
  return (
    /*Protecting the dashboard route and it doesn't render */
    <Protect>
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
