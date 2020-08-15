---
title: "Quick tips I - Terminal"
date: 2016-04-22
tags: [quick-tips, terminal, workflow]
language: en
---

Hello everyone, I'm back to share with you some quick tips for terminal that helps
a lot in our today workflow on the terminal. If you, like the most developers use
the terminal for every two tasks on the computer, it will probably come in handy.

1. **Sometimes you need the create a new directory and immediately cd into it:**

```sh
mkdir caique && cd $_
```

2. **Sometime you enter a command but it requires sudo permission:**

```sh
vim /etc/hosts
```

If you try to save a change to your hosts file:


```sh
sudo !!
```

After you enter this command, it will appear on your shell:

```sh
sudo vim /etc/hosts
```

Press enter again to confirm the comand. Now you can make the changes to your file.

3. **Chainning commands:**

If you need to only enter a command after the previous one finishes, you can:

```sh
sudo apt-get update; sudo apt-get upgrade
```

Otherwise if you want only the second command to be executed if the first one succeed:

```sh
g++ fibonacci.cpp -o fibonacci.x && ./fibonacci.x
```

Likewise you can execute a command only if the previous had failed:

```sh
./check-server-health.sh || ./up-server.x
```

But be careful, ``||`` is different than ``|``. The first one is the OR condition, the
last one is the pipe. That enters the output from the first command to the input of
the other one.

If it was helpful to you, please give you feedback. If you find any mistake, please let
me know.
