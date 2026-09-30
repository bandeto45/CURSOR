// Proposal content — data only. Fill from concept-domain.mdc, route-layouts.mdc, and the approved design direction.
// Slide types: title · points · cards · table · swatches · devices · phases · split
// Replace every {{placeholder}}. Keep IDs (F-nn, R-nn, T-nn) identical to the project files.

export const meta = { title: '{{Project name}}', date: '{{Month YYYY}}' };

export const slides = [
  { type: 'title', eyebrow: 'Proposal', title: '{{Project name}}', lead: '{{One-line pitch}}', sub: 'Prepared for {{Client}} · by {{Team}}' },

  { type: 'points', eyebrow: 'Why', title: '{{The problem in one sentence}}', points: ['{{Pain point 1}}', '{{Pain point 2}}', '{{Pain point 3}}'], lead: 'Goal: {{Measurable outcome}}' },

  { type: 'cards', eyebrow: 'Solution', title: '{{Solution headline}}', cards: [
    { h: 'F-01 {{Feature}}', p: '{{Benefit}}' },
    { h: 'F-02 {{Feature}}', p: '{{Benefit}}' },
    { h: 'F-03 {{Feature}}', p: '{{Benefit}}' },
  ] },

  { type: 'cards', eyebrow: 'Who', title: 'Built for {{n}} kinds of users', cards: [
    { h: '{{Role}}', p: '{{What they do here}}' },
    { h: '{{Role}}', p: '{{What they do here}}' },
  ] },

  { type: 'split', eyebrow: 'Scope · v1', title: 'What is in — and what is not',
    left: { h: 'In scope', points: ['{{item}}', '{{item}}'] },
    right: { h: 'Out of scope', points: ['{{item}}', '{{item}}'] } },

  { type: 'swatches', eyebrow: 'Design', title: '{{Direction name}} — {{mood, 3 words}}', lead: '{{Why it fits the users}}',
    swatches: [{ name: 'Primary', hex: '#3b5bdb' }, { name: 'Surface', hex: '#f7f6f3' }, { name: 'Text', hex: '#23262b' }, { name: 'Accent', hex: '#3b5bdb' }],
    foot: 'Type: {{UI font}} / {{Display font}} · Icons: {{Material | Lottie}} · Modes: {{light / dark}}' },

  { type: 'devices', eyebrow: 'Layout · {{Layout Responsive | Normal Responsive}}', title: 'Designed for every screen',
    devices: [{ h: 'Mobile', p: '{{nav + primary layout}}' }, { h: 'Tablet', p: '{{nav + primary layout}}' }, { h: 'Desktop', p: '{{nav + primary layout}}' }],
    lead: 'One project · shared components · a layout per screen class.' },

  { type: 'table', eyebrow: 'Screens', title: 'Key screens',
    head: ['ID', 'Route', 'Pattern', 'Mobile', 'Tablet', 'Desktop'],
    rows: [['R-01', '{{/route}}', '{{pattern}}', '{{…}}', '{{…}}', '{{…}}']] },

  { type: 'points', eyebrow: 'Under the hood', title: '{{Frontend}} · {{Backend}} · {{Database}}',
    points: ['Entities: {{T-01, T-02, …}}', 'Auth: {{model}} · Hosting: {{target}}', 'Live secrets in GitHub Secrets — never in git'] },

  { type: 'phases', eyebrow: 'Plan', title: 'Five phases, one function at a time', phases: [
    ['P1', 'Foundation — concept, design, layouts, schema, plan'],
    ['P2', 'Mock UI — every screen on sample data'],
    ['P3', 'API — endpoint by endpoint'],
    ['P4', 'Integration — screens on the real API'],
    ['P5', 'Cleanup & ship — docs, regression, deploy'],
  ] },

  { type: 'table', eyebrow: 'Risks', title: 'What could go wrong — and the answer', head: ['Risk', 'Impact', 'Mitigation'], rows: [['{{risk}}', '{{impact}}', '{{mitigation}}']] },

  { type: 'points', eyebrow: 'Next', title: 'Approve to start P2', points: ['{{Decision needed}}', '{{Input needed}}', '{{Date}}'], lead: '{{Contact}}' },
];
