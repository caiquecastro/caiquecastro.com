---
title: "Setting up SSH keys"
tags: ["ssh", "server", "remote"]
date: 2016-01-16
language: en
---

I use SSH to connect to remote servers, including DigitalOcean droplets. To log in as `user`, I run this command in my terminal.

```bash
ssh user@123.45.67.89
```

With password authentication, the server asks for my account password each time I connect. When I log in several times a day, that gets tedious. I can set up key-based login by adding my public SSH key to the remote account's list of authorized keys.

```bash
cat ~/.ssh/id_rsa.pub | ssh user@123.45.67.89 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Here's how the command works.

1. On my computer, `cat ~/.ssh/id_rsa.pub` reads my public key.
2. The pipe sends the key to `ssh user@123.45.67.89`, which connects to the server as `user`.
3. On the server, `mkdir -p ~/.ssh` creates the SSH directory if needed. Then `cat >> ~/.ssh/authorized_keys` appends the public key to the file.

The next time I connect as `user`, SSH can use the matching private key to authenticate without asking for the remote account's password.
