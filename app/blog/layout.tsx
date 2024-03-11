import NewHeaderBlog from "./_assets/components/NewHeaderBlog";
import { Footer } from "@/components/landing-components";

export default async function LayoutBlog({ children }: { children: any }) {
  return (
    <div>
      <NewHeaderBlog />

      <main className="max-w-6xl min-h-screen p-8 mx-auto">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
