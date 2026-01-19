import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "emailjs-com";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    service: "",
    message: "",
  });

  // 🔒 Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      history.replaceState(null, "", location.pathname);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Submit Handler
  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill Name and Mobile Number");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Save to Firebase
      await addDoc(collection(db, "leads"), {
        name: formData.name,
        phone: "+91 " + formData.phone,
        email: formData.email,
        brand: formData.brand,
        service: formData.service,
        message: formData.message,
        source: "Get Started Modal",
        createdAt: serverTimestamp(),
      });

      // 2️⃣ Send Email via EmailJS
      await emailjs.send(
        "service_obib7hr", // ✅ SERVICE ID
        "template_xavjp5e", // ✅ TEMPLATE ID
        {
          name: formData.name,
          phone: "+91 " + formData.phone,
          email: formData.email,
          brand: formData.brand,
          service: formData.service,
          message: formData.message,
        },
        "kXVdNXLMznxP89_So", // ✅ PUBLIC KEY
      );

      // 3️⃣ Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        brand: "",
        service: "",
        message: "",
      });

      alert("Thank you! Our expert will contact you shortly.");
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 z-10">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition"
        >
          <X size={26} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900">
            Get Started with BidSpark365
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Share your requirement and our experts will connect with you
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full rounded-xl border border-gray-200 px-5 py-4 font-semibold outline-none"
          />

          <div className="flex rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 flex items-center bg-gray-100 font-bold">
              +91 🇮🇳
            </div>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              placeholder="Mobile Number *"
              className="flex-1 px-5 py-4 font-semibold outline-none"
            />
          </div>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-200 px-5 py-4 font-semibold outline-none"
          />

          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand / Company Name"
            className="w-full rounded-xl border border-gray-200 px-5 py-4 font-semibold outline-none"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-5 py-4 font-semibold"
          >
            <option value="">Select Service</option>
            <option>Government e-Procurement</option>
            <option>Tender Participation Support</option>
            <option>OEM Onboarding</option>
            <option>GeM Training & Workshops</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Briefly describe your requirement"
            className="w-full rounded-xl border border-gray-200 px-5 py-4 font-semibold resize-none"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-black text-lg disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>,
    modalRoot,
  );
};

export default GetStartedModal;
