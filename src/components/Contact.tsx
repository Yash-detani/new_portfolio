import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yashdetani01@gmail.com',
      link: 'mailto:yashdetani01@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yash-detani',
      link: 'https://linkedin.com/in/yash-detani',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Yash-detani',
      link: 'https://github.com/Yash-detani',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for Remote',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently seeking new opportunities and am excited to hear about potential
            collaborations. Reach out through any of these channels!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-blue-600 dark:text-blue-400" size={32} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-10 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Open to New Opportunities
            </h3>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto relative z-10 font-medium">
              Currently seeking Full-time Software Engineer and Full Stack Developer
              positions. Available for immediate start and open to both remote and
              on-site roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
