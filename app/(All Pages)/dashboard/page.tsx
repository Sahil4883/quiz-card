import { Suspense } from "react";
import { UserProfile } from "./User-Profile";
import TodoList from "@/Components/(Functional Component)/TodoComponent";
import Textloading from "@/Components/(Skeleton)/Textloading";
import { Protect } from "@clerk/nextjs";
//BUG: The tab 3 tabs are changing its position when switched tab so fix this issue (refer todo component)
export default async function Home() {
  return (
    /*Protecting the dashboard route and it doesn't render */
    <Protect>
      <div>
        <div role="tablist" className="tabs tabs-bordered justify-center">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Add Q&A"
          />
          <div role="tabpanel" className="tab-content p-4">
            <UserProfile />
            <Suspense fallback={<Textloading />}></Suspense>
            <TodoList />
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 2
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </Protect>
  );
}
