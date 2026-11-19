---
title: "Installing Deno behind a proxy on Windows"
tags: ["deno", "proxy", "windows"]
date: 2020-05-18
language: en
---

Deno, a new runtime for JavaScript and TypeScript, came out last week. On Windows, you can install it from PowerShell.

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

On a corporate network, a proxy can prevent that command from downloading the installer. To send the request through the proxy, pass its address and port to `Invoke-WebRequest` (`iwr`). The `-ProxyUseDefaultCredentials` switch tells PowerShell to use your current credentials for the proxy.

```powershell
iwr -Proxy http://proxy-address:port -ProxyUseDefaultCredentials https://deno.land/x/install/install.ps1 -useb | iex
```
