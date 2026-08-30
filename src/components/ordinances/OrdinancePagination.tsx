import React from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  totalEntriesCount: number;
  setCurrentPage: (updater: (prev: number) => number) => void;
}

export const OrdinancePagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  totalEntriesCount,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="p-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold bg-slate-50/50">
      <span className="text-slate-500">
        Page {currentPage} of {totalPages} ({totalEntriesCount} total entries)
      </span>

      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-700 disabled:opacity-40"
        >
          Previous
        </button>
        <span className="px-3 py-1 rounded bg-[#0032A0] text-white font-bold">
          {currentPage}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-700 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};
