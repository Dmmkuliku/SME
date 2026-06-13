# Lender Risk Intelligence

A Tailwind + React frontend for banks/lenders to evaluate SMEs, inspect risk scores, and review model explanations.

## Features
- Admin login
- Main dashboard with KPI cards
- SME list with filters
- Individual SME profile page
- Risk analytics page
- Reports page
- Centralized Axios API layer with mock fallback

## Quick start
```bash
npm install
cp .env.example .env
npm run dev
```

## ML / backend integration
Edit `.env`:
```bash
VITE_API_BASE_URL=http://localhost:8000/api
VITE_USE_MOCK_DATA=false
```

Expected endpoints:
- `GET /lender/overview`
- `GET /lender/smes`
- `GET /lender/smes/:id`
- `GET /lender/analytics`
- `GET /lender/reports`

This app is intentionally split into pages and components so you can connect model output fast.
