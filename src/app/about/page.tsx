import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-4 py-12">
      <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <Image
          src="/profile-placeholder.png"
          alt="Profile picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-zinc-200 dark:border-zinc-700 mb-4"
          priority
        />
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Your Name</h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-center mb-6">
          A short bio about yourself. Passionate developer, lifelong learner, and open source enthusiast. Replace this with your own story!
        </p>
        <section className="w-full mb-6">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2 justify-center">
            <li className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm">React</li>
            <li className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm">Next.js</li>
            <li className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm">TypeScript</li>
            <li className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
            {/* Add more skills as needed */}
          </ul>
        </section>
        <section className="w-full mb-6">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Experience</h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Software Engineer at Company A (2022–Present)</li>
            <li>Frontend Developer at Company B (2020–2022)</li>
            {/* Add more experience as needed */}
          </ul>
        </section>
        <section className="w-full">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Contact</h2>
          <div className="flex flex-col items-center gap-2">
            <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">your.email@example.com</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/yourusername</a>
            {/* Add more contact links as needed */}
          </div>
        </section>
      </div>
    </main>
  );
}
