import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StepIndicator from "./StepIndicator";
import SuccessMessage from "./SuccessMessage";

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>({});
  const [currency, setCurrency] = useState<"INR" | "USD" | null>(null);
  const [loadingCurrency, setLoadingCurrency] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pricing = {
    INR: [
      { range: "₹20,000 – ₹50,000", label: "Small project / MVP" },
      { range: "₹50,000 – ₹80,000", label: "Medium project" },
      { range: "₹80,000 – ₹1,30,000", label: "Large project" },
      { range: "₹1,30,000+", label: "Enterprise project" },
    ],
    USD: [
      { range: "$5,000 – $10,000", label: "Small MVP" },
      { range: "$10,000 – $25,000", label: "Medium project" },
      { range: "$25,000 – $50,000", label: "Large project" },
      { range: "$50,000+", label: "Enterprise project" },
    ],
  };

  // 🌍 Detect user region and select INR/USD
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const detected = data?.country_code === "IN" ? "INR" : "USD";
        setCurrency(detected);
      })
      .catch(() => setCurrency("USD"))
      .finally(() => {
        clearTimeout(timeout);
        setLoadingCurrency(false);
      });

    return () => clearTimeout(timeout);
  }, []);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "70370f02-ee10-4b91-a081-6e14f7d0eb5a",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      project_type: formData.projectType,
      timeline: formData.timeline,
      budget: formData.budget || "Not selected",
      message: formData.description,
      subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) setSubmitted(true);
      else throw new Error("Submission failed");
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) return <SuccessMessage />;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🌌 Background grid + floating glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <motion.div
        className="absolute -top-10 left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <StepIndicator currentStep={step} totalSteps={3} />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-cyan-500/20 rounded-2xl backdrop-blur-2xl p-10 shadow-[0_0_50px_rgba(56,189,248,0.1)]"
        >
          {/* ✨ Neon scanning accent */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Step 1 — Project Type */}
          {step === 1 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Project Type
              </h2>
              <p className="text-gray-400 text-center mb-10">
                Select what best fits your project vision.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  "Mobile App",
                  "Web Platform",
                  "SaaS Product",
                  "Automation Tools",
                  "Other",
                ].map((type) => (
                  <motion.div
                    key={type}
                    whileHover={{ scale: 1.03 }}
                    className={`relative group rounded-xl p-6 cursor-pointer transition-all border ${
                      formData.projectType === type
                        ? "border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"
                        : "border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04]"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, projectType: type })
                    }
                  >
                    <h3 className="text-xl font-semibold">{type}</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {type === "Other"
                        ? "Something unique or experimental"
                        : "Click to select this option"}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  disabled={!formData.projectType}
                  onClick={handleNext}
                  className="relative px-8 py-3 font-semibold rounded-lg text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-105 transition-all disabled:opacity-50"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Project Details */}
          {step === 2 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Project Details
              </h2>
              <p className="text-gray-400 text-center mb-8">
                Help us understand your scope and goals.
              </p>

              {loadingCurrency ? (
                <div className="text-center py-12 text-gray-400 animate-pulse">
                  Detecting your region…
                </div>
              ) : (
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Timeline
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/70 to-gray-800/50 text-gray-100 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all appearance-none outline-none shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:border-cyan-400/60"
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                    >
                      <option value="" className="bg-gray-900 text-gray-400">
                        Select timeline
                      </option>
                      <option
                        value="ASAP"
                        className="bg-gray-900 text-gray-200"
                      >
                        ASAP
                      </option>
                      <option
                        value="1-2 Months"
                        className="bg-gray-900 text-gray-200"
                      >
                        1-2 Months
                      </option>
                      <option
                        value="3-6 Months"
                        className="bg-gray-900 text-gray-200"
                      >
                        3-6 Months
                      </option>
                      <option
                        value="Ongoing"
                        className="bg-gray-900 text-gray-200"
                      >
                        Ongoing
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Budget Range
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pricing[currency!].map((p) => (
                        <div
                          key={`${currency}-${p.range}`}
                          onClick={() =>
                            setFormData({ ...formData, budget: p.range })
                          }
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            formData.budget === p.range
                              ? "border-cyan-400 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                              : "border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="font-semibold">{p.range}</div>
                          <div className="text-sm text-gray-400">{p.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <textarea
                    placeholder="Describe your project idea..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 h-32 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-3 rounded-lg font-semibold bg-white/5 hover:bg-white/10 transition-all"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={loadingCurrency}
                  className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-105 transition-all disabled:opacity-50"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Contact Info */}
          {step === 3 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <p className="text-gray-400 text-center mb-8">
                We’ll reach out to you soon.
              </p>

              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                  <input
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <input
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <input
                  placeholder="Company / Organization"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-3 rounded-lg font-semibold bg-white/5 hover:bg-white/10 transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-105 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>

      {/* CRT scanline overlay */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px, transparent 4px)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default ContactForm;
