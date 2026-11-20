---
title: "Installing Deno behind a proxy on Windows"
tags: ["deno", "proxy", "windows"]
date: 2020-05-18
language: en
---

Deno 1.0, a runtime for JavaScript and TypeScript, came out last week. At the time, this was the PowerShell command for installing it on Windows.

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

On a corporate network, a proxy could prevent PowerShell from downloading the installer. To send the request through the proxy, you could pass its address and port to `Invoke-WebRequest` (`iwr`). In the original example below, `endereco-do-proxy:porta` stands for the proxy host and port.

```powershell
iwr -Proxy http://endereco-do-proxy:porta -ProxyUseDefaultCredentials https://deno.land/x/install/install.ps1 -useb | iex
```

> **Compatibility note.** The Windows installer has moved to `https://deno.land/install.ps1`. For a direct connection, use the current PowerShell command. [Deno installation guide](https://docs.deno.com/runtime/getting_started/installation/)
>
> ```powershell
> irm https://deno.land/install.ps1 | iex
> ```
>
> Behind a proxy, replace `proxy.example.com:8080` with your proxy's host and port. PowerShell uses `-Proxy` to fetch the installer. The installer then calls `curl.exe` to download Deno, and curl reads `HTTPS_PROXY` from the same session.
>
> ```powershell
> $env:HTTPS_PROXY = 'http://proxy.example.com:8080'
> Invoke-RestMethod -Proxy $env:HTTPS_PROXY -Uri https://deno.land/install.ps1 | Invoke-Expression
> ```
>
> If your proxy requires Windows credentials, `-ProxyUseDefaultCredentials` applies only to the PowerShell request. You can instead use an authenticated browser to download the Windows ZIP for your architecture. Extract `deno.exe`, add its folder to your user `Path`, and run `deno --version` in a new PowerShell session. [Deno releases](https://github.com/denoland/deno/releases)
