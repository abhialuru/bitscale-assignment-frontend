import Sidebar from "@/components/dashboard/Sidebar";

function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
}

export default IntegrationsLayout;
