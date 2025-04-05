import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-background to-muted">
      {/* Header stays fixed at top */}
      <Header />

      {/* Main content fills remaining space */}
      <main className="flex-1 w-full flex items-center justify-center">
        {children}
      </main>

      {/* Footer stays at bottom */}
      <footer className="w-full border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made with 💗 @Pratham Jaiswal</p>
        </div>
      </footer>
    </div>
  );
}
