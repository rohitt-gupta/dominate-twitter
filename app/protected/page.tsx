
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <div className="w-full">

        <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
          <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
            DominateX
            <AuthButton />
          </div>
        </nav>
      </div>
      <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
        <Header />
      </div>
    </div>
  );
}
