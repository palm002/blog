---
title: "Adding a system wide path using Ansible"
date: "2020-02-09"
description: "Ansible"
---

![][path]

---

Ansible is an open-source tool primarily used for configuration management.
Although it has other uses such as provisioning cloud infrastructure, setting up servers,
deploying application code, installing software on a server, etc., I will write about how
to add Golang binaries to the environment variable `PATH`.

Assuming we already have the Golang tarball unarchived on the machine at the destination `/usr/local/go/bin`,
we are unable to use it as it needs to be added to `PATH`. 

The way I have done it, was by creating a new file in `/etc/profile.d`
which contains the location of the source folder i.e `/usr/local/go/bin`
and adding that source folder to the enironment variable.
Note: This was done on CentOS 7 Linux.

Here's the code:

```
# Adds /usr/local/go/bin to the PATH environment variable.
- name: Add golang bin dir to $PATH
  copy:
    dest: /etc/profile.d/custom-path-for-golang.sh
    content: 'PATH=$PATH:/usr/local/go/bin'
```

Using the `copy` module, we create a new file with `content` of the file being a
command that adds Golang binary to `PATH`.

Upon completion of the playbook, we can manually SSH into the machine and confirm that
Golang binary is installed and useable by typing `go version` and checking it's
destination with `which go` in the command line.


[path]: https://images.unsplash.com/photo-1464788061904-b026adb5422b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80