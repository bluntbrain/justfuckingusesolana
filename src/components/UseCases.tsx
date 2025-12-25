"use client";

import { useState, useMemo, useEffect } from "react";
import { useCases, categories, type UseCase, type Category } from "@/constants/useCases";

// category colors for visual distinction
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Financial Services": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  "Digital Ownership": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  "Supply Chain": { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
  "Governance & Voting": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  "Real World Assets": { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
  "Social & Creator Economy": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
  "Infrastructure & Data": { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30" },
};

export function UseCases() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // close drawer when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const openDrawer = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedUseCase(null), 300);
  };

  // filter use cases based on search and category
  const filteredUseCases = useMemo(() => {
    return useCases.filter((uc) => {
      const matchesSearch =
        searchQuery === "" ||
        uc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.solanaApps.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || uc.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // group by category for display
  const groupedUseCases = useMemo(() => {
    if (selectedCategory !== "All") {
      return { [selectedCategory]: filteredUseCases };
    }

    const groups: Record<string, UseCase[]> = {};
    filteredUseCases.forEach((uc) => {
      if (!groups[uc.category]) {
        groups[uc.category] = [];
      }
      groups[uc.category].push(uc);
    });
    return groups;
  }, [filteredUseCases, selectedCategory]);

  return (
    <div className="w-full">
      {/* search and filter controls */}
      <div className="mb-8 space-y-4">
        {/* search bar */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search use cases, apps, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-solana-purple/50 focus:ring-1 focus:ring-solana-purple/50 transition-all text-sm md:text-base"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* category filter pills - horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 px-1 -mx-1 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === category
                  ? "bg-solana-purple text-white"
                  : "bg-white/[0.03] text-gray-400 hover:bg-white/[0.06] hover:text-white border border-white/5"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1.5 opacity-60">
                  ({useCases.filter((uc) => uc.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* results count */}
        <p className="text-center text-gray-500 text-xs md:text-sm">
          Showing {filteredUseCases.length} of {useCases.length} use cases
        </p>
      </div>

      {/* use cases grid by category */}
      <div className="space-y-10">
        {Object.entries(groupedUseCases).map(([category, cases]) => (
          <div key={category}>
            {/* category header */}
            {selectedCategory === "All" && (
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                <span className={categoryColors[category]?.text || "text-white"}>{category}</span>
                <span className="text-sm font-normal text-gray-500">({cases.length})</span>
              </h3>
            )}

            {/* cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {cases.map((useCase) => (
                <UseCaseCard
                  key={useCase.id}
                  useCase={useCase}
                  onClick={() => openDrawer(useCase)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* no results */}
      {filteredUseCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No use cases found matching your search.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 text-solana-purple hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* drawer overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[540px] bg-[#0a0a0a] border-l border-white/10 z-50 transform transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedUseCase && (
          <DrawerContent useCase={selectedUseCase} onClose={closeDrawer} />
        )}
      </div>
    </div>
  );
}

// individual use case card component - simplified, no expand
function UseCaseCard({
  useCase,
  onClick,
}: {
  useCase: UseCase;
  onClick: () => void;
}) {
  const colors = categoryColors[useCase.category] || {
    bg: "bg-gray-500/10",
    text: "text-gray-400",
    border: "border-gray-500/30",
  };

  return (
    <button
      onClick={onClick}
      className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-solana-purple/40 hover:bg-white/[0.04] transition-all text-left group"
    >
      {/* header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className={`text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
          {useCase.category}
        </span>
        <span className="text-[10px] md:text-xs text-gray-600">#{useCase.id}</span>
      </div>

      {/* title */}
      <h4 className="text-base md:text-lg font-bold text-white mb-1.5 group-hover:text-solana-green transition-colors">
        {useCase.title}
      </h4>

      {/* description */}
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
        {useCase.description}
      </p>

      {/* solana apps tags */}
      <div className="flex flex-wrap gap-1">
        {useCase.solanaApps.slice(0, 2).map((app, i) => (
          <span key={i} className="text-[10px] md:text-xs px-1.5 py-0.5 rounded bg-solana-green/10 text-solana-green">
            {app}
          </span>
        ))}
        {useCase.solanaApps.length > 2 && (
          <span className="text-[10px] md:text-xs px-1.5 py-0.5 rounded bg-white/5 text-gray-500">
            +{useCase.solanaApps.length - 2}
          </span>
        )}
      </div>

      {/* click hint */}
      <div className="flex items-center justify-end mt-3 text-gray-600 group-hover:text-solana-purple transition-colors">
        <span className="text-[10px] md:text-xs mr-1">Details</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

// drawer content component
function DrawerContent({ useCase, onClose }: { useCase: UseCase; onClose: () => void }) {
  const colors = categoryColors[useCase.category] || {
    bg: "bg-gray-500/10",
    text: "text-gray-400",
    border: "border-gray-500/30",
  };

  return (
    <div className="h-full flex flex-col">
      {/* drawer header */}
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
            {useCase.category}
          </span>
          <span className="text-xs text-gray-500">#{useCase.id}</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* drawer body - scrollable */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {/* title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{useCase.title}</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">{useCase.description}</p>
        </div>

        {/* why it matters */}
        <div className="p-4 rounded-xl bg-solana-purple/10 border border-solana-purple/20">
          <h3 className="text-sm font-semibold text-solana-purple uppercase tracking-wide mb-2">
            Why It Matters
          </h3>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">{useCase.whyItMatters}</p>
        </div>

        {/* solana apps */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Solana Apps
          </h3>
          <div className="flex flex-wrap gap-2">
            {useCase.solanaApps.map((app, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1.5 rounded-lg bg-solana-green/10 text-solana-green border border-solana-green/20"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* articles */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Learn More
          </h3>
          <div className="space-y-2">
            {useCase.articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-solana-purple/30 hover:bg-white/[0.05] transition-all group"
              >
                <svg
                  className="w-4 h-4 mt-0.5 text-solana-purple shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                  {article.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* drawer footer */}
      <div className="p-4 md:p-6 border-t border-white/10">
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
