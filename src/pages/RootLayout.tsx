import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default RootLayout;
