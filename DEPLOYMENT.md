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

| Type | Name | Content | Proxied | Added |
|---|---|---|---|---|
| Worker | `abiegnusbasecamp.org` | `droid` | Yes | 2026-10-24 |
| CNAME | `www` | `abiegnusbasecamp.org` | Yes | 2026-10-24 |
| MX | `@` | `mail.dnsexit.com` (pri 10) | No | 2026-10-24 |
| MX | `@` | `mail2.dnsexit.com` (pri 20) | No | 2026-10-24 |
| TXT | `@` | `v=spf1 include:dnsexit.com ~all` | No | 2026-10-25 |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:contact@abiegnusbasecamp.org` | No | 2026-10-25 |

**DNS Setup:** Full (Cloudflare nameservers)
**Nameservers:** `autumn.ns.cloudflare.com`, `vicente.ns.cloudflare.com`

**Note:** The placeholder `v=spf1 -all` and null DKIM records that were here
prior to 2026-10-25 have been replaced. SPF now authorises DNSExit as the
outbound mail relay. DMARC is monitor-only (`p=none`) pending confirmation
that all legitimate sending paths pass cleanly; tighten to `p=quarantine` or
`p=reject` once stable.

## Email

- **Provider:** DNSExit Business Email (free tier)
- **Account:** abc_aasc (registered with abiegnusbasecamp@proton.me)
- **Mailbox:** contact@abiegnusbasecamp.org
- **Limits:** 2 mailboxes, 100 MB total storage, 20 outbound messages/day
- **IMAP:** `pop.dnsexit.com:143`, STARTTLS
- **SMTP:** `out.dnsexit.com:587`, STARTTLS
- **Client:** Thunderbird (IMAP)
- **Webmail:** https://webmail.dnsexit.com
- **Configured:** 2026-10-24/25

For bulk sends beyond 20/day (e.g. announcements to members), a mailing list
service (Mailchimp, Brevo, etc.) will be needed as a separate layer.

## DNSSEC

Not yet enabled. Enable via Cloudflare dashboard → abiegnusbasecamp.org →
DNS → Settings → DNSSEC → Configure.

## Wrangler CLI warning

A stale OAuth token on this machine (dated 2026-07-13) is tied to a different
account (`9e03aa45608b7b48ad822c98193b54df`). Do not run `wrangler deploy`
from the CLI without first running `wrangler logout` and re-authenticating to
the correct account. The GitHub → Cloudflare auto-deploy bypasses this entirely
and is the safe path.
