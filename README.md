# PrayerTimes
Prayer Times Website
## Key Features:

**Display of Prayer Times:**
- Shows all five daily prayers: Fajr (الفجر), Dhuhr (الظهر), Asr (العصر), Maghrib (المغرب), and Isha (العشاء)
- Also includes Sunrise (الشروق) timing
- Times are displayed in large, readable cards with gradient purple headers

**Location Selection:**
- Dropdown menu to switch between cities (currently configured for Riyadh and Makkah)
- City name and current date displayed prominently at the top in Arabic

**API Integration:**
- Uses the Aladhan API (`api.aladhan.com`) to fetch accurate prayer times
- Makes HTTP requests via Axios library
- Retrieves both prayer timings and Hijri calendar dates

**Design:**
- Right-to-left (RTL) layout for Arabic text
- Modern gradient background (deep purple/dark blue)
- Uses Tajawal Arabic font family from Google Fonts
- Responsive card-based layout with shadow effects
- Clean, minimalist interface suitable for mosque displays or personal use

**Technical Stack:**
- Pure HTML/CSS/JavaScript (no frameworks)
- Axios for API calls
- Node.js package management (package.json present)

The application is well-suited for Muslims who want to track daily prayer times, and could easily be extended to include more Saudi cities or other countries.
