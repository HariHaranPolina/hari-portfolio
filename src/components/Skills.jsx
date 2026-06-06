const categories = [
  {
    title: 'Cloud & Infrastructure',
    items: ['Microsoft Azure', 'AWS', 'AKS', 'Terraform', 'ARM Templates', 'Ansible']
  },
  {
    title: 'Containers & Orchestration',
    items: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'OpenShift', 'Argo CD']
  },
  {
    title: 'CI/CD & GitOps',
    items: ['Azure DevOps', 'Jenkins', 'GitLab CI', 'Flux CD', 'Harness', 'GitHub Actions']
  },
  {
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Dynatrace', 'Splunk', 'Azure Monitor']
  },
  {
    title: 'Languages & Scripting',
    items: ['Python', 'Bash', 'Go', 'PowerShell', 'Groovy', 'YAML']
  },
  {
    title: 'SRE & AI Platform',
    items: ['SLO/SLI Design', 'Error Budgets', 'Incident Response', 'RAG Pipelines', 'pgvector', 'Claude API']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sky-400 text-sm font-medium mb-3 uppercase tracking-widest">Tech stack</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">What I work with</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => (
            <div key={cat.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-gray-300 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="text-xs bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
