
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
const Header = async () => {

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
      <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
        DominateXclub
        <Link href="/bounty">Bounty</Link>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  )
}

export default Header