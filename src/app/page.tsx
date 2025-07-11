// app/page.tsx
import Features from '@/components/features';
import '@/styles/globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Features />
    </main>
  );
}