import React from 'react';
import type { Ordinance } from '../../types/ordinance';

interface Props {
  ordinances: Ordinance[];
  cleanOrdinanceNum: (numStr: string) => string;
  getExternalLink: (ord: Ordinance) => string;
  formatDateStr: (dateStr?: string | null) => string | null;
  toFormalTitleCase: (str: string) => string;
  setActiveModalOrdinance: (ord: Ordinance) => void;
}

export const OrdinanceMobileCard: React.FC<Props> = ({
  ordinances,
  cleanOrdinanceNum,
  getExternalLink,
  formatDateStr,
  toFormalTitleCase,
  setActiveModalOrdinance,
}) => {
  if (ordinances.length === 0) {
    return (
      <div className="p-8 text-center bg-white border border-slate-200 rounded-xl">
        <h3 className="text-base font-bold text-slate-800">No Ordinances Found</h3>
        <p className="text-xs text-slate-500 mt-1">Try resetting search filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {ordinances.map((ord) => {
        const cleanNum = cleanOrdinanceNum(ord.ordinance_number);
        const extUrl = getExternalLink(ord);
        const enactedDate = formatDateStr(ord.date_enacted);
        const approvedDate = formatDateStr(ord.date_approved);
        const formalTitle = toFormalTitleCase(ord.official_title);

        return (
          <div
            key={ord.ordinance_number}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3"
          >
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
              <a
                href={extUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0032A0] font-bold text-sm hover:underline inline-flex items-center gap-1"
              >
                <span>{cleanNum ? `Ordinance No. ${cleanNum}` : ord.ordinance_number}</span>
                <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <div className="text-[11px] font-semibold text-slate-500 text-right shrink-0">
                {enactedDate && <div><span className="font-bold text-slate-700">Enacted:</span> {enactedDate}</div>}
                {approvedDate && <div><span className="font-bold text-slate-700">Approved:</span> {approvedDate}</div>}
                {!enactedDate && !approvedDate && <div><span className="font-bold text-slate-700">Year:</span> {String(ord.ordinance_year || '')}</div>}
              </div>
            </div>

            {/* Larger Title, Medium Font Weight */}
            <a
              href={extUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed hover:text-[#0032A0] block transition-colors"
            >
              {formalTitle}
            </a>

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
              <button
                onClick={() => setActiveModalOrdinance(ord)}
                className="text-slate-600 hover:text-slate-900 font-semibold underline"
              >
                Quick Preview
              </button>

              <a
                href={extUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0032A0] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>View on Ley De Zamboanga</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
