import Sidebar from "@/components/dashboard/Sidebar";

function PlaybooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
}

export default PlaybooksLayout;
