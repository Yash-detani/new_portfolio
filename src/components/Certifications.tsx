import { Award, BookOpen, Code, Cloud } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: typeof Award;
  description: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: 'Full Stack MERN Development',
      issuer: 'Professional Certification',
      icon: Code,
      description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js with hands-on project experience.',
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'Cloud Platform Certification',
      icon: Cloud,
      description: 'Understanding of cloud infrastructure, deployment strategies, and modern DevOps practices.',
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'Technical Coursework',
      icon: BookOpen,
      description: 'Advanced problem-solving techniques with focus on algorithm optimization and complexity analysis.',
    },
    {
      title: 'Web Development Specialization',
      issuer: 'Professional Training',
      icon: Award,
      description: 'Complete web development curriculum covering frontend, backend, and database technologies.',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Learning
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Committed to continuous learning and professional development through
            structured programs and hands-on technical training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-blue-600 dark:text-blue-400" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-6">
            Always exploring new technologies, frameworks, and best practices to stay
            at the forefront of software development. Committed to growth through
            hands-on projects, technical courses, and community engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Problem Solving', 'System Design', 'Best Practices', 'Code Quality', 'Performance Optimization'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
