import Navbar from "@/components/custom/Navbar";

export default function MasterLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
