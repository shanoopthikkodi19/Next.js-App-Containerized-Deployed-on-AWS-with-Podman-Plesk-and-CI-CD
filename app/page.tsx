export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-indigo-900 text-white p-8">
      <h1 className="text-5xl font-bold">Hello from Docker on AlmaLinux</h1>
      <p className="text-xl text-indigo-200">
        My first Next.js app running in a container.
      </p>
      <a
        href="https://nextjs.org/docs"
        className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black hover:bg-amber-300"
      >
        Next.js Docs
      </a>
    </main>
  );
}
