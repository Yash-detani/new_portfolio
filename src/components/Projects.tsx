import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Chit Chat — Real-Time Chat Application',
      description: 'A full-stack real-time chat platform with secure authentication, live messaging, and user presence tracking. Built for high performance and scalability.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT'],
      github: '',
      demo: 'https://chitchat-fm38.onrender.com/',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'AI Fitness Buddy — AI + Web Application',
      description: 'Serverless AI fitness assistant featuring real-time calorie estimation from food images and a personalized gym diet planner using intelligent recommendation systems.',
      techStack: ['AI', 'Web Apps', 'Image Processing', 'Recommendation Engine', 'React'],
      github: '',
      demo: 'https://fitness-ai-orcin.vercel.app/',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications demonstrating problem-solving skills and technical expertise
            in building scalable, user-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
