"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Méthode simple via mailto (fonctionne partout, pas besoin d'API)
    const mailtoLink = `mailto:thawbanjabss78@gmail.com?subject=Message de ${form.name}&body=${form.message}%0AEmail: ${form.email}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h1 className="text-4xl font-bold mb-8">Contactez-moi</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Envoyer
        </button>

        {submitted && (
          <p className="mt-4 text-green-500">Merci ! Votre message a été envoyé.</p>
        )}
      </form>
    </motion.div>
  );
}
