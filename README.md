# BenchMend

Standalone blog for **Agent-Guided Instruction Repair for Robotics Benchmarks**.

## Preview

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/. No installation or build step is required.

## Contents

- `index.html`: the complete article, authors, result tables and video examples.
- `blog.css`: responsive page styles.
- `blog.js`: paired video playback controls and playback error messages.
- `media/`: only the 13 videos and their 13 poster images used by the article.

Edit the article and tables directly in `index.html`. Videos and posters are served locally. The full episode gallery is linked on Hugging Face and is maintained separately.

The page works at a domain root or a repository subpath. Serve this directory directly with any static web host; no build output or data service is needed. Native video controls and the complete article remain available without JavaScript.
