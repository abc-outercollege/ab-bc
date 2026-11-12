# Changelog — Abiegnus Base Camp

Changes to the site and the infrastructure behind it, newest first. Git history has the line-by-line detail; `DEPLOYMENT.md` has the current state of DNS, email and hosting.

## 2026-11-12
- `www.abiegnusbasecamp.org` is now a custom domain on the `droid` Worker and serves the site directly. It had been a proxied CNAME that returned a 522 error.

## 2026-11-10
- Prospectus condensed: the course-of-study section and bullet list were replaced by a short passage under "The Climb Ahead", and the Task paragraph was shortened.
- DKIM fixed: added a `relay._domainkey` CNAME to `dkim.dnsexit.com` in Cloudflare DNS. Outgoing mail from contact@abiegnusbasecamp.org now passes SPF, DKIM and DMARC.
- A Cloudflare auto-deploy skipped one commit; an empty commit re-triggered the build.

## 2026-10-26
- Contact address on all three pages changed to contact@abiegnusbasecamp.org.

## 2026-10-24 to 2026-10-25
- Domain `abiegnusbasecamp.org` attached to the Worker; canonical URL is now the apex.
- Email set up through DNSExit (MX, SPF, DMARC records in Cloudflare DNS).
- Added `sitemap.xml`, `robots.txt` and `llms.txt`.

## 2026-10-17
- Added `DEPLOYMENT.md`.

## 2026-09-09
- AASC 101 renamed Prospectus; Prospectus wording revised.
- Nuit theme renamed Night.

## 2026-09-08
- Menu simplified to a flat list of active links.

## 2026-09-04
- Static rebuild of the site from the WordPress original, deployed on Cloudflare Workers.
- Deployment config pinned in `wrangler.jsonc`.
