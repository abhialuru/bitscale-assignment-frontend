import DesktopOnly from "@/components/DesktopOnly";
import Sidebar from "@/components/dashboard/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DesktopOnly>
      <main className="flex h-screen overflow-hidden">
        <Sidebar />
        {children}
      </main>
    </DesktopOnly>
  );
}

export default DashboardLayout;
