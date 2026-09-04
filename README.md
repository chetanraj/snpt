# snpt

[![Netlify Status](https://api.netlify.com/api/v1/badges/10c09a61-be5f-47d1-b2b8-59e23fad9617/deploy-status)](https://app.netlify.com/sites/snpt/deploys)

---

✂️A simple snippets app. Just click on the snippet you need — it's already in your clipboard.

**Live site:** [https://snpt.netlify.app](https://snpt.netlify.app)

## Development

Requires Node.js 20+.

```bash
npm install
npm start      # dev server at http://localhost:5173
npm run build  # production build to dist/
npm test       # run unit tests
```

## Stack

- [Vite](https://vitejs.dev/) + React 18
- [styled-components](https://styled-components.com/)
- [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) for syntax highlighting
- Deployed on [Netlify](https://snpt.netlify.app)
