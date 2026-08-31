# Contributing to Speed Typing Test WebApp

First off, thank you for taking the time to contribute! 🎉 Contributions from the open-source community make projects like this amazing. 

Please take a moment to review this guide to ensure a smooth and efficient contribution process.

## 🛠️ Local Development Setup

To get the project running locally and ensure your code complies with our automated validation checks, follow these steps:

1. **Fork the Repository:** Click the "Fork" button at the top right of this page to create a copy of this repository on your GitHub account.
2. **Clone Your Fork:** Clone your fork to your local machine:
   ```bash
   git clone https://github.com
   cd Speed_Typing_Test_WebApp
   ```
3. **Install Dependencies:** Initialize npm and install the automated code style, formatting, and linting tools used in this project:
   ```bash
   npm init -y
   npm install eslint stylelint stylelint-config-standard htmlhint prettier --save-dev
   ```

## 🚀 How to Contribute

### 1. Find an Issue
Look through our open GitHub Issues. If you find one you want to work on, leave a comment asking to be assigned to it so multiple people don't work on the same thing simultaneously.

### 2. Create a Branch
Always create a new branch for your work. Keep the branch name short and descriptive (e.g., `feat/wpm-metric` or `fix/accuracy-logic`):
```bash
git checkout -b your-branch-name
```

### 3. Make Your Changes and Format Code
Write your code cleanly. Before committing your work, you **must run the formatter** to ensure your code matches the layout constraints of this repository. Run this command in your terminal:
```bash
npx prettier --write .
```

### 4. Test Code Quality Locally
Our automated GitHub actions workflow checks all Pull Requests for syntax errors. You can preview these checks locally to ensure your code will pass the automated gatekeeper:
- **Check HTML:** `npx htmlhint index.html`
- **Check JavaScript:** `npx eslint script.js --env browser`
- **Check CSS:** `npx stylelint style.css --config stylelint-config-standard`

### 5. Commit and Push
Commit your changes with a clear, concise commit message:
```bash
git add .
git commit -m "feat: implement universal WPM calculations and Enter shortcut"
git push origin your-branch-name
```

### 6. Open a Pull Request
Go to your fork on GitHub, click the **Compare & pull request** button, and fill out the provided template. Make sure to reference the specific issue number you resolved (e.g., `Fixes #1`).

## 📋 Code Review Process
Once your Pull Request is opened:
- Our automated system will test your changes against our layout and coding rules.
- If any check fails, click on the details to see what spacing, formatting, or syntax rule needs correction.
- The project maintainer will review your logic and merge it when it is ready!
