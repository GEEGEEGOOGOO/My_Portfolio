# Reference investigation and portfolio improvements
Date: 13 October 2026

## What REA actually captured

The reference was inspected through REA MCP's controlled Chrome scenarios. The capture includes the delivered homepage HTML, the actual main stylesheet, the application and vendor JavaScript, font requests, SVG sprite, five Lottie JSON responses, desktop pixels, and the click-to-scroll sticker section. Local editing and verification used MCP tools as requested.

Main reference evidence: `ev_4b5e34fbf90c80a1838ce7d3edc17a02e1c107c439f49f4cf5d897a77f89e442`.
Sticker-section interaction: `ev_d60969619504987c9fdd38e216895422be514f5b3b3a2cc2faa18bc7a5c109cd`.

## Verified components and code

| Reference component | Observed implementation | Portfolio adaptation |
|---|---|---|
| Capsule button | `.c-button`, label, circular badge, icon; colored pseudo-element; hover background scaleX(1.02), badge scale(1.1), icon spin | Compact label typography, spring press feedback, circle hover feedback, semantic anchors/buttons, visible keyboard focus |
| Tilted headline rail | `.c-rail_rotate` rotates −6°; `Rail` duplicates tracks, fills the screen, and passes speed to RailMove; desktop rail disabled below approximately 999px | Scroll-linked coral engineering rail plus seamless grouped toolkit marquees |
| Speech-bubble accent | `.c-bulle` contains background SVG and a rotated label with staggered transform/opacity entrance | Small tilted engineering annotation and project seals with outcomes |
| Sticker scene | `StickerHover` connects mouseenter/mouseleave and a TimelineMax reveal to normalized scroll progress; initial scale .5 and individual translations/rotations | Original systems, waveform, and graph seals linking to their own project sections |
| Smooth scroll | Bundled Locomotive Scroll v3.6.1; smooth:true, direction capture, default lerp .1 | Native document scrolling plus Motion scroll values for subtle frame movement |
| Animated illustrations | Lottie SVG renderer, loop/autoplay; potdecolle, sandwich, pastouche, voyage, faim JSON files | Lightweight original SVG engineering diagrams; waveform, routing packets, graph node breathing, screen scan |
| Overlay navigation | `MenuToggler` changes `has-nav-open`; large scenario links; animated burger | Working native modal dialog with section links, Escape, focus containment and restoration |
| Motion grammar | Repeated cubic-bezier(.35,.755,.42,.95), .3s feedback, .6s reveals | Shared easing, short spring feedback, staggered section entrance, pause/resume control |
| SVG icons | `assets/images/sprite.svg` referenced by use elements | Existing portfolio SVG icons retained for button badges |
| Color chapters | Default charcoal, green/pink/yellow/red theme backgrounds, light footer | Charcoal hero/work, light introduction, yellow method, pink contact |

Sources: [reference CSS](https://itsnotviolent.com/assets/styles/main.css?v=1.6), [reference application JavaScript](https://itsnotviolent.com/assets/scripts/app.js?v=1.6), [vendor JavaScript](https://itsnotviolent.com/assets/scripts/vendors.js?v=1.6).

The application module registry includes Load, Scroll, MenuToggler, ModalToggler, Rail, RailStatic, StickerHover, StickersFloating, SplitWords, FormContact, Accordion, Modal, Dialogue, DialogueToggler, ModalQuestion, VideoToggler, VideoModal, Recaptcha, Result, HeaderWhite, Cursor, Lottie, Guide, and CookieConsent. Those names are observed in shipped code; their presence does not establish that every module executed on the homepage.

The bundled code explicitly mentions modularJS. The vendor bundle includes GreenSock TweenMax/TimelineMax (version banner 2.1.3) and Lottie/bodymovin. jQuery 3.3.1 is a separate network request. The footer credits Locomotive. This supports a custom modular frontend; there is no basis here to identify a reusable React component kit.

## Typography and palette

The reference declares Plaak (Plaak-56-Ney-Heavy-205TF), Sporting Grotesque regular/bold, and Circular Std Book/Bold. The desktop `.c-heading.-h1` rule is 10rem with negative letter spacing; component and breakpoint overrides matter, so this is not a universal pixel measurement.

Confirmed colors include charcoal #231f20, pink #ffbecf, green #35af60, yellow #f7c749, salmon #f77171, and off-white #f6f6f6.

The updated portfolio keeps that established palette. Plaak is reserved for the big display statements. Circular Std handles compact interface labels and bold editorial copy. Regular body copy uses Arial/Helvetica because the local Circular font file is the bold face only. Sporting Grotesque is limited to the small tilted accent. Headlines and buttons now have explicit responsive size, line-height, and fit rules.

## Problems fixed

The updated starting version had a nonfunctional menu, borrowed campaign characters with unrelated labels, interactive links under an aria-hidden container, too little introductory context, and only one narrow responsive breakpoint. Lottie artwork was not visible in the initial screenshot despite its labels appearing.

The implementation replaces the borrowed character presentation with portfolio-specific illustrations, introduces a clear first-screen statement, connects each seal to a specific project, restores the supplied metrics as proof, presents all four projects in alternating colored frames, and adds scroll reveals, frame rotation/parallax, functional navigation, a reading progress line, and motion controls. Copy about the engineer and all existing project descriptions, links, stacks, and metrics is preserved in intent. No new numerical claims were invented.

No website files or existing assets were deleted. The old Lottie files remain on disk but are no longer imported by the active page.

## Validation and coverage

Production build passes after the final page changes. Chrome scenario checks confirmed menu opening, Escape dismissal, pause state, and navigation to selected work with no page errors. Runtime assertions found no heading/paragraph/button bounds overflow or root horizontal scroll across 320, 375, 414, 768, 1024, and 1440px; modal focus and motion state checks passed. Reduced motion at 414px stopped continuous animation.

One REA process verification returned successful assertion output but an MCP cleanup_incomplete error while macOS withheld a child-process ownership token. That is a process-runner limitation, not a clean tool-success result. The native browser scenario lane continued working. The issue did not require access to personal Chrome windows.

The detailed inspection covers the reference homepage and delivered frontend assets. Original Sass, build configuration, server code, unretrieved source maps, and live behavior of every secondary route remain unknown. This is an adaptation of verified patterns, not a claim to have recovered the original development repository.

Complete REA evidence is exported outside the source tree to:
`/Users/shashankkumar/.codex/visualizations/2026/10/13/01a135bf-69e7-75e1-8218-f1f97b85e1df/rea-reference-evidence.json`.
