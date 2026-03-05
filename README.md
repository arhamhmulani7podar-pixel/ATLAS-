# ATLAS - AI Startup Validator

**Validate Your Startup Idea Before You Build It**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://atlas-five-eosin.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

## Overview

ATLAS is a modern AI-powered web application that evaluates startup ideas using advanced AI models and real-world data signals. Instead of wasting months building products nobody wants, founders can use ATLAS to validate their ideas in seconds and get actionable insights.

## What ATLAS Does

Submit your startup idea and get instant analysis:

✅ **Market Demand Analysis** - Analyzes if there's real demand for your idea  
✅ **Competition Breakdown** - Identifies competitive landscape and market saturation  
✅ **Monetization Evaluation** - Assesses revenue potential and pricing strategies  
✅ **Execution Difficulty** - Evaluates technical and operational complexity  
✅ **Viability Score (0-100)** - Gets a brutal, honest feasibility score  
✅ **Strategic Recommendations** - Receives actionable insights for improvement  

## Key Features

### 🎨 Modern Dark UI
- Minimalist, futuristic design aesthetic
- Black-first theme (#0A0A0A) with white text
- Smooth animations and hover effects
- Fully responsive on mobile & desktop

### ⚡ Fast & Production-Ready
- Built with Next.js 14 (App Router)
- TypeScript for type safety
- Tailwind CSS for styling
- Zero build errors

### 🤖 AI-Powered Analysis
- Integrates with OpenAI API (GPT-4o-mini)
- Returns structured JSON responses
- Color-coded result cards (Green/Yellow/Red)
- SVG ring visualization for viability score

### 📱 Full-Stack Application
**Frontend:** Next.js, React, TypeScript, Tailwind CSS  
**Backend:** Node.js API routes with OpenAI integration  
**Deployment:** Vercel (auto-deploy from GitHub)  

## Project Structure

```
ATLAS/
├── app/
│   ├── page.tsx              # Landing page
│   ├── validator/
│   │   └── page.tsx          # Validator input page
│   ├── api/
│   │   └── validate/
│   │       └── route.ts      # OpenAI API endpoint
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms of service
│   ├── about/page.tsx        # About page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Hero.tsx              # Hero section
│   ├── FeatureCard.tsx       # Reusable feature card
│   ├── ValidatorForm.tsx     # Idea input form
│   ├── ResultDashboard.tsx   # Results display
│   └── Footer.tsx            # Footer component
├── lib/
│   └── aiEngine.ts           # AI logic & OpenAI integration
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── .env.local               # Environment variables (not in repo)
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- OpenAI API key (get it at [platform.openai.com](https://platform.openai.com))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arhamhmulani7podar-pixel/ATLAS-.git
   cd ATLAS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. **Connect your GitHub repository to Vercel**
2. **Add environment variable in Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add `OPENAI_API_KEY` with your actual API key
3. **Vercel will auto-deploy on every push to main branch**

**Or deploy with CLI:**
```bash
npm install -g vercel
vercel
```
Then add your `OPENAI_API_KEY` in the Vercel dashboard.

## API Reference

### POST /api/validate

Validates a startup idea and returns analysis.

**Request:**
```json
{
  "idea": "A mobile app that helps users find the cheapest gas stations nearby"
}
```

**Response:**
```json
{
  "market_demand": "High",
  "competition": "Medium",
  "monetization": "Strong",
  "difficulty": "Moderate",
  "score": 76,
  "summary": "Strong market demand with existing competitors. Monetization viable through premium features.",
  "strengths": [
    "Large market with clear user demand",
    "Multiple monetization options",
    "Moderate technical complexity"
  ],
  "weaknesses": [
    "Established competitors in the space",
    "User retention challenges",
    "API dependency on gas station data"
  ]
}
```

## How It Works

1. **User submits startup idea** on the Validator page
2. **Frontend validates input** and shows loading state
3. **Sends POST request to /api/validate**
4. **Backend calls OpenAI API** with structured prompt
5. **Claude analyzes the idea** across 6 key dimensions
6. **Returns structured JSON** with scores and analysis
7. **Frontend renders results** in beautiful dashboard cards

## Design Philosophy

- **No Generic AI Slop:** Every component crafted with intention
- **Dark-First Aesthetic:** Modern, professional appearance (#0A0A0A background)
- **Data-Driven:** Clear, honest scores and honest feedback
- **Mobile-Responsive:** Works flawlessly on all devices
- **Production-Ready:** Clean code, proper error handling, zero build issues

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend Framework | Next.js 14 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Integration | OpenAI API (GPT-4o-mini) |
| Deployment | Vercel |
| Version Control | Git & GitHub |

## Environment Variables

Required variables in `.env.local`:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-api-key-here
```

## Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Available Pages

- **`/`** - Landing page with hero section and features
- **`/validator`** - Main validator interface
- **`/about`** - About ATLAS information
- **`/privacy`** - Privacy policy
- **`/terms`** - Terms of service

## Scoring System Explained

- **0-40:** Drop the idea (high risk, low reward)
- **40-65:** Improve positioning (viable with changes)
- **65-85:** Build MVP (good potential, execute now)
- **85+:** Aggressive execution (strong market fit, go all-in)

## Common Issues & Troubleshooting

### Build Error: "OPENAI_API_KEY is required"
**Solution:** Add `OPENAI_API_KEY` to `.env.local` file

### "ERR_MODULE_NOT_FOUND"
**Solution:** Run `npm install` to install dependencies

### Validator page returns "API error"
**Solution:** Check that your OpenAI API key is valid and has available credits

## Future Enhancements

- [ ] Multi-LLM orchestration (GPT + Claude + Gemini)
- [ ] Competitor scraping (Google Trends, Reddit, YouTube)
- [ ] PDF report generation
- [ ] User authentication & history
- [ ] Premium subscription tiers
- [ ] Slack/Discord bot integration
- [ ] Browser extension

## License

MIT License - feel free to use for personal or commercial projects

## Author

**Arham Mulani** - Student Entrepreneur & Developer  
Building the future of AI-powered startup validation

## Support

If you find ATLAS helpful, please:
- ⭐ Star this repository
- 📢 Share with other founders
- 🐛 Report bugs via Issues
- 💡 Suggest features via Discussions

## Deployment Status

- **Live Site:** [https://atlas-five-eosin.vercel.app](https://atlas-five-eosin.vercel.app)
- **Repository:** [GitHub - ATLAS](https://github.com/arhamhmulani7podar-pixel/ATLAS-)
- **Status:** ✅ Active & Maintained

---

**Built with ❤️ by Arham Mulani**  
*Making startup validation smarter, faster, and more accessible to every founder.*
