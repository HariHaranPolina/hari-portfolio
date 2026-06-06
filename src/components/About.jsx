export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-400 text-sm font-medium mb-3 uppercase tracking-widest">About me</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Building reliable infrastructure at scale
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Senior Site Reliability & DevOps Engineer based in Atlanta, GA with 8+ years of experience designing, automating, and operating enterprise cloud infrastructure across Azure and AWS.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My work spans building Kubernetes platforms, implementing GitOps workflows, establishing SLO frameworks, and increasingly — building AI/ML platform infrastructure for large-scale systems in regulated environments.
            </p>
            <div className="flex flex-col gap-3">
              {[
                ['📍', 'Alpharetta, GA (Atlanta area)'],
                ['🎓', 'MS Computer Science — Auburn University at Montgomery'],
                ['💼', 'Senior DevOps Engineer @ SolTech (Jan 2023–Present)'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3 text-sm text-gray-400">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '8+', label: 'Years experience' },
              { val: '50+', label: 'K8s deployments' },
              { val: '25+', label: 'Terraform modules' },
              { val: '99.9%', label: 'SLO target' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center">
                <div className="text-3xl font-semibold text-sky-400 mb-1">{val}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
