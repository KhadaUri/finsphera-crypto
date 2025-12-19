# 🚀 Finsphera Crypto - Technical Assessment

A modern, responsive, and resilient cryptocurrency market analyzer built with the latest frontend technologies.

## 🔗 Live Demo & Repo
- **Live URL:** -
- **Repository:** https://github.com/KhadaUri/finsphera-crypto

## 🛠 Tech Stack & Architecture Decisions

This project follows a **Feature-First Architecture** to ensure scalability and maintainability.

- **Next.js 15 (App Router):** Chosen for its robust server-side capabilities and routing performance.
- **TanStack Query (React Query):** Implemented for efficient server state management. It handles caching, deduplication, and loading/error states out of the box.
- **Zustand:** Selected over Redux for global client state (search filters, modal UI) due to its minimal boilerplate and ease of use.
- **Tailwind CSS + clsx:** For rapid, utility-first styling with conditional class management.
- **Framer Motion:** Used to create "Shared Layout Animations" (Morphing) between the grid cards and the details modal, providing a premium, app-like feel.

### 📂 Structure Highlights
- `/store`: Centralized global state (Atomic state management).
- `/lib`: Singleton instances (Axios, QueryClient) and utility helpers.
- `/components`: Reusable UI blocks following atomic design principles.

## 🤖 AI Usage Transparency (Process)

At Finsphera, efficiency is key. Here is how I leveraged AI tools responsibly during development:

1.  **Tailwind & UI:** Accelerated the creation of Dark Mode utility classes using code completion tools.
2.  **Documentation:** Leveraged AI to assist in drafting and formatting this README to ensure clarity and professional tone.

## 🚀 Future Improvements & Roadmap

If I were to continue developing this project for production, I would prioritize:

1.  **Full Feature Implementation:** Develop the actual logic for the "Portfolio", "Analytics", and "Settings" modules, including User Authentication (Login/Logout) and persistent user preferences (saving favorite coins).
2.  **End-to-End Testing:** Add Playwright tests to automate critical user flows (e.g., verifying that clicking a coin opens the correct modal details).

---
*Developed for the Finsphera Technical Assessment.*