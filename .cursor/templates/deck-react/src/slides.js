// Deck walks the locked Letter sections in proposal.mdc §4. Do not reorder.
// Fill from this project's files. Do not reuse another project's fees or names.

export const meta = { title: '{{Project name}}', date: '{{Month YYYY}}' };

export const slides = [
  { type: 'title', eyebrow: 'Project Development Proposal', title: '{{Project name}}', lead: '{{Tagline}}', sub: 'Prepared for {{Client}} · by {{Developer}} · {{Version}}' },
  { type: 'points', eyebrow: '1 · Executive Summary', title: '{{Outcome in one line}}', points: ['{{Who it is for}}', '{{What they can do}}', '{{Fee ask}}'] },
  { type: 'points', eyebrow: '2 · Background & Objectives', title: '{{The problem}}', points: ['{{Pain}}', '{{Goal}}', '{{Measure}}'] },
  { type: 'phases', eyebrow: '3 · Scope — Phase 0 through Phase 4', title: 'What this fee builds', phases: [
    ['0', '{{Set-up}}'], ['1', '{{Sample screens}}'], ['2', '{{Live records}}'], ['3', '{{Live connections}}'], ['4', '{{Turn-over}}'],
  ] },
  { type: 'split', eyebrow: '4 · Out of scope', title: 'Not in this fee',
    left: { h: 'Out', points: ['{{item}}'] },
    right: { h: '5 · What you receive', points: ['Admin access', 'Live platform', 'Documentation', 'Source code'] } },
  { type: 'table', eyebrow: '6 · Payment', title: '{{Project fee}}', head: ['When', 'Amount'], rows: [['Kickoff — work starts', '{{amount}}'], ['{{Milestone}}', '{{amount}}'], ['Handover', '{{amount}}']] },
  { type: 'points', eyebrow: '7 · Retainer', title: 'After the warranty', points: ['{{Amount and period, or “Not offered”}}', 'Separate from the project fee', 'Decline in writing'] },
  { type: 'points', eyebrow: '8 · Timeline', title: 'Starts at kickoff, not at signature', points: ['{{Window}}', '{{Phase → when}}'] },
  { type: 'table', eyebrow: '9 · Client costs', title: 'Vendor bills the client pays', head: ['Item', 'Notes'], rows: [['{{Hosting / domain / email / stores}}', '{{as billed}}']] },
  { type: 'split', eyebrow: '10–12', title: 'Assumptions, risks, acceptance',
    left: { h: 'Depends on', points: ['{{Client input}}'] },
    right: { h: 'Done when', points: ['{{Acceptance item}}'] } },
  { type: 'points', eyebrow: '13 · Terms', title: 'Development engagement', points: ['13.1–13.15 — same clauses in every proposal', 'Full text is on the Letter page', 'Philippine law · 14-day termination · non-refundable project fee'] },
  { type: 'points', eyebrow: '14 · Signatures', title: 'Approve Sections 1–13', points: ['{{Client}} — name, title, signature, date', '{{Developer}} — name, title, signature, date'] },
];
