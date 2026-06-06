import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sky-400 text-sm font-medium mb-3 uppercase tracking-widest">Contact</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Let's work together</h2>
        <p className="text-gray-400 mb-12">Open to Director/VP-level SRE and DevOps roles, AI platform infrastructure, and consulting engagements.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '✉️', label: 'Email', value: 'hariharan.polina@gmail.com', href: 'mailto:hariharan.polina@gmail.com' },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hariharan-polina', href: 'https://www.linkedin.com/in/hari-haran-68252355' },
            { icon: '🐙', label: 'GitHub', value: 'github.com/HariHaranPolina', href: 'https://github.com/HariHaranPolina' },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
              className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-sky-500/30 transition-colors group text-left">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="text-sm text-gray-300 group-hover:text-sky-400 transition-colors">{item.value}</div>
            </a>
          ))}
        </div>

        {sent ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="text-3xl mb-3">✅</div>
            <div className="text-white font-medium mb-1">Message sent!</div>
            <p className="text-gray-400 text-sm">Thanks {form.name}, I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/3 border border-white/8 rounded-2xl p-8 text-left flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Name</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50" />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Email</label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50" />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1.5">Message</label>
              <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                placeholder="Tell me about the role or project..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 resize-none" />
            </div>
            <button type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-xl text-sm font-medium transition-colors">
              Send message
            </button>
          </form>
        )}

        <p className="text-gray-600 text-xs mt-8">© 2025 Hari Haran Polina · Atlanta, GA</p>
      </div>
    </section>
  )
}
