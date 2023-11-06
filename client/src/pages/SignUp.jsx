import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-center font-bold py-6">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="username..."
          id=""
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="email..."
          id="email"
          className="border rounded-lg p-3"
        />
        <input
          type="password"
          name="password"
          placeholder="password..."
          id="password"
          className="border rounded-lg p-3"
        />
        <button
          type="button"
          className="p-3 bg-slate-700 text-white rounded-xl hover:opacity-90 disabled:opacity-50"
        >
          Sign Up
        </button>
        <div className="flex gap-2 ">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-600">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
