import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
    const education = [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'VIT Bhopal University',
            location: 'Bhopal, Madhya Pradesh',
            duration: '2021 - 2026',
            description: 'Focusing on core computer science principles including Data Structures, Algorithms, Software Engineering, and AI application development. Maintaining a strong academic record while actively participating in technical clubs and projects.',
        }
    ];

    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My academic foundation in computer science and engineering.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <GraduationCap size={30} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-2 text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={18} />
                                            <span className="font-medium">{edu.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
