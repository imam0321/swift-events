import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <section className="grid place-items-center mt-10">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <LoginForm />
        <span className="text-center text-xs text-gray-500">
          Don't have an account?
          <Link
            className="underline hover:text-indigo-600"
            href="/register"
          >
            Register
          </Link>
        </span>
      </div>
    </section>
  );
}
