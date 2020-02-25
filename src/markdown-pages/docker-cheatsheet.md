---
title: "Docker cheatsheet"
date: "2020-02-25"
description: "Docker cheetsheet"
---

![][containers]

---

Just some notes for myself.

### Clean up

```
# Delete all containers
docker container rm $(docker container ls -a -q)
# Delete all images
docker rmi -f $(docker image ls -a -q)
# Delete all history, build cache, stopped containers, etc...
docker system prune
```

### Docker hub login

```
# Login via CLI
docker login
# Login via CI
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
```

### Creating and passing tarballs

```
# Create a tar from image
docker save <image:tag>
# Load a tar image
docker load <image:tag>
# Copy images between machines
ssh source "docker save <image:tag> | gzip" | docker load
```

[containers]: https://images.unsplash.com/photo-1494961104209-3c223057bd26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1384&q=80