# Keen Keeper

Keen Keeper is a simple friend relationship tracker built with Next.js. It helps users keep important connections organized, review contact history, and get a quick snapshot of relationship status.


## Live Link: https://keen-keeper-mu.vercel.app/
## Live Features
- View a curated list of friends from `public/friends.json`
- Search friends by name
- Open a dynamic friend details page at `/friendDetails/[id]`
- Track quick interactions through Call, Text, and Video actions
- See timeline entries filtered by interaction type
- View friendship analytics with summary cards and a pie chart
- Show toast feedback after each quick check-in

## Pages and Routes

- `/` - Home page with hero section, stats cards, and friend list
- `/time_line` - Timeline page with interaction filters
- `/stats` - Analytics page based on saved interaction data
- `/friendDetails/[id]` - Individual friend profile and quick action panel

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- DaisyUI 5
- Lucide React
- Recharts
- React Toastify
- React Spinners

## Project Structure

```text
src/
  app/
    friendDetails/[id]/
    stats/
    time_line/
  Components/
    Friends/
    Header/
    Footer/
    Stats/
    ContactHis/
    TimlineButton/
  Context/
  Hooks/
public/
  friends.json
  images/
  Icons/
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Available Scripts

- `npm run dev` - Run the app in development mode
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Data Source

- Friend list data is stored locally in `public/friends.json`
- Timeline and analytics data are managed in client-side context during runtime
- The friend details page currently fetches friend data from the deployed JSON source

## Notes

- This project uses the App Router under `src/app`
- Global layout includes a shared header, footer, and toast container
- Styling is primarily handled with Tailwind CSS utility classes and DaisyUI components

## Improvement Ideas

- Add persistent storage for timeline activity
- Connect the "Add Friend" button to a form flow
- Replace remote details fetch with a shared local/server data source

