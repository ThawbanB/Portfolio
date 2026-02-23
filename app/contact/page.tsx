"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault(); // Bloque toute action du navigateur (Outlook/Reload)
    
    if (isSending) return;

    setIsSending(true);
    setError(false);

    const serviceID = "service_giumbsg";
    const templateID = "template_cs4gkls";
    const publicKey = "ABQuQlp2OdfspR_qJ";

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Thawban", 
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setIsSending(false);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(true);
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen py-24 px-6 relative bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent uppercase italic">
            Contactez-moi
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Infos de contact</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Une idée ? Un projet ? Envoyez-moi un message et je vous répondrai dans les plus brefs délais.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                <Mail size={20} className="text-blue-600" />
              </div>
              <span className="font-medium text-sm">thawbanjabss78@gmail.com</span>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={sendEmail} 
            className="md:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-2xl"
          >
            <div className="grid gap-6">
              <div>
                <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                    placeholder="Votre projet en quelques mots..."
                  />
                </div>
              </div>

              <button
                disabled={isSending}
                type="submit"
                className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg ${
                  isSending 
                    ? "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 active:scale-95"
                }`}
              >
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
                {!isSending && <Send size={18} />}
              </button>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-green-500 font-bold bg-green-500/10 py-2 rounded-lg">
                  <CheckCircle size={18} /> <span>Message envoyé avec succès !</span>
                </motion.div>
              )}
              
              {error && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-red-500 font-bold bg-red-500/10 py-2 rounded-lg">
                  <AlertCircle size={18} /> <span>Une erreur est survenue. Réessayez.</span>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}