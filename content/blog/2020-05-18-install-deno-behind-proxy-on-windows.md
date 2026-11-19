---
title: "Installing Deno behind a proxy on Windows"
tags: ["deno", "proxy", "windows"]
date: 2020-05-18
language: en
---

Deno 1.0 came out last week. On Windows, you can install the runtime from PowerShell with the [official installer](https://docs.deno.com/runtime/getting_started/installation/).

```powershell
irm https://deno.land/install.ps1 | iex
```

Behind a corporate proxy, two programs need the proxy address. PowerShell fetches the installer, which calls `curl.exe` to fetch Deno. In a new PowerShell session, replace the example address below with your proxy's address and port. The `-Proxy` argument routes the first request, and `HTTPS_PROXY` routes curl's requests for the rest of the session.

```powershell
$env:HTTPS_PROXY = 'http://proxy.example.com:8080'
Invoke-RestMethod -Proxy $env:HTTPS_PROXY -Uri https://deno.land/install.ps1 | Invoke-Expression
```

If your proxy requires Windows credentials, PowerShell's `-ProxyUseDefaultCredentials` applies only to its own request. In that case, you can download the Windows ZIP from [Deno's releases](https://github.com/denoland/deno/releases) in your authenticated browser. Extract `deno.exe`, add its folder to your user `Path`, and run `deno --version` in a new PowerShell session.
