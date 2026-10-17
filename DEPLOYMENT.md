# Deployment — Abiegnus Base Camp

## Live URLs

| Address | Status |
|---|---|
| `abiegnusbasecamp.org` | Primary — custom domain |
| `www.abiegnusbasecamp.org` | CNAME → apex, both work |
| `droid.abc-outercollege.workers.dev` | Workers.dev fallback — still publicly accessible |

## Cloudflare account

- **Account:** `abc-outercollege` (not the personal Fourier18 account)
- **Account ID:** `899b2e05feb65d2c3d8687351e5865c8`
- **Worker name:** `droid`
- **Deploy root:** `site/` (no build step)
- **Auto-deploy:** push to `main` → Cloudflare deploys automatically

## DNS records (abiegnusbasecamp.org)

| Type | Name | Content | Proxied |
|---|---|---|---|
| Worker | `abiegnusbasecamp.org` | `droid` | Yes |
| CNAME | `www` | `abiegnusbasecamp.org` | Yes |
| TXT | `@` | `v=spf1 -all` | — |
| TXT | `*._domainkey` | `v=DKIM1; p=` | — |
| TXT | `_dmarc` | `v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;` | — |

**DNS Setup:** Full (Cloudflare nameservers)
**Nameservers:** `autumn.ns.cloudflare.com`, `vicente.ns.cloudflare.com`

## Email

Not yet configured. SPF `-all` and null DKIM are in place to prevent spoofing
until a provider is chosen. When email hosting is set up, update the SPF and
DKIM records accordingly.

## DNSSEC

Not yet enabled. Enable via Cloudflare dashboard → abiegnusbasecamp.org →
DNS → Settings → DNSSEC → Configure.

## Wrangler CLI warning

A stale OAuth token on this machine (dated 2026-07-13) is tied to a different
account (`9e03aa45608b7b48ad822c98193b54df`). Do not run `wrangler deploy`
from the CLI without first running `wrangler logout` and re-authenticating to
the correct account. The GitHub → Cloudflare auto-deploy bypasses this entirely
and is the safe path.
