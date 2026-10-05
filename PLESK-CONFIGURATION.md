# Plesk Server Configuration Guide

This guide details the optimal component selection for setting up Plesk, tailored for a lightweight deployment (such as a containerized Next.js app).

## 🛠 Component Recommendations

| # | Plesk Component | Recommendation | Reason / Notes |
|---|-----------------|----------------|----------------|
| 2 | **BIND DNS server** | 🛑 Turn off | Your DNS is managed at your registrar. |
| 3 | **PostgreSQL** | 🛑 Leave off | Not needed. |
| 4 | **Fail2Ban** | 🛡️ Keep | Lightweight, and blocks brute-force logins. |
| 5 | **SELinux policy** | 🛡️ Keep | RHEL runs SELinux; Plesk requires its policy. |
| 6 | **All language localization** | 🛑 Turn off | Saves disk space; English is included by default. |
| 7 | **Git** | ⚙️ Optional | Keep only if you will deploy from Git inside Plesk. |
| 8 | **Resource Controller (Cgroups)** | 🛑 Leave off | Not needed. |
| 9 | **Plesk Migrator** | 🛑 Leave off | Not needed. |
| 10 | **MySQL server** | 💾 Keep | Plesk uses it for its own core database. |
| 11 | **Webmail services** | ✉️ Keep | Required only if you intend to configure mail services. |
| 12 | **Mail hosting (group)** | ✉️ Keep | Required only if you intend to configure mail services. |
| 13 | **Web hosting (group)** | 🔍 Trim | Open this group and optimize (see checklist below). |
| 14 | **Plesk extensions (group)** | 🛑 Leave off | Can be managed and added later as needed. |

---

## 🌐 Web Hosting Group Optimization (Item 13)

When expanding the **Web hosting (group)**, ensure you keep the basics lean and turn off heavy, unnecessary engines:

### ✅ Keep
- [ ] **nginx** (High-performance reverse proxy)
- [ ] **Apache** (Plesk configures nginx in front of Apache by default)
- [ ] **One PHP version with PHP-FPM** (Choose the version required by your stack)

### 🛑 Turn Off
- [ ] Extra PHP versions
- [ ] Python
- [ ] Ruby
- [ ] Tomcat
- [ ] FTP server *(unless you specifically require FTP access)*
- [ ] Traffic statistics tools *(AWStats, Webalizer)*
