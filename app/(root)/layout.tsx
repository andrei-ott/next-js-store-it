import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");
  console.log(currentUser);

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />

      <div className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />
        <Header />

        <div className="main-content">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
