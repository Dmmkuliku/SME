# SME Credit Companion

A Tailwind + React frontend for suppliers/distributors to monitor business health, credit score, and loan readiness.

## Features
- Login / register screen
- Business health dashboard with KPIs and charts
- Add transaction form
- Credit score breakdown
- AI insights page
- Loan eligibility page
- Profile/settings page
- API layer ready for ML model integration via Axios

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

Endpoints expected by this frontend:
- `GET /sme/overview`
- `GET /sme/credit-score`
- `GET /sme/insights`
- `GET /sme/eligibility`
- `POST /sme/transactions`
- `GET /sme/profile`

Each page already calls the service layer in `src/lib/api.js`, so you can replace mock responses with your ML API quickly.
