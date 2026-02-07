import { Code2, Lightbulb, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Strong foundation in Computer Science with expertise in building scalable web applications using modern technologies and best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Analytical mindset with a passion for breaking down complex challenges into elegant, efficient solutions.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Effective team player with strong communication skills, committed to delivering high-quality results in collaborative environments.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learner',
      description: 'Dedicated to staying current with emerging technologies and industry trends, always seeking opportunities to grow and improve.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am a Computer Science Engineer passionate about building scalable full-stack applications,
            secure systems, and real-world problem solving. My focus lies in developing high-performance
            solutions that combine elegant design with robust engineering.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            With a strong foundation in Data Structures and AI applications, I specialize in
            architecting efficient backend systems and intuitive frontend experiences. I thrive on
            tackling complex technical challenges and delivering clean, maintainable code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether it's building real-time collaboration tools or integrating intelligent
            recommendation engines, I am committed to continuous growth and technical excellence.
            I aim to contribute to projects that push the boundaries of technology and create
            meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
