import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main className="min-h-screen solana-gradient text-white selection:bg-solana-purple selection:text-white">
      {/* Hero Section */}
      <Section className="flex flex-col items-center text-center pt-32 pb-40">
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
          JUST FUCKING USE <span className="text-solana-gradient">SOLANA</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-medium leading-relaxed">
          Ship real apps with sub‑second UX, fraction‑of‑a‑cent fees, and tooling that doesn’t hate you. Stop debating blockspace on X and just build something that fucking works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="https://solana.com/docs/intro/quick-start" variant="primary">
            Start Building Now
          </Button>
          <Button href="/apps" variant="secondary">
            Explore Popular Apps
          </Button>
        </div>
        <p className="mt-8 text-sm text-gray-500 max-w-2xl">
          Want to see where the network is actually heading? Go watch the <a className="hover:underline text-white/80" href="https://www.youtube.com/watch?v=y2JLwcM-prU&list=PLilwLeBwGuK5yeFH0YLgETacO-Gz4fjml&index=27">Breakpoint talks</a> and stop listening to mid-curvers.
        </p>
      </Section>

      {/* Why Section */}
      <Section id="why" className="border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Solana?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            title="Sub‑second UX"
            description="Fast slots and quick confirmation means your app feels like a normal product, not a science project."
          />
          <Feature 
            title="Fees that don’t bully you"
            description="No $40 swaps, no “gas wars”, no UX hostage situation. You can actually do micro‑stuff."
          />
          <Feature 
            title="Firedancer Speed"
            description="The new independent validator client is rewriting the game. 1M+ TPS in testing means the floor is moving up whether you’re ready or not."
          />
          <Feature 
            title="Token Extensions"
            description="Use Token‑2022 extensions (metadata, transfer fees, transfer hooks, confidential transfer, etc.) instead of duct‑taping custom token logic."
          />
        </div>
      </Section>

      {/* How to Start Section */}
      <Section id="start" className="border-t border-white/5 bg-white/[0.02]">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">How to Fucking Start</h2>
        <div className="max-w-2xl mx-auto space-y-12">
          <Step number="1" title="Get a Wallet">
            Install <a href="https://phantom.app" className="text-solana-purple hover:underline">Phantom</a> or <a href="https://backpack.app" className="text-solana-green hover:underline">Backpack</a>. It takes two minutes. Don't be lazy.
          </Step>
          <Step number="2" title="Set up your dev environment">
            Follow <a href="https://solana.com/docs/intro/installation" className="text-solana-purple hover:underline">Solana’s installation</a> guide. Use devnet while you’re learning. Then run a local validator when you want fast tests and zero bullshit latency.
          </Step>
          <Step number="3" title="Pick a client SDK (and stop overthinking it)">
            <div className="bg-black/50 p-6 rounded-xl border border-white/10 mt-4">
              <code className="text-solana-green">pnpm add @solana/kit</code>
              <div className="mt-3 text-gray-400 text-sm">
                Or legacy: <span className="text-gray-300">pnpm add @solana/web3.js</span>
              </div>
            </div>
          </Step>
          <Step number="4" title="Watch the Breakpoint Talks">
            <div className="text-gray-400 text-lg leading-relaxed">
              If you want to know what the smartest people in the room are actually building, go through the <a href="https://www.youtube.com/watch?v=y2JLwcM-prU&list=PLilwLeBwGuK5yeFH0YLgETacO-Gz4fjml&index=27" className="text-solana-purple hover:underline">Breakpoint playlist</a>. Stop guessing and start knowing.
            </div>
          </Step>
        </div>
      </Section>

      {/* FAQ / Excuses Section */}
      <Section id="faq" className="border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Common Excuses</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <FAQItem
            question="But is it decentralized?"
            answer="Yes. It's a permissionless PoS network with a real validator set. If your bar is 'perfect in theory', you'll never ship anything in practice."
          />
          <FAQItem
            question="What about the outages?"
            answer="Build like an adult: retries, good RPC, proper confirmation, and sane prioritization during spikes. Don't blame the chain because you wrote 'await sendTransaction' and prayed."
          />
          <FAQItem
            question="Rust is too hard."
            answer="Use Anchor if you want sane ergonomics. Use programs only when you need programs. A lot of apps are just clients + accounts + tokens + a couple instructions. Calm down."
          />
        </div>
      </Section>

      {/* Popular Apps Section */}
      <Section id="apps" className="border-t border-white/5 bg-white/[0.02]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Apps People Actually Use</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          The ecosystem isn't theoretical. Millions of transactions per day across DeFi, NFTs, payments, and more.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AppPreview name="Pump.fun" category="Token Launchpad" />
          <AppPreview name="Jupiter" category="DEX Aggregator" />
          <AppPreview name="Phantom" category="Wallet" />
          <AppPreview name="Magic Eden" category="NFT Marketplace" />
        </div>
        <div className="text-center">
          <Button href="/apps" variant="secondary">
            View All Popular Apps →
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center text-gray-500">
        <p className="mb-4">
          Not affiliated with Solana Foundation. Just tired of slow blockchains.
        </p>
        <p className="mb-6">
          Links:{" "}
          <a className="hover:underline text-white/70" href="/apps">Popular Apps</a>
          {" · "}
          <a className="hover:underline text-white/70" href="https://solana.com/docs">Docs</a>
          {" · "}
          <a className="hover:underline text-white/70" href="https://solana.com/docs/tokens/extensions">Token Extensions</a>
          {" · "}
          <a className="hover:underline text-white/70" href="https://www.youtube.com/watch?v=y2JLwcM-prU&list=PLilwLeBwGuK5yeFH0YLgETacO-Gz4fjml&index=27">Breakpoint Talks</a>
        </p>
        <p className="text-sm italic">Built with Next.js, Tailwind, and a lot of caffeine.</p>
      </footer>
    </main>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
      <h3 className="text-2xl font-bold mb-4 text-solana-green">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-solana-purple flex items-center justify-center font-black text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-gray-400 text-lg leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
      <h3 className="text-xl font-bold mb-3 text-solana-purple">{question}</h3>
      <p className="text-gray-400 text-lg">{answer}</p>
    </div>
  );
}

function AppPreview({ name, category }: { name: string; category: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
      <span className="text-xs font-medium px-3 py-1 rounded-full bg-solana-purple/20 text-solana-purple">
        {category}
      </span>
      <h3 className="text-xl font-bold mt-4 text-solana-green">{name}</h3>
    </div>
  );
}
