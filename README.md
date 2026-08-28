# Better Zamboanga City

Better Zamboanga City is an independent, volunteer-maintained civic-information portal under the [BetterGov.ph](https://bettergov.ph/) initiative. It aims to make verified public information, local records, and civic data across Zamboanga City accessible, searchable, and easy to understand.

> **Better Zamboanga City is not an official government website.** It is not owned, operated, endorsed, or approved by the City Government of Zamboanga or any public agency. Always verify time-sensitive transactions and legal matters directly with the responsible city department.

---

## 🚦 Project Status

**Work in Progress / Active Development.** 

The application architecture and static content pipeline are actively being constructed. Public records covering city identity, barangay rosters, public utilities, emergency hotlines, and local ordinances are staged and validated against our verification guidelines prior to live indexing.

### Roadmap & Next Steps

1. Configure the core Astro content collections schema for city documents and datasets.
2. Index verified Zamboanga City public directories and emergency hotlines.
3. Integrate interactive client islands for filtering services and barangay records.
4. Finalize automated accessibility (a11y), link integrity, and responsive layout audits.
5. Deploy preview builds and prepare for official directory verification.

---

## 🛠️ Technical Foundation

The project is built on **Astro** for structured content delivery and React for interactive components.

* **Framework:** [Astro](https://astro.build/) (Static Site Generation / Islands Architecture)
* **Content:** Astro Content Collections
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

### Local Setup

Make sure you have [Node.js](https://nodejs.org/) (v18.17.0+ or v20+) and Git installed.

```bash
# Clone repository
git clone [https://github.com/RALPH22222/better-zamboanga-city.git](https://github.com/RALPH22222/better-zamboanga-city.git)
cd better-zamboanga-city

# Install dependencies
npm install

# Start development server
npm run dev