
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  return (
    <div className="p-5">
      Welcome
Hellow dashboard
    </div >
  );
}