import AdminNavBar from "@/components/admin/AdminNavBar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
            <AdminNavBar></AdminNavBar>
            {children}
        </div>
    );
  }