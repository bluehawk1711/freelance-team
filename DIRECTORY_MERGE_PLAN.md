# Directory Merge Plan: `app/` + `components/` + `lib/` → `src/`

## Current Structure
```
root/
├── app/               # Next.js App Router (8 files)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── api/contact/route.ts
│   ├── api/newsletter/route.ts
│   ├── api/theme/route.ts
│   └── schema/route.ts
├── components/ui/     # shadcn primitives (4 files)
│   ├── button.tsx     # ONLY exists here
│   ├── card.tsx       # OLD version (conflicts with src/)
│   ├── input.tsx      # OLD version (conflicts with src/)
│   └── textarea.tsx   # OLD version (conflicts with src/)
├── lib/               # Dead code (1 file, identical to src/lib/utils.ts)
│   └── utils.ts
├── src/               # Main app source (55 files)
│   ├── components/ui/ # NEW redesigned components
│   │   ├── card.tsx   # NEW version — keep
│   │   ├── input.tsx  # NEW version — keep
│   │   ├── textarea.tsx # NEW version — keep
│   │   ├── ... (Container, Heading, Text, etc.)
│   │   └── index.ts   # barrel — needs import updates
│   ├── lib/utils.ts   # In-use version (identical to root)
│   └── ... (config, data, hooks, providers, redux, etc.)
├── public/            # Static assets — stays at root
└── design/            # Design images — stays at root
```

## Key Findings
1. **`src/components/ui/{card,input,textarea}.tsx`** are NOT re-exports — they are completely **new redesigned versions** with `data-slot` attributes, grouping features, and `@base-ui/react` integration. They should replace the root shadcn versions.
2. **`root components/ui/button.tsx`** is the only button implementation — no conflict.
3. **`root lib/utils.ts`** and **`src/lib/utils.ts`** are **identical** — root is dead code (no imports resolve to it).
4. **tsconfig.json** has a path override `@/components/ui/* → ./components/ui/*` that needs removal.
5. **No relative imports** from src/ to root/ exist — all use `@/` aliases.

## Merge Steps

### Step 1: Move `app/` → `src/app/`
All 8 files move verbatim. Relative import `./globals.css` in layout.tsx still works.

### Step 2: Merge root `components/ui/` into `src/components/ui/`
- **Add**: `button.tsx` from root → `src/components/ui/button.tsx`
- **Skip (keep new versions)**: `card.tsx`, `input.tsx`, `textarea.tsx`
- **Delete**: root `components/` directory

### Step 3: Delete root `lib/` (duplicate)
- `src/lib/utils.ts` is the authoritative version

### Step 4: Update `tsconfig.json` paths
Remove the override:
```json
// BEFORE
"paths": {
  "@/*": ["./src/*"],
  "@/components/ui/*": ["./components/ui/*"]
}
// AFTER
"paths": {
  "@/*": ["./src/*"]
}
```

### Step 5: Update `components.json` css path
`"css": "app/globals.css"` → `"css": "src/app/globals.css"`

### Step 6: Update `src/components/ui/index.ts` barrel
Change 4 re-exports from `@/components/ui/*` to local `./*` (since after tsconfig change, `@/components/ui/*` will still work, but local imports are cleaner).

## No Changes Needed
- All `@/components/ui` consumers (sections, layout, common) — will automatically resolve to `src/components/ui/` after tsconfig update
- API routes, sitemap, layout — all use `@/` aliases that still work
- Public/ and design/ — stay at root
