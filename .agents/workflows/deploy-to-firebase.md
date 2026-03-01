---
description: Build the Next.js site, verify for errors, and deploy to Firebase Hosting
---

# @DeployToFirebase

## Trigger
User types `@DeployToFirebase`.

## Steps

// turbo-all

1. **Run the production build.** Execute:
   ```
   npm run build
   ```
   Wait for the build to complete.

2. **Check for build errors.** Inspect the build output:
   - If there are **critical errors**, stop and report them to the user with the full error output. Do **not** proceed to deploy.
   - If there are only **warnings**, note them but continue.

3. **Deploy to Firebase Hosting.** Execute:
   ```
   firebase deploy --only hosting
   ```
   Wait for the deployment to complete.

4. **Report the result.** Provide the user with:
   - ✅ Confirmation of a successful deploy (or ❌ details of any failure).
   - 🔗 The **live Hosting URL** printed by Firebase (e.g., `https://<project-id>.web.app`).
   - ⚠️ Any warnings from the build step.
