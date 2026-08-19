# Contributing to Better Zamboanga City

Better Zamboanga City is an independent civic-tech platform under the BetterLGU initiative. It is not affiliated with, operated by, or endorsed by the City Government of Zamboanga. 

Contributions should make verified public information easier to navigate and understand for Zamboangueños without presenting the portal as an official government entity.

---

## 💬 Contributor Communication & Group Chat

Active collaboration and alignment are key to building a cohesive civic platform. 

If you are planning to contribute code, design, or dataset research, **please connect with the core maintainer on Facebook to be added to the Better Zamboanga contributor group chat (GC):**

* **Maintainer:** [Chex](https://web.facebook.com/chexxxyyyy/) *(or direct message via maintainer contact channels)*
* **Purpose:** Real-time feature planning, assigning barangay/dataset research topics, avoiding overlapping pull requests, and general team coordination.

---

## 🔍 Before You Start

- Check the active [Issues](https://github.com/RALPH22222/better-zamboanga-city/issues) and [Pull Requests](https://github.com/RALPH22222/better-zamboanga-city/pulls) before starting work to avoid duplicate efforts.
- Keep each pull request small and focused on a single feature, bug fix, or content record.
- Discuss substantial UI overhauls, database redesigns, or architecture shifts in an Issue or in the contributor chat first.
- Never commit credentials, `.env` files with private keys, or machine-specific artifacts.

---

## 💻 Local Development Workflow

The project uses [Astro](https://astro.build/) with [MDX](https://mdxjs.com/) for content handling.

```bash
# 1. Clone your fork
git clone [https://github.com/YOUR_USERNAME/better-zamboanga-city.git](https://github.com/YOUR_USERNAME/better-zamboanga-city.git)
cd better-zamboanga-city

# 2. Install packages
npm install

# 3. Start local development
npm run dev