# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| Portfolio OS v2.6.x | :white_check_mark: |
| Earlier versions | :x: |

## Reporting a Vulnerability

**Please do NOT open a public GitHub Issue for security vulnerabilities.**

If you find a security issue (XSS, data exposure, dependency vulnerability, etc.), please report it privately:

**Email:** [i.rishisharma2007@gmail.com](mailto:i.rishisharma2007@gmail.com)  
**Subject:** `[SECURITY] Portfolio — <short description>`

### What to include
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (optional)

### What to expect
- Acknowledgement within **48 hours**
- Fix or mitigation within **7 days** for critical issues
- Credit in the commit message if you'd like

---

## Security Measures in this Project

- **No backend / no database** — static frontend only, minimal attack surface
- **Subresource Integrity (SRI)** hashes on CDN scripts to prevent supply-chain attacks
- **No user data stored** — no cookies, no localStorage beyond session state
- **DevTools detection** — educational easter egg, not a real security control
- **BroadcastChannel** — scoped to same origin only

---

## Learning Resources (Cybersecurity)

Since this portfolio is by a cybersecurity student, here are resources I recommend:

| Resource | Link | Level |
|---|---|---|
| TryHackMe | [tryhackme.com](https://tryhackme.com) | Beginner |
| HackTheBox | [hackthebox.com](https://hackthebox.com) | Intermediate |
| PortSwigger Web Academy | [portswigger.net/web-security](https://portswigger.net/web-security) | Web security |
| OWASP Top 10 | [owasp.org/Top10](https://owasp.org/Top10) | Essential reading |
| CVE Database | [cve.org](https://www.cve.org) | Research |
| NIST NVD | [nvd.nist.gov](https://nvd.nist.gov) | Vulnerability data |
