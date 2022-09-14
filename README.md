# Auth0 Template Script

This is a simple node script that pushes the `template.html` file to auth0 as our universal login template for quick testing in dev.

## Setup

1. Run `npm i`
2. Create a `token.txt` file at the root of the repo containing a token with access to the auth0 management API (can be obtained through the management dashboard)
3. Make changes to `template.html`
4. Push the changes to auth0 by running `node index.js`

**Note: if someone merges a PR in the auth0-config repo, the resulting GitHub action will override any custom template with the one contained in our auth0-config repo**