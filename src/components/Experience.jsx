const jobs = [
  {
    company: 'SolTech',
    role: 'Senior DevOps Engineer',
    period: 'Jan 2023 – Present',
    location: 'Atlanta, GA',
    points: [
      'Architected end-to-end CI/CD pipelines using Azure DevOps and Jenkins for 10+ enterprise applications, reducing deployment cycle time by 40%',
      'Built 25+ reusable Terraform modules for Azure infrastructure (AKS, ACR, VM Scale Sets), cutting environment provisioning from days to under 2 hours',
      'Led Kubernetes platform operations across AKS and OpenShift — managing 50+ microservices with autoscaling, ingress, and health probe configurations',
      'Reduced Docker image vulnerability exposure by 70%+ through container hardening and SonarQube integration in CI/CD pipelines',
      'Established SLO/SLI framework enabling data-driven error budget conversations with engineering and product leadership',
    ]
  },
  {
    company: 'SingleStore Inc.',
    role: 'Senior DevOps Engineer',
    period: 'Jul 2016 – Sep 2021',
    location: 'Remote',
    points: [
      'Designed and owned IaC strategy using Terraform for all Azure cloud provisioning across 20+ application teams',
      'Built multi-branch CI/CD pipeline architecture in Jenkins and Azure DevOps, standardizing workflows across engineering teams',
      'Engineered monitoring ecosystem using Splunk, Dynatrace, Prometheus, and Grafana, establishing baseline observability and SLO tracking',
      'Integrated Kafka into CI/CD workflows for event-driven deployment automation and data pipeline reliability',
      'Integrated Azure Key Vault for secrets management, eliminating hardcoded credentials across all CI/CD pipelines',
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sky-400 text-sm font-medium mb-3 uppercase tracking-widest">Career</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">Work experience</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>

          <div className="flex flex-col gap-12">
            {jobs.map((job, i) => (
              <div key={i} className="pl-8 relative">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-sky-400 -translate-x-[3px]"></div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">{job.role}</h3>
                    <p className="text-sky-400 text-sm">{job.company} · {job.location}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
                    {job.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="text-sky-400 mt-1.5 flex-shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
