import Sidebar from "@/components/dashboard/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
}

export default DashboardLayout;
