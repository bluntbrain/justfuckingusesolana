import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { UseCases } from "@/components/UseCases";

export default function UseCasesPage() {
  return (
    <main className="min-h-screen solana-gradient text-white selection:bg-solana-purple selection:text-white">
      {/* header */}
      <Section className="pt-12 pb-8">
        <div className="flex items-center justify-between mb-8">
          <Button href="/" variant="secondary">
            &larr; Back
          </Button>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-center">
          50 Things Blockchain <span className="text-solana-gradient">Actually Solves</span>
        </h1>
        <p className="text-gray-400 text-center max-w-3xl mx-auto text-lg">
          Not theoretical bullshit. Real problems with real solutions running on Solana right now.
          Click any card to see why it matters and explore relevant articles.
        </p>
      </Section>

      {/* use cases with search and filters */}
      <Section className="pt-0">
        <UseCases />
      </Section>

      {/* cta section */}
      <Section className="border-t border-white/5 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Pick a use case above and start shipping. Solana's got the speed, the tools, and the ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="https://solana.com/docs/intro/quick-start" variant="primary">
            Start Building
          </Button>
          <Button href="/apps" variant="secondary">
            Explore Apps
          </Button>
        </div>
      </Section>

      {/* footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500">
        <p className="mb-4">
          Not affiliated with Solana Foundation. Just tired of slow blockchains.
        </p>
        <p className="text-sm">
          <a className="hover:underline text-white/70" href="/">Home</a>
          {" · "}
          <a className="hover:underline text-white/70" href="/apps">Popular Apps</a>
          {" · "}
          <a className="hover:underline text-white/70" href="https://solana.com/docs" target="_blank" rel="noopener noreferrer">Docs</a>
        </p>
      </footer>
    </main>
  );
}
