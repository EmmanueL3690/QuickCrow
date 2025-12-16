import { useState } from "react";
import { Eye, EyeOff, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = () => {
    if (!validate()) return;

    setSuccess(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">

        {/* LEFT: FORM SECTION */}
        <div className="p-8 sm:p-10 flex flex-col justify-center bg-gradient-to-br from-yellow-200 to-yellow-300 relative">

          {/* Back Button */}
          <Link
            to="/"
            className="absolute top-5 left-5 flex items-center gap-2 text-black font-medium hover:opacity-75"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-700 mb-8">Sign in to continue</p>

          {/* EMAIL */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.email ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-green-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* PASSWORD */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={`w-full h-12 px-4 pr-12 rounded-lg border ${
                errors.password ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-green-500`}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={submitForm}
            disabled={success}
            className={`w-full h-12 rounded-full text-white font-semibold shadow-md transition flex items-center justify-center gap-2 ${
              success ? "bg-green-600" : "bg-green-600 hover:bg-gray-900"
            }`}
          >
            {success ? <><CheckCircle size={20} /> Success!</> : "Sign In"}
          </button>

          {/* SOCIAL LOGIN */}
          <div className="flex items-center gap-3 mt-6">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg w-full justify-center hover:bg-gray-100 transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                className="h-5"
              />
              Google
            </button>

            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg w-full justify-center hover:bg-gray-100 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="h-5"
              />
              Apple
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-700 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-medium underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* RIGHT IMAGE (hidden on mobile) */}
        <div className="hidden md:block relative bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1652862730749-31dae8981191?w=600&q=60"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
