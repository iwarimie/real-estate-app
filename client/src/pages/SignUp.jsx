import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  console.log(formData);

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-center font-bold py-6">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username..."
          id="username"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email..."
          id="email"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password..."
          id="password"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <button
          type="button"
          className="p-3 bg-slate-700 text-white rounded-xl hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 ">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
