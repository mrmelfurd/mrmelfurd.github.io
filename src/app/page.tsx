export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-4 py-12">
      <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Hi, I'm Your Name!</h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-center mb-6">
          Welcome to my personal About Me page. Learn more <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">about me</a>.
        </p>
      </div>
    </main>
  );
}
