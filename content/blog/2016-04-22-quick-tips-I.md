---
title: "Quick terminal tips, part I"
date: 2016-04-22
tags: [quick-tips, terminal, workflow]
language: en
---

Hello, everyone! If you spend as much time in the terminal as I do, these three shortcuts might come in handy.

## 1. Create a directory and switch to it

In this example, `$_` expands to the last argument of `mkdir`, so I only have to type the directory name once.

```sh
mkdir caique && cd $_
```

## 2. Run the previous command with sudo

Sometimes I open my hosts file in Vim and only realize I need elevated privileges when I try to save it.

```sh
vim /etc/hosts
```

After I quit Vim, I can recall the previous command at the shell prompt with `!!` and run it with `sudo`.

```sh
sudo !!
```

The shell expands that shortcut to the following command.

```sh
sudo vim /etc/hosts
```

If your shell shows the expanded command for confirmation, press Enter. You can then edit and save the file.

## 3. Chain commands

A semicolon runs the second command after the first one finishes, even if the first command fails.

```sh
sudo apt-get update; sudo apt-get upgrade
```

Use `&&` to run the second command only if the first succeeds. Here, the program runs only if it compiles successfully.

```sh
g++ fibonacci.cpp -o fibonacci.x && ./fibonacci.x
```

Use `||` to run the second command only if the first fails.

```sh
./check-server-health.sh || ./up-server.x
```

A single `|` is a pipe. It sends the output of the first command to the input of the second.

If these tips helped you, I'd love to hear your feedback. If you spot a mistake, please let me know.
