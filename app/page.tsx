import { Header, Footer } from "@/components/landing-components";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Hero Section with Video */}
          <div className="text-center pt-32">
            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-blue-600 pb-2">
              Create Beautiful Coloring Books
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Generate personalized coloring pages for yourself and your kids with AI
            </p>
            
            {/* YouTube Video Embed */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative" style={{ paddingBottom: '55%' }}>
                <iframe 
                  src="https://www.youtube.com/embed/qsRNpR5uPUM"
                  title="ColorBook Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                />
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/signin">
              <Button 
                size="lg" 
                className="h-11 font-regular text-sm rounded-sm px-xs text-content-on-brand bg-surface-brand hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none"
              >
                Create Your Coloring Book Now
              </Button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="max-w-3xl mx-auto mt-20 mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Quick FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-blue-600">What is ColorBook?</h3>
                <p className="text-gray-600">ColorBook is an AI-powered platform that transforms your ideas into beautiful coloring book pages. Perfect for both kids and adults who enjoy coloring.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-blue-600">How does it work?</h3>
                <p className="text-gray-600">Simply describe what you want to color, and our AI will generate a custom coloring page ready to be printed and enjoyed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-blue-600">Can I create multiple pages?</h3>
                <p className="text-gray-600">Yes! You can create as many coloring pages as you want and even organize them into custom coloring books.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
