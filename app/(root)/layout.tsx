import React from "react";

export default function Layout({ children }: React.ReactNode) {
  return (
    <main className="flex h-screen">
      Sidebar
      <section className="flex h-full flex-1 flex-col">
        MobileNav Header
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
}
