const projects = [
  {
    title: 'K8s Incident Intelligence Platform',
    description: 'Full-stack platform combining real-time Kubernetes observability with AI-powered incident diagnosis. Uses RAG to search runbooks and LLM to generate remediation steps automatically.',
    tech: ['.NET 8', 'React', 'PostgreSQL', 'pgvector', 'SignalR', 'Claude API', 'Prometheus'],
    github: 'https://github.com/HariHaranPolina/k8s-incident-platform',
    color: 'from-sky-500/10 to-blue-500/5',
    border: 'border-sky-500/20',
  },
  {
    title: 'DevOps AI Monitor',
    description: 'Lightweight AI-powered Kubernetes monitoring tool. Detects pod anomalies via Prometheus metrics and generates plain-English diagnosis and kubectl remediation commands using Claude API.',
    tech: ['Python', 'Kubernetes', 'Prometheus', 'Claude API', 'Slack', 'Docker'],
    github: 'https://github.com/HariHaranPolina/devops-ai-monitor',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
  },
  {
    title: 'DevOps CI/CD Pipeline Demo',
    description: 'Production-grade CI/CD pipeline with GitHub Actions — build, test, Docker build/push, and automated deployment. Includes xUnit tests, code coverage, and live deployment on every push.',
    tech: ['.NET 8', 'GitHub Actions', 'Docker', 'Docker Hub', 'Render', 'xUnit'],
    github: 'https://github.com/HariHaranPolina/devops-cicd-demo',
    live: 'https://devops-cicd-demo.onrender.com',
    color: 'from-green-500/10 to-green-500/5',
    border: 'border-green-500/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sky-400 text-sm font-medium mb-3 uppercase tracking-widest">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">Featured projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div key={i} className={`bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform`}>
              <div>
                <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map(t => (
                  <span key={t} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>

              <div className="flex gap-3 pt-2 border-t border-white/10">
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="text-xs text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
