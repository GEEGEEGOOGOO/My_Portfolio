export default function ProjectVisual({ type = "systems", className = "" }) {
  return (
    <svg className={`project-visual ${className}`} viewBox="0 0 300 240" fill="none" aria-hidden="true">
      {type === "systems" && <>
        <path className="diagram-route" d="M55 65H150V170H245M150 65H245M55 170H150" />
        <g className="diagram-float"><rect x="25" y="40" width="60" height="50" rx="16" className="diagram-paper"/><path d="M44 65h22m-11-11v22"/></g>
        <rect x="119" y="97" width="62" height="50" rx="15" className="diagram-ink"/>
        <path className="diagram-light" d="m135 122 9 9 22-22"/>
        <g className="diagram-float -delayed"><circle cx="245" cy="65" r="27" className="diagram-paper"/><path d="M235 64h20m-16-9h12m-12 18h12"/></g>
        <circle cx="55" cy="170" r="27" className="diagram-paper"/><path d="m44 170 11-11 11 11-11 11z"/>
        <rect x="216" y="145" width="58" height="50" rx="16" className="diagram-paper"/><path d="M233 170h24m-18-9h12m-12 18h12"/>
        <circle className="diagram-packet diagram-dot" cx="150" cy="65" r="7"/>
      </>}
      {type === "voice" && <>
        <circle cx="150" cy="120" r="90" className="diagram-orbit"/>
        <circle cx="150" cy="120" r="66" className="diagram-orbit -inner"/>
        <g className="waveform">{[25,48,70,90,110,135,110,90,70,48,25].map((h,i)=>
          <rect key={i} x={65+i*16} y={120-h/2} width="7" height={h} rx="3.5" style={{animationDelay: `${i*-.13}s`}}/>)}</g>
        <circle cx="49" cy="74" r="12" className="diagram-paper"/><circle cx="243" cy="173" r="12" className="diagram-ink"/>
        <path d="M41 74h16M49 66v16" strokeWidth="2"/>
      </>}
      {type === "graph" && <>
        <g className="diagram-route"><path d="M150 117 64 63 48 166 150 117 232 53 254 163 150 117 153 210M64 63 232 53M48 166 153 210 254 163"/></g>
        <g className="graph-nodes">{[[64,63,17],[48,166,22],[232,53,23],[254,163,16],[153,210,13]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} className="diagram-paper" style={{animationDelay:`${i*-.4}s`}}/>)}</g>
        <circle cx="150" cy="117" r="35" className="diagram-ink"/>
        <path className="diagram-light" d="m134 116 11-12 11 12m-11-12v29m0 0 16-16"/>
      </>}
      {type === "desktop" && <>
        <rect x="54" y="43" width="192" height="141" rx="24" className="diagram-paper"/>
        <path d="M150 184v27m-36 0h72"/>
        <path className="scan-line" d="M73 88h154"/>
        <path d="M80 100v-25h25m90 0h25v25m0 25v25h-25m-90 0H80v-25" strokeWidth="3"/>
        <path className="diagram-ink" d="M126 111c10-19 38-19 48 0-10 19-38 19-48 0Z"/>
        <circle cx="150" cy="111" r="6" className="diagram-paper"/>
      </>}
    </svg>
  );
}
