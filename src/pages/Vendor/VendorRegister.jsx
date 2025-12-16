// src/pages/Vendor/VendorRegister.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VendorRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    category: "",
    address: "",
    ownerName: "",
    ownerPhone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // file uploads & previews
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  const categories = [
    "Restaurant",
    "Bakery",
    "Drinks",
    "Supermarket",
    "Groceries",
    "Cafe",
    "Other",
  ];

  // validation
  function validate() {
    const e = {};
    if (!form.businessName.trim()) e.businessName = "Business name is required";
    if (!form.businessEmail.includes("@")) e.businessEmail = "Enter a valid email";
    if (!/^\+?[0-9]{7,15}$/.test(form.businessPhone))
      e.businessPhone = "Enter a valid phone number";
    if (!form.category) e.category = "Choose a category";
    if (!form.address.trim()) e.address = "Business address is required";
    if (!form.ownerName.trim()) e.ownerName = "Owner full name is required";
    if (!/^\+?[0-9]{7,15}$/.test(form.ownerPhone))
      e.ownerPhone = "Enter a valid phone number";
    if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!form.terms) e.terms = "You must accept the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // file handlers
  const handleFile = (fileSetter, previewSetter, file) => {
    if (!file) {
      fileSetter(null);
      previewSetter(null);
      return;
    }
    fileSetter(file);
    const reader = new FileReader();
    reader.onload = () => previewSetter(reader.result);
    reader.readAsDataURL(file);
  };

  const onSubmit = async (e) => {
    e?.preventDefault?.();
    if (!validate()) return;
    setLoading(true);

    // simulate network / server-side registration
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // simulate redirect after success animation
      setTimeout(() => {
        // for now go to dashboard or home
        navigate("/", { replace: true });
      }, 1400);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT: Illustration / marketing area (hidden on small screens) */}
        <div className="hidden md:block relative bg-gradient-to-br from-green-50 to-green-100">
          <img
            alt="vendor"
            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20 p-8 flex flex-col justify-end">
            <h3 className="text-white text-3xl font-bold mb-2">Grow with QuickCrow</h3>
            <p className="text-white/90 max-w-xs">
              Join thousands of vendors delivering to happy customers every day. Fast onboarding,
              reliable payouts and tools to manage your orders.
            </p>
          </div>
        </div>

        {/* RIGHT: Form section (on mobile full width) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="p-6 sm:p-10"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Vendor Registration</h2>
              <p className="text-sm text-gray-600 mt-1">Create your vendor account to start selling</p>
            </div>
            <Link to="/" className="text-sm text-gray-700 hover:underline">Back to home</Link>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700">Business Information</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-600">Business name</label>
                <input
                  className={`w-full h-12 px-4 rounded-lg border ${errors.businessName ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  placeholder="e.g. Mama's Kitchen"
                />
                {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-600">Business email</label>
                <input
                  className={`w-full h-12 px-4 rounded-lg border ${errors.businessEmail ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                  value={form.businessEmail}
                  onChange={(e) => setForm({ ...form, businessEmail: e.target.value })}
                  placeholder="business-name@gmail.com"
                />
                {errors.businessEmail && <p className="text-xs text-red-500 mt-1">{errors.businessEmail}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-600">Business phone</label>
                <input
                  className={`w-full h-12 px-4 rounded-lg border ${errors.businessPhone ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                  value={form.businessPhone}
                  onChange={(e) => setForm({ ...form, businessPhone: e.target.value })}
                  placeholder="+2348012345678"
                />
                {errors.businessPhone && <p className="text-xs text-red-500 mt-1">{errors.businessPhone}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-600">Category</label>
                <select
                  className={`w-full h-12 px-4 rounded-lg border ${errors.category ? "border-red-400" : "border-gray-200"} bg-white focus:ring-2 focus:ring-green-400`}
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  <option value="">Select category</option>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs text-gray-600">Business address</label>
                <input
                  className={`w-full h-12 px-4 rounded-lg border ${errors.address ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Street, City, State"
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>
            </div>

            <hr className="my-3" />

            <h4 className="text-sm font-medium text-gray-700">Owner / Login Information</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-600">Owner full name</label>
                <input
                  className={`w-full h-12 px-4 rounded-lg border ${errors.ownerName ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                  value={form.ownerName}
                  onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                  placeholder="Emazzy Rose"
                />
                {errors.ownerName && <p className="text-xs text-red-500 mt-1">{errors.ownerName}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-600">Owner phone</label>
                <input
                  className={`w-full h-12 px-4 rounded-lg border ${errors.ownerPhone ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                  value={form.ownerPhone}
                  onChange={(e) => setForm({ ...form, ownerPhone: e.target.value })}
                  placeholder="+2348123456789"
                />
                {errors.ownerPhone && <p className="text-xs text-red-500 mt-1">{errors.ownerPhone}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-600">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`w-full h-12 px-4 pr-12 rounded-lg border ${errors.password ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Create a strong password"
                  />
                  <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-600">Confirm password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    className={`w-full h-12 px-4 pr-12 rounded-lg border ${errors.confirmPassword ? "border-red-400" : "border-gray-200"} focus:ring-2 focus:ring-green-400`}
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    placeholder="Repeat password"
                  />
                  <span onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
                {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <hr className="my-3" />

            {/* Uploads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-600">Business logo (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(setLogoFile, setLogoPreview, e.target.files?.[0])}
                  className="w-full text-sm text-gray-600"
                />
                {logoPreview && (
                  <img src={logoPreview} alt="logo preview" className="mt-2 h-16 w-16 object-cover rounded-md border"/>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-600">Store banner (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(setBannerFile, setBannerPreview, e.target.files?.[0])}
                  className="w-full text-sm text-gray-600"
                />
                {bannerPreview && (
                  <img src={bannerPreview} alt="banner preview" className="mt-2 h-20 w-full object-cover rounded-md border"/>
                )}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-2">
              <input
                id="terms"
                type="checkbox"
                checked={form.terms}
                onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                className="mt-1 h-4 w-4"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{" "}
                <Link to="/terms" className="text-green-600 underline">Terms & Conditions</Link>
              </label>
            </div>
            {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onSubmit}
                className={`w-full sm:w-auto flex-1 sm:flex-none h-12 px-6 rounded-lg text-white font-semibold ${
                  loading ? "bg-green-400/70" : "bg-green-600 hover:bg-green-700"
                } shadow`}
              >
                {loading ? "Creating..." : "Create Vendor Account"}
              </motion.button>

              <Link to="/login" className="w-full sm:w-auto text-center text-sm text-gray-700 underline">
                Already have an account? Login
              </Link>
            </div>
          </form>

        </motion.div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-3">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Vendor account created</h3>
              <p className="text-sm text-gray-600">Welcome aboard! Redirecting to dashboard…</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
