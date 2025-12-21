import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Apps | Just Fucking Use Solana",
  description: "Discover the most popular apps built on Solana. From DeFi to NFTs to wallets - the ecosystem is thriving.",
};

interface App {
  name: string;
  description: string;
  url: string;
  category: string;
}

const apps: App[] = [
  {
    name: "Pump.fun",
    description: "Launch meme tokens in seconds. The viral token launchpad that took Solana by storm.",
    url: "https://pump.fun",
    category: "Token Launchpad",
  },
  {
    name: "Jupiter",
    description: "The best swap aggregator on Solana. Routes through every DEX to get you the best price.",
    url: "https://jup.ag",
    category: "DEX Aggregator",
  },
  {
    name: "Phantom",
    description: "The most popular Solana wallet. Clean UI, built-in swap, and works everywhere.",
    url: "https://phantom.app",
    category: "Wallet",
  },
  {
    name: "Solflare",
    description: "Feature-rich Solana wallet with staking, swaps, and hardware wallet support.",
    url: "https://solflare.com",
    category: "Wallet",
  },
  {
    name: "Raydium",
    description: "The OG Solana AMM. Deep liquidity pools and yield farming opportunities.",
    url: "https://raydium.io",
    category: "DEX",
  },
  {
    name: "Magic Eden",
    description: "Leading NFT marketplace on Solana. Buy, sell, and discover digital collectibles.",
    url: "https://magiceden.io",
    category: "NFT Marketplace",
  },
  {
    name: "Tensor",
    description: "Pro-grade NFT trading platform. Advanced tools for serious NFT traders.",
    url: "https://tensor.trade",
    category: "NFT Marketplace",
  },
  {
    name: "Marinade Finance",
    description: "Liquid staking protocol. Stake SOL, get mSOL, and keep earning while using DeFi.",
    url: "https://marinade.finance",
    category: "Staking",
  },
  {
    name: "Orca",
    description: "User-friendly DEX with concentrated liquidity. Clean swaps, great UX.",
    url: "https://orca.so",
    category: "DEX",
  },
  {
    name: "Drift Protocol",
    description: "Decentralized perpetual exchange. Trade with up to 10x leverage on-chain.",
    url: "https://drift.trade",
    category: "Perpetuals",
  },
  {
    name: "Meteora",
    description: "Dynamic liquidity protocol. Innovative DLMM pools for better capital efficiency.",
    url: "https://meteora.ag",
    category: "DeFi",
  },
  {
    name: "Kamino Finance",
    description: "Automated liquidity and lending. Maximize your yields with smart vaults.",
    url: "https://kamino.finance",
    category: "DeFi",
  },
  {
    name: "Jito",
    description: "MEV-powered staking. Earn extra rewards from MEV while staking your SOL.",
    url: "https://jito.network",
    category: "Staking",
  },
  {
    name: "Marginfi",
    description: "Decentralized lending and borrowing. Earn yield or leverage your positions.",
    url: "https://marginfi.com",
    category: "Lending",
  },
  {
    name: "Backpack",
    description: "Next-gen wallet and exchange. xNFTs, trading, and a beautiful interface.",
    url: "https://backpack.app",
    category: "Wallet",
  },
  {
    name: "Helium",
    description: "Decentralized wireless network. IoT and mobile coverage powered by Solana.",
    url: "https://helium.com",
    category: "Infrastructure",
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen solana-gradient text-white selection:bg-solana-purple selection:text-white">
      {/* Header */}
      <Section className="pt-20 pb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Popular <span className="text-solana-gradient">Apps</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          The Solana ecosystem is packed with apps people actually use.
          Stop researching and start exploring.
        </p>
      </Section>

      {/* Apps Grid */}
      <Section className="pt-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-white/5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          These apps are just the beginning. The best Solana app might be the one you build next.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="https://solana.com/docs/intro/quick-start" variant="primary">
            Start Building
          </Button>
          <Button href="/" variant="secondary">
            Learn More
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 text-center text-gray-500">
        <p className="mb-4">
          Not affiliated with Solana Foundation. Just tired of slow blockchains.
        </p>
        <p className="text-sm">
          <Link href="/" className="hover:underline text-white/70">Home</Link>
          {" · "}
          <a className="hover:underline text-white/70" href="https://solana.com/docs">Docs</a>
          {" · "}
          <a className="hover:underline text-white/70" href="https://solana.com/developers">Developers</a>
        </p>
      </footer>
    </main>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-solana-purple/50 hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-solana-purple/20 text-solana-purple">
          {app.category}
        </span>
        <svg
          className="w-5 h-5 text-gray-500 group-hover:text-solana-green transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-solana-green transition-colors">
        {app.name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {app.description}
      </p>
    </a>
  );
}
