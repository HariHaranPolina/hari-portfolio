import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg tracking-tight">
          HHP<span className="text-sky-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors">
              {l}
            </a>
          ))}
          <a href="mailto:hariharan.polina@gmail.com"
            className="text-sm bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg transition-colors">
            Hire me
          </a>
        </div>
        <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm text-gray-300">{l}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
