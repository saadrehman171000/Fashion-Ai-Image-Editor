# Fashion Image Background Remover

A modern Next.js app for removing backgrounds from fashion images using AI (Remove.bg). Upload your clothing photos and instantly get high-quality transparent PNGs, perfect for e-commerce, catalogs, or creative projects.

## Features
- Drag-and-drop or browse to upload fashion images (JPEG, PNG, WebP)
- AI-powered background removal (Remove.bg)
- Download processed images with transparent backgrounds
- Clean, ready-to-extend codebase for adding OpenAI or other AI metadata extraction

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/yourusername/fashion-image-background-remover.git
   cd fashion-image-background-remover
   npm install
   ```

2. Add your Remove.bg API key in `app/api/process-image/route.ts`.

3. Run the app:
   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000) and start uploading images!

---

**Ready to add more AI?**  
The backend is set up for easy integration with OpenAI or other vision APIs for fashion metadata extraction.

---