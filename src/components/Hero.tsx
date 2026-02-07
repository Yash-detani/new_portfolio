import { useState, useEffect } from 'react';
import { Download, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
            setTypedText(currentRole.slice(0, typedText.length - 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Available for opportunities
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display text-gray-900 dark:text-white mb-6 animate-fade-in tracking-tight">
            Yash Detani
          </h1>

          <div className="h-16 sm:h-20 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400">
                {typedText}
              </span>
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Computer Science Engineer passionate about building scalable full-stack applications,
            secure systems, and real-world problem solving. Focused on creating efficient,
            user-centric solutions through clean code and innovation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <a
              href="/Yash_Detani_resume.pdf"
              download
              className="px-8 py-4 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Yash-detani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
