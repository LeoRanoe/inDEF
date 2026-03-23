"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { fadeUp, stagger } from "@/lib/animations";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Inquiry sent successfully! We'll get back to you soon.");
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-40 bg-dark-bg border-t border-steel/10">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Info */}
          <motion.div variants={fadeUp}>
            <h2 className="font-headline text-4xl md:text-7xl mb-12 leading-tight font-light text-on-surface">
              Commence your{" "}
              <br />
              <span className="text-steel italic">vision.</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <User className="text-steel shrink-0 mt-1" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-label text-[10px] text-muted/60 tracking-[0.3em] uppercase mb-1">
                    Managing Director
                  </p>
                  <p className="text-on-surface font-body text-lg">
                    Devane Tirtosemito
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-steel shrink-0 mt-1" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-label text-[10px] text-muted/60 tracking-[0.3em] uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+597874302"
                    className="text-on-surface hover:text-steel transition-colors font-body"
                  >
                    <p className="text-on-surface font-body">+597 874 3028</p>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-steel shrink-0 mt-1" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-label text-[10px] text-muted/60 tracking-[0.3em] uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:devane.tirtosemito@indefdesign.com"
                    className="text-on-surface hover:text-steel transition-colors font-body"
                  >
                    devane.tirtosemito@indefdesign.com
                  </a>
                  <p className="text-on-surface text-sm mt-1 font-body">
                    <a
                      href="mailto:devtirto@gmail.com"
                      className="hover:text-steel transition-colors"
                    >
                      devtirto@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-steel shrink-0 mt-1" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-label text-[10px] text-muted/60 tracking-[0.3em] uppercase mb-1">
                    Address
                  </p>
                  <p className="text-on-surface font-body">
                    De Crane Weg #70<br />
                    Wanica
                  </p>
                </div>
              </div>


            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeUp}>
            <div className="bg-surface/60 p-8 md:p-12 border border-steel/10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block font-label text-[10px] text-steel mb-3 uppercase tracking-[0.3em]">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-transparent border-0 border-b border-steel/30 focus:ring-0 focus:border-gold transition-[border-color] py-3 text-on-surface placeholder:text-muted/30 font-headline text-lg outline-none"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-label text-[10px] text-steel mb-3 uppercase tracking-[0.3em]">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-transparent border-0 border-b border-steel/30 focus:ring-0 focus:border-gold transition-[border-color] py-3 text-on-surface placeholder:text-muted/30 font-headline text-lg outline-none"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-label text-[10px] text-steel mb-3 uppercase tracking-[0.3em]">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-transparent border-0 border-b border-steel/30 focus:ring-0 focus:border-gold transition-[border-color] py-3 text-on-surface placeholder:text-muted/30 font-headline text-lg outline-none"
                    placeholder="+597 000 0000"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block font-label text-[10px] text-steel mb-3 uppercase tracking-[0.3em]">
                    Inquiry Type
                  </label>
                  <select
                    {...register("inquiryType")}
                    className="w-full bg-transparent border-0 border-b border-steel/30 focus:ring-0 focus:border-gold transition-[border-color] py-3 text-on-surface font-headline text-lg outline-none appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-dark-bg">
                      Select inquiry type
                    </option>
                    <option value="residential" className="bg-dark-bg">
                      Residential Project
                    </option>
                    <option value="commercial" className="bg-dark-bg">
                      Commercial Build
                    </option>
                    <option value="visualization" className="bg-dark-bg">
                      3D Visualization
                    </option>
                    <option value="renovation" className="bg-dark-bg">
                      Renovation
                    </option>
                    <option value="consultation" className="bg-dark-bg">
                      Consultation
                    </option>
                  </select>
                  {errors.inquiryType && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.inquiryType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-label text-[10px] text-steel mb-3 uppercase tracking-[0.3em]">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-steel/30 focus:ring-0 focus:border-gold transition-[border-color] py-3 text-on-surface placeholder:text-muted/30 font-headline text-lg resize-none outline-none"
                    placeholder="Describe your vision..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-body">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-dark-bg font-label py-4 uppercase tracking-[0.3em] text-sm font-bold hover:bg-gold/80 transition-[background-color,opacity] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
