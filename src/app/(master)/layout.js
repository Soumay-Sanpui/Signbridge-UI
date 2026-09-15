import Navbar from "@/components/custom/Navbar";
import { cookies } from "next/headers";
import UserProvider from "@/components/providers/UserProvider";

export default async function MasterLayout({ children }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_user");
  
  // Use session user if available, otherwise use prefilled demo user
  const user = session 
    ? JSON.parse(session.value) 
    : {
        id: 1,
        username: "soumay sanpui",
        email: "soumay@gmail.com",
        name: "soumay sanpui"
      };

  return (
    <>
      <UserProvider currentUser={user} />
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
    </>
  );
}
