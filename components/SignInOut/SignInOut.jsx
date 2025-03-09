'use client'
import useAuth from "@/app/hooks/useAuth"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInOut() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setAuth(null);
    router.push('/login');
  }
  return (
    <>
      {
        auth ? (
          <>
            <span>{auth.name}</span>
            <span>{' '}|{' '}</span>
            <a onClick={handleLogout}>Logout</a>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )
      }
    </>
  )
}
