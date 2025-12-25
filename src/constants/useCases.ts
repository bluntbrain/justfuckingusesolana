// blockchain use cases data with articles and solana apps

export interface Article {
  title: string;
  url: string;
}

export interface UseCase {
  id: number;
  title: string;
  description: string;
  whyItMatters: string;
  category: string;
  articles: Article[];
  solanaApps: string[];
}

export const categories = [
  "All",
  "Financial Services",
  "Digital Ownership",
  "Supply Chain",
  "Governance & Voting",
  "Real World Assets",
  "Social & Creator Economy",
  "Infrastructure & Data",
] as const;

export type Category = (typeof categories)[number];

export const useCases: UseCase[] = [
  // financial services (1-10)
  {
    id: 1,
    title: "Cross-Border Payments",
    description: "Instant, low-fee international money transfers without intermediaries",
    whyItMatters: "Traditional cross-border payments take days and cost 6-7% in fees. Blockchain settles in seconds for fractions of a cent.",
    category: "Financial Services",
    articles: [
      { title: "Visa Launches USDC Settlement on Solana", url: "https://www.coindesk.com/business/2025/12/16/visa-brings-circle-s-usdc-settlement-to-u-s-banks-following-usd3-5-billion-stablecoin-pilot" },
      { title: "Circle expands USDC on Solana", url: "https://cryptoslate.com/circle-expands-support-for-solana-as-it-becomes-top-network-for-cross-border-payments/" },
    ],
    solanaApps: ["Circle USDC", "Solana Pay"],
  },
  {
    id: 2,
    title: "Decentralized Lending",
    description: "Borrow and lend without banks, using crypto as collateral",
    whyItMatters: "No credit checks, instant liquidity, and transparent rates. Solana DeFi lending reached $2.2B+ TVL in 2024.",
    category: "Financial Services",
    articles: [
      { title: "Best Solana Lending Protocols 2025", url: "https://learn.backpack.exchange/articles/best-solana-lending-protocols-2025" },
      { title: "Solana's Lending Market Insights", url: "https://solanafloor.com/news/solanas-lending-market-onchain-insights-from-kamino-marginfi-and-save" },
    ],
    solanaApps: ["Kamino", "Marginfi", "Save", "Jupiter Lend"],
  },
  {
    id: 3,
    title: "Stablecoins",
    description: "Programmable money pegged to fiat currencies for stable transactions",
    whyItMatters: "USDC on Solana processed $215B in transfers in July 2025. Enables stable value without volatility.",
    category: "Financial Services",
    articles: [
      { title: "PayPal USD Now Available on Solana", url: "https://solana.com/news/paypal-pyusd-on-solana" },
      { title: "Solana's Stablecoin Surge", url: "https://veltasium.medium.com/solanas-stablecoin-surge-real-money-real-fast-f77f2427b6eb" },
    ],
    solanaApps: ["USDC", "USDT", "PYUSD", "USDP"],
  },
  {
    id: 4,
    title: "Remittances",
    description: "Send money home to family abroad with minimal fees",
    whyItMatters: "Global remittances hit $905B in 2024. Traditional fees average 6.5% - blockchain cuts this to near zero.",
    category: "Financial Services",
    articles: [
      { title: "Western Union Teaming Up With Solana", url: "https://finance.yahoo.com/news/western-union-teaming-solana-heres-091500630.html" },
      { title: "Top Cross-Border Remittances on Solana", url: "https://solanacompass.com/projects/category/rwa/remittances" },
    ],
    solanaApps: ["Sling Money", "Sphere", "CFX Labs"],
  },
  {
    id: 5,
    title: "Micropayments",
    description: "Pay fractions of a cent for content, APIs, or services",
    whyItMatters: "Solana's $0.00025 fees make sub-cent payments viable for the first time. Enables new monetization models.",
    category: "Financial Services",
    articles: [
      { title: "Streamflow: Streaming Payments on Solana", url: "https://blog.superteam.fun/p/streamflow-enabling-streaming-payments" },
      { title: "Bitcoin Mining Micropayments on Solana", url: "https://build.superteam.fun/ideas/bitcoin-mining-micropayments-pool-on-solana" },
    ],
    solanaApps: ["Code", "Streamflow", "Superstream"],
  },
  {
    id: 6,
    title: "Payroll Automation",
    description: "Stream salaries by the second to employees worldwide",
    whyItMatters: "Zebec processed $500M+ in payroll. Workers get paid every second instead of waiting for payday.",
    category: "Financial Services",
    articles: [
      { title: "Zebec Network Passes $400M in Payroll", url: "https://coinchapter.com/zebec-network-zbcn-passes-400m-in-payroll-volume/" },
      { title: "Zebec Connects Solana Payroll to FedNow", url: "https://coinchapter.com/zebec-network-connects-solana-payroll-to-fednow-via-natpay/" },
    ],
    solanaApps: ["Zebec", "Streamflow"],
  },
  {
    id: 7,
    title: "Invoice Factoring",
    description: "Tokenize invoices for immediate liquidity",
    whyItMatters: "SMEs face $1.7T trade finance gap. Tokenized invoices unlock instant capital and reduce fraud.",
    category: "Financial Services",
    articles: [
      { title: "Blockchain in Invoice Factoring", url: "https://vivacf.net/insights/blockchain-invoice-factoring/" },
      { title: "Invoice Markets Tokenization", url: "https://www.2tokens.org/invoice-markets" },
    ],
    solanaApps: ["Credix"],
  },
  {
    id: 8,
    title: "Crowdfunding",
    description: "Raise funds globally without platform fees or gatekeepers",
    whyItMatters: "Cubik facilitated $150K+ in matching funds using quadratic funding on Solana.",
    category: "Financial Services",
    articles: [
      { title: "Best Crowdfunding Apps on Solana", url: "https://solanacompass.com/projects/category/community/crowdfunding" },
      { title: "Solana Grants and Funding", url: "https://solana.org/grants-funding" },
    ],
    solanaApps: ["Cubik", "Solanium", "SeedList"],
  },
  {
    id: 9,
    title: "Insurance Claims",
    description: "Automate claim payouts with smart contracts",
    whyItMatters: "Smart contracts eliminate fraud and reduce processing from weeks to seconds.",
    category: "Financial Services",
    articles: [
      { title: "Smart Contracts in Insurance", url: "https://www.scnsoft.com/insurance/smart-contracts" },
      { title: "Blockchain Insurance Examples", url: "https://builtin.com/blockchain/blockchain-insurance-companies" },
    ],
    solanaApps: ["Parametric Insurance Protocols"],
  },
  {
    id: 10,
    title: "Savings Accounts",
    description: "Earn yield on deposits through DeFi protocols",
    whyItMatters: "Solana staking yields ~7% APY. Liquid staking with Marinade offers 10%+ APY.",
    category: "Financial Services",
    articles: [
      { title: "Solana Staking", url: "https://solana.com/staking" },
      { title: "Solana Liquid Staking Guide", url: "https://phantom.com/learn/crypto-101/solana-liquid-staking" },
    ],
    solanaApps: ["Marinade", "Jito", "JPool", "Phantom Staking"],
  },

  // digital ownership (11-20)
  {
    id: 11,
    title: "NFT Art",
    description: "Prove ownership and authenticity of digital artwork",
    whyItMatters: "Magic Eden holds 36.7% NFT market share with $122M monthly volume. Artists earn royalties on secondary sales.",
    category: "Digital Ownership",
    articles: [
      { title: "Top Solana NFT Marketplaces", url: "https://phantom.com/learn/crypto-101/top-solana-marketplaces-to-explore" },
      { title: "Magic Eden - Top Marketplace", url: "https://www.coingecko.com/research/publications/top-nft-marketplaces" },
    ],
    solanaApps: ["Magic Eden", "Tensor", "Exchange Art"],
  },
  {
    id: 12,
    title: "Music Royalties",
    description: "Artists get paid directly when their music is played",
    whyItMatters: "Audius has 1M+ monthly listeners. Artists keep their royalties without intermediaries taking 70%+.",
    category: "Digital Ownership",
    articles: [
      { title: "Audius: Revolutionizing Music Streaming", url: "https://solanacompass.com/learn/Validated/bringing-blockchain-to-music-streaming-w-ray-jacobson-audius" },
      { title: "What is Audius?", url: "https://decrypt.co/resources/what-is-audius-the-decentralized-music-sharing-and-streaming-service" },
    ],
    solanaApps: ["Audius"],
  },
  {
    id: 13,
    title: "Gaming Assets",
    description: "Own in-game items, skins, and characters across games",
    whyItMatters: "Star Atlas enables true ownership of ships and assets worth real money. STEPN pioneered move-to-earn.",
    category: "Digital Ownership",
    articles: [
      { title: "Top Solana Games 2024", url: "https://nftandgamefi.com/2024/04/08/top-solana-games-to-look-for-in-2024/" },
      { title: "Star Atlas Overview", url: "https://solana.com/news/star-atlas-crypto-about-release-date" },
    ],
    solanaApps: ["Star Atlas", "STEPN", "Aurory", "Genopets"],
  },
  {
    id: 14,
    title: "Domain Names",
    description: "Own censorship-resistant web domains",
    whyItMatters: "247K+ .sol domains registered. Pay once, own forever - no annual renewal fees.",
    category: "Digital Ownership",
    articles: [
      { title: "Solana Name Service Rebrand", url: "https://cryptobriefing.com/sns-rebrand-solana-service/" },
      { title: "How to Create a .sol Domain", url: "https://www.quicknode.com/guides/solana-development/getting-started/how-to-create-a-sol-domain-using-solana-naming-service" },
    ],
    solanaApps: ["SNS", "Bonfida"],
  },
  {
    id: 15,
    title: "Digital Collectibles",
    description: "Trade cards, memorabilia, and limited editions",
    whyItMatters: "Verifiable scarcity and provenance. Collections like Tensorians saw major volume in 2024.",
    category: "Digital Ownership",
    articles: [
      { title: "Best Solana NFTs", url: "https://www.okx.com/en-us/learn/best-solana-nfts-marketplaces" },
      { title: "Top NFT Platforms on Solana 2024", url: "https://crypto.com/us/university/top-solana-nft-platforms-2024" },
    ],
    solanaApps: ["Magic Eden", "Tensor", "DRiP"],
  },
  {
    id: 16,
    title: "Ticketing",
    description: "Eliminate fake tickets and scalping with verifiable passes",
    whyItMatters: "XP hosts 34M tickets from 110K+ events. KYD Labs services 150K fans monthly.",
    category: "Digital Ownership",
    articles: [
      { title: "XP: Ticket Selling Powered by Solana", url: "https://solana.com/news/case-study-xp" },
      { title: "KYD Labs TICKS Protocol", url: "https://solanacompass.com/learn/breakpoint-25/nft-ticketing-doesnt-work-and-were-selling-to-ticketmaster-kyd-labs" },
    ],
    solanaApps: ["XP", "KYD Labs", "Tix Token"],
  },
  {
    id: 17,
    title: "Certificates",
    description: "Issue tamper-proof diplomas, licenses, and credentials",
    whyItMatters: "Credential fraud increased 78% in 5 years. Coca-Cola HBC now verifies employee certificates on Solana.",
    category: "Digital Ownership",
    articles: [
      { title: "Coca-Cola Uses Solana for Certificates", url: "https://en.cryptonomist.ch/2024/02/29/coca-cola-hbc-uses-solanas-blockchain-to-verify-personnel-certificates/" },
      { title: "Solana Attestation Service", url: "https://www.bitget.site/news/detail/12560604776848" },
    ],
    solanaApps: ["ALL.ART", "Solana Attestation Service"],
  },
  {
    id: 18,
    title: "Patents & IP",
    description: "Timestamp and prove invention ownership",
    whyItMatters: "$100B+ in fake goods annually. Blockchain timestamps provide immutable proof of creation.",
    category: "Digital Ownership",
    articles: [
      { title: "Blockchain in Intellectual Property", url: "https://abounaja.com/blog/blockchain-technology-and-intellectual-property" },
      { title: "Patents as NFTs Research", url: "https://www.nature.com/articles/s41598-022-05920-6" },
    ],
    solanaApps: ["Proof-of-existence protocols"],
  },
  {
    id: 19,
    title: "Digital Identity",
    description: "Own and control your online identity",
    whyItMatters: "Civic provides on-chain identity verification. Users control what data they share.",
    category: "Digital Ownership",
    articles: [
      { title: "Solana Digital Identity Verification", url: "https://www.bitget.site/news/detail/12560604776848" },
      { title: "$ISERVE Protocol", url: "https://iserveprotocol.com/" },
    ],
    solanaApps: ["Civic", "Solana Attestation Service"],
  },
  {
    id: 20,
    title: "Memberships",
    description: "Token-gated access to communities and services",
    whyItMatters: "NFT market valued at $3.6B in 2024, projected to hit $22.8B by 2034.",
    category: "Digital Ownership",
    articles: [
      { title: "Token Gating Tools on Solana", url: "https://www.alchemy.com/dapps/list-of/token-gating-tools-on-solana" },
      { title: "Token Gating for Retailers", url: "https://www.shopify.com/blog/token-gating" },
    ],
    solanaApps: ["Minty", "Novel", "Grapes", "Collab.Land"],
  },

  // supply chain (21-26)
  {
    id: 21,
    title: "Product Authenticity",
    description: "Verify if luxury goods are genuine",
    whyItMatters: "70% decrease in counterfeit incidents for brands using blockchain. LVMH's Aura consortium tracks luxury items.",
    category: "Supply Chain",
    articles: [
      { title: "Blockchain Luxury Authentication", url: "https://www.verix.io/blog/blockchain-luxury-authentication" },
      { title: "Enterprise Blockchain for Authenticity", url: "https://www.ibm.com/blog/enterprise-blockchain-for-verifying-product-authenticity/" },
    ],
    solanaApps: ["Product verification protocols"],
  },
  {
    id: 22,
    title: "Food Traceability",
    description: "Track food from farm to table",
    whyItMatters: "Blockchain enables tracing food sources in seconds vs weeks. Prevents foodborne illness outbreaks.",
    category: "Supply Chain",
    articles: [
      { title: "Blockchain for Food Traceability", url: "https://tracextech.com/blockchain-for-food-traceability/" },
      { title: "From Source to Stomach - WEF", url: "https://www.weforum.org/stories/2024/08/blockchain-food-supply-chain/" },
    ],
    solanaApps: ["Agricultural supply chain protocols"],
  },
  {
    id: 23,
    title: "Pharmaceutical Tracking",
    description: "Prevent counterfeit drugs",
    whyItMatters: "Counterfeit medications cause 1M+ deaths annually. Blockchain ensures drug provenance.",
    category: "Supply Chain",
    articles: [
      { title: "PharmaChain: Blockchain Drug Supply Chain", url: "https://www.sciencedirect.com/science/article/pii/S2405844023051654" },
      { title: "Combating Counterfeit Drugs", url: "https://www.spydra.app/blog/from-pills-to-tokens-combatting-counterfeit-medicines-with-blockchain-technology" },
    ],
    solanaApps: ["Pharmaceutical verification protocols"],
  },
  {
    id: 24,
    title: "Shipping Logistics",
    description: "Real-time tracking with immutable records",
    whyItMatters: "Logistics blockchain market projected to reach $95.3B by 2034. Immutable records prevent fraud.",
    category: "Supply Chain",
    articles: [
      { title: "Blockchain in Logistics - DHL", url: "https://www.dhl.com/discover/en-hk/logistics-advice/logistics-insights/blockchain-technology-in-logistics" },
      { title: "Blockchain in Shipping", url: "https://www.marinelink.com/articles/maritime/blockchain-in-shipping-revolutionizing-global-supply-chains-101643" },
    ],
    solanaApps: ["Logistics tracking protocols"],
  },
  {
    id: 25,
    title: "Sustainability Proof",
    description: "Verify eco-friendly claims with on-chain data",
    whyItMatters: "ESG assets to exceed $40T by 2030. Blockchain ensures transparent sustainability claims.",
    category: "Supply Chain",
    articles: [
      { title: "Blockchain Carbon Credits Tokenization", url: "https://www.spydra.app/esg-carbon-credits-tokenization" },
      { title: "JPMorgan Blockchain for Carbon Credits", url: "https://www.esgtoday.com/jpmorgan-launches-blockchain-tokenization-for-carbon-credits/" },
    ],
    solanaApps: ["ESG verification protocols"],
  },
  {
    id: 26,
    title: "Inventory Management",
    description: "Transparent stock levels across suppliers",
    whyItMatters: "Real-time visibility reduces waste and prevents stockouts. IoT + blockchain enables automated tracking.",
    category: "Supply Chain",
    articles: [
      { title: "Blockchain in Logistics", url: "https://www.inboundlogistics.com/articles/blockchain-in-logistics/" },
      { title: "How Blockchain Revolutionizes Supply Chains", url: "https://wtdc.com/how-blockchain-is-revolutionizing-the-logistics-and-shipping-industries/" },
    ],
    solanaApps: ["Inventory management protocols"],
  },

  // governance & voting (27-32)
  {
    id: 27,
    title: "DAO Governance",
    description: "Decentralized organizations with token-based voting",
    whyItMatters: "Realms hosts 97% of Solana DAOs, managing $1.5B in treasury.",
    category: "Governance & Voting",
    articles: [
      { title: "Deep Dive: Solana DAOs & Governance", url: "https://blog.syndica.io/deep-dive-solana-daos-governance-july-2024/" },
      { title: "Realms Platform", url: "https://realms.today/" },
    ],
    solanaApps: ["Realms", "MetaDAO", "Tribeca"],
  },
  {
    id: 28,
    title: "Corporate Voting",
    description: "Shareholder votes that are transparent and verifiable",
    whyItMatters: "Eliminates vote manipulation and provides instant results with full audit trail.",
    category: "Governance & Voting",
    articles: [
      { title: "Top DAO Voting Mechanisms 2024", url: "https://www.krayondigital.com/blog/top-dao-voting-mechanisms-compared-2024" },
      { title: "Realms-Based DAOs on Solana", url: "https://medium.com/@jhamanish6291/realms-based-daos-on-solana-true-governance-tangible-value-and-a-community-driven-future-be019ff82aa7" },
    ],
    solanaApps: ["Realms"],
  },
  {
    id: 29,
    title: "Community Decisions",
    description: "Let token holders decide project direction",
    whyItMatters: "Jupiter used DAO voting to select deBridge for their launchpad. Community-driven decisions build trust.",
    category: "Governance & Voting",
    articles: [
      { title: "Deep Dive: Solana DAOs August 2024", url: "https://blog.syndica.io/deep-dive-solana-daos-governance-august-2024/" },
      { title: "Realms: Democratizing DAO Participation", url: "https://medium.com/@tobs.x/realms-democratizing-dao-participation-on-solana-f9173f9f896c" },
    ],
    solanaApps: ["Realms", "Jupiter Governance"],
  },
  {
    id: 30,
    title: "Grant Allocation",
    description: "Transparent distribution of community funds",
    whyItMatters: "Solana Foundation provides milestone-based grants. Superteam offers microgrants for emerging markets.",
    category: "Governance & Voting",
    articles: [
      { title: "Solana Grants and Funding", url: "https://solana.org/grants-funding" },
      { title: "Marinade Open Doors Program", url: "https://marinade.finance/blog/introducing-the-open-doors-program" },
    ],
    solanaApps: ["Cubik", "Superteam Earn", "Solana Foundation"],
  },
  {
    id: 31,
    title: "Proposal Systems",
    description: "Submit and vote on changes without intermediaries",
    whyItMatters: "DAO formation on Realms increased 84% in August 2024. Now 1,131+ DAOs on the platform.",
    category: "Governance & Voting",
    articles: [
      { title: "How to Participate in Solana Governance", url: "https://crypto.com/en/university/how-to-participate-in-solana-governance" },
      { title: "Best DAO Tools on Solana", url: "https://solanacompass.com/projects/category/dao-tools" },
    ],
    solanaApps: ["Realms", "Squads"],
  },
  {
    id: 32,
    title: "Quadratic Voting",
    description: "Fair voting that prevents whale dominance",
    whyItMatters: "Reduces power concentration. Cubik uses quadratic funding to amplify small donors' impact.",
    category: "Governance & Voting",
    articles: [
      { title: "Quadratic Voting in Blockchain", url: "https://www.mdpi.com/2078-2489/13/6/305" },
      { title: "Quadratic Voting in Web3", url: "https://nextrope.com/quadratic-voting-in-web3/" },
    ],
    solanaApps: ["Cubik"],
  },

  // real world assets (33-38)
  {
    id: 33,
    title: "Real Estate Tokenization",
    description: "Fractional ownership of property",
    whyItMatters: "Only $0.3T tokenized in 2024, projected $4T by 2035. Homebase raised $246K in 2 weeks.",
    category: "Real World Assets",
    articles: [
      { title: "Homebase Case Study on Solana", url: "https://solana.com/news/case-study-homebase" },
      { title: "Real Estate Tokenization 2025", url: "https://4irelabs.com/articles/real-estate-tokenization/" },
    ],
    solanaApps: ["Homebase"],
  },
  {
    id: 34,
    title: "Stock Tokenization",
    description: "24/7 trading of traditional securities",
    whyItMatters: "Kraken launched 24/7 tokenized stock trading on Solana. BlackRock CEO predicts all stocks will be tokenized.",
    category: "Real World Assets",
    articles: [
      { title: "Robinhood CEO: Tokenization Will Unlock 24/7 Markets", url: "https://finance.yahoo.com/news/robinhood-ceo-says-tokenization-unlock-223130354.html" },
      { title: "How Tokenization is Transforming Finance", url: "https://www.weforum.org/stories/2024/12/tokenization-blockchain-assets-finance/" },
    ],
    solanaApps: ["Kraken"],
  },
  {
    id: 35,
    title: "Commodity Trading",
    description: "Trade gold, oil, and commodities on-chain",
    whyItMatters: "Tokenized gold hit $3B market value. Paxos Gold allows ownership of London Good Delivery gold bars.",
    category: "Real World Assets",
    articles: [
      { title: "Paxos Expands to Solana", url: "https://paxos.com/2023/12/22/paxos-expands-to-the-solana-blockchain/" },
      { title: "Tokenized Gold Gains Ground", url: "https://thedefiant.io/news/defi/tokenized-gold-gains-ground-as-crypto-markets-wobble" },
    ],
    solanaApps: ["Paxos"],
  },
  {
    id: 36,
    title: "Carbon Credits",
    description: "Transparent trading of environmental credits",
    whyItMatters: "Carbon credit market reached $114.8B in 2024. JPMorgan is developing tokenized carbon credits.",
    category: "Real World Assets",
    articles: [
      { title: "JPMorgan Blockchain for Carbon Credits", url: "https://www.esgtoday.com/jpmorgan-launches-blockchain-tokenization-for-carbon-credits/" },
      { title: "Carbon Credit Tokenization Guide", url: "https://www.zoniqx.com/resources/carbon-credit-tokenization-all-you-need-to-know-about-green-finance" },
    ],
    solanaApps: ["KlimaDAO integration"],
  },
  {
    id: 37,
    title: "Art Fractionalization",
    description: "Co-own expensive masterpieces",
    whyItMatters: "Enables art investment starting at $50. Each share is an NFT with ownership rights.",
    category: "Real World Assets",
    articles: [
      { title: "NFTs: Product Authentication", url: "https://lumenalta.com/labs/nfts-product-authentication" },
      { title: "Token Gating for Retailers", url: "https://www.shopify.com/blog/token-gating" },
    ],
    solanaApps: ["Magic Eden", "Tensor"],
  },
  {
    id: 38,
    title: "Revenue Sharing",
    description: "Automatic profit distribution to token holders",
    whyItMatters: "Aerodrome distributed $100.7M in Q4 2024 to token holders. Smart contracts automate payouts.",
    category: "Real World Assets",
    articles: [
      { title: "Revenue Sharing for Token Holders", url: "https://4pillars.io/en/issues/can-we-expect-revenue-sharing-for-token-holders" },
      { title: "Rise of Revenue-Sharing Tokens", url: "https://blogs.cfainstitute.org/investor/2025/01/24/beyond-speculation-the-rise-of-revenue-sharing-tokens/" },
    ],
    solanaApps: ["Raydium", "Marinade"],
  },

  // social & creator economy (39-44)
  {
    id: 39,
    title: "Content Monetization",
    description: "Get paid directly by fans, no platform cut",
    whyItMatters: "DRiP grew from 100K to 800K wallets. Creators earn from micropayments as small as 0.1 cent.",
    category: "Social & Creator Economy",
    articles: [
      { title: "How DRiP is Upending Web2 Revenue Models", url: "https://solanacompass.com/learn/Unlayered/how-drip-is-upending-web-2-creator-revenue-models-i-vibhu-drip-recorded-at-breakpoint-2024" },
      { title: "DRiP Raises $8M to Empower Creators", url: "https://dailycoin.com/solana-based-drip-raises-8m-to-empower-creators/" },
    ],
    solanaApps: ["DRiP", "Access Protocol"],
  },
  {
    id: 40,
    title: "Social Tokens",
    description: "Creators issue their own currency for fans",
    whyItMatters: "Enables direct creator-fan economies. Fans invest in creators they believe in.",
    category: "Social & Creator Economy",
    articles: [
      { title: "Solana's Growing Ecosystem: Social Tokens", url: "https://solanacompass.com/learn/Lightspeed/cryptos-ultimate-vision-whos-building-on-solana" },
      { title: "SocialFi Projects on Solana", url: "https://www.bee.com/41632.html" },
    ],
    solanaApps: ["DRiP", "Tribe.fun"],
  },
  {
    id: 41,
    title: "Tipping",
    description: "Instant tips to streamers and content creators",
    whyItMatters: "Solana Actions and Blinks enable tipping directly from social media posts.",
    category: "Social & Creator Economy",
    articles: [
      { title: "Deep Dive: Creator Tools on Solana", url: "https://yashhsm.medium.com/deep-dive-creator-tools-on-solana-f01b6bd68960" },
      { title: "Solana Actions and Blinks", url: "https://web3.okx.com/learn/what-are-solana-actions-blinks" },
    ],
    solanaApps: ["Solana Tip Jar", "SolanaTip", "Blinks"],
  },
  {
    id: 42,
    title: "Subscription NFTs",
    description: "Access content through token ownership",
    whyItMatters: "No recurring payments - own the token, access the content. Creators build sustainable income.",
    category: "Social & Creator Economy",
    articles: [
      { title: "Access Protocol Hub for Monetization", url: "https://support.bittime.com/hc/en-us/articles/9614688262415-Access-Protocol-Launches-New-Access-Hub-to-Monetize-Content-on-Solana" },
      { title: "Token Gating Tools", url: "https://www.alchemy.com/dapps/list-of/token-gating-tools-on-solana" },
    ],
    solanaApps: ["Access Protocol", "DRiP"],
  },
  {
    id: 43,
    title: "Fan Engagement",
    description: "Exclusive experiences for token holders",
    whyItMatters: "Artists like Travis Scott use token-gated experiences. Builds deeper fan connections.",
    category: "Social & Creator Economy",
    articles: [
      { title: "KYD Labs Ticketing", url: "https://solanacompass.com/learn/breakpoint-25/nft-ticketing-doesnt-work-and-were-selling-to-ticketmaster-kyd-labs" },
      { title: "Token Gating for Retailers", url: "https://www.shopify.com/blog/token-gating" },
    ],
    solanaApps: ["KYD Labs", "DRiP", "Minty"],
  },
  {
    id: 44,
    title: "Decentralized Social Media",
    description: "Own your followers and content",
    whyItMatters: "Farcaster now supports Solana addresses. Users own their social graph.",
    category: "Social & Creator Economy",
    articles: [
      { title: "Farcaster vs Lens: Decentralized Social", url: "https://disruptdigi.com/farcaster-vs-lens-who-will-own-the-future-of-decentralized-social/" },
      { title: "Farcaster with Solana Support", url: "https://www.cryptotimes.io/2024/02/23/farcaster-revolutionizes-social-media-with-solana-support/" },
    ],
    solanaApps: ["Farcaster", "Blinks"],
  },

  // infrastructure & data (45-50)
  {
    id: 45,
    title: "Decentralized Storage",
    description: "Store files across a distributed network",
    whyItMatters: "Shadow Drive has 130K daily active users. Arweave provides permanent storage for Solana NFT metadata.",
    category: "Infrastructure & Data",
    articles: [
      { title: "Shadow Drive V2: Decentralized Storage", url: "https://solanacompass.com/learn/Solfate/decentralized-cloud-storage-on-the-solana-network-introducing-shadow-drive-v2-64" },
      { title: "Arweave on Solana", url: "https://solana.com/ecosystem/arweave" },
    ],
    solanaApps: ["Shadow Drive", "Arweave"],
  },
  {
    id: 46,
    title: "Compute Networks",
    description: "Rent out unused computing power",
    whyItMatters: "Render Network processed 63M frames. 40%+ of global GPU capacity is underutilized.",
    category: "Infrastructure & Data",
    articles: [
      { title: "Render Network on Solana", url: "https://solanacompass.com/projects/render-network" },
      { title: "Render Network Milestones 2024", url: "https://blockchain.news/news/render-network-achieves-milestones-expands-capabilities-2024" },
    ],
    solanaApps: ["Render Network"],
  },
  {
    id: 47,
    title: "Oracle Networks",
    description: "Bring real-world data on-chain reliably",
    whyItMatters: "Pyth provides 300-400ms price updates from 90+ publishers. Powers $2.2B+ in Solana DeFi TVL.",
    category: "Infrastructure & Data",
    articles: [
      { title: "Oracles on Solana", url: "https://solana.com/developers/courses/connecting-to-offchain-data/oracles" },
      { title: "Deep Dive into Pyth Network", url: "https://www.vaneck.com/dk/en/blog/digital-assets/deep-dive-into-pyth-network/" },
    ],
    solanaApps: ["Pyth Network", "Switchboard"],
  },
  {
    id: 48,
    title: "VPN Services",
    description: "Decentralized privacy networks",
    whyItMatters: "No central authority logs your data. Boring Protocol uses pay-per-consumption on Solana.",
    category: "Infrastructure & Data",
    articles: [
      { title: "Boring Protocol on Solana", url: "https://solana.com/ecosystem/boringprotocol" },
      { title: "The Rebirth of Privacy on Solana", url: "https://www.arcium.com/articles/the-rebirth-of-privacy-on-solana" },
    ],
    solanaApps: ["Boring Protocol"],
  },
  {
    id: 49,
    title: "Prediction Markets",
    description: "Bet on outcomes of future events",
    whyItMatters: "Polymarket did $3.3B in 2024 election trading. Drift's BET exceeded Polymarket in daily volume.",
    category: "Infrastructure & Data",
    articles: [
      { title: "Polymarket: Blockchain Prediction Market", url: "https://www.finfeedapi.com/blog/polymarket-the-blockchain-prediction-market-changing-how-the-world-forecasts-the-future" },
      { title: "Prediction Markets August 2024", url: "https://crypto.com/en/research/prediction-market-aug-2024" },
    ],
    solanaApps: ["Drift BET"],
  },
  {
    id: 50,
    title: "Data Marketplaces",
    description: "Sell your data directly to buyers",
    whyItMatters: "Ocean Protocol enables data monetization while preserving privacy. Compute-to-data keeps data secure.",
    category: "Infrastructure & Data",
    articles: [
      { title: "Ocean Protocol Data Marketplaces", url: "https://oceanprotocol.com/build/data-marketplaces" },
      { title: "Buy & Sell Private Data", url: "https://oceanprotocol.com/learn/compute-to-data" },
    ],
    solanaApps: ["Data marketplace protocols"],
  },
];
