---
title: "Kubernetes cheatsheet"
date: "2020-03-06"
description: "Kubernetes cheatsheet"
---

![][k8s]

---

Create an object
`kubectl create -f replicaset-definition.yml`

Show which resources are running
`kubectl get replicaset -o wide`

Show all resources
`kubectl get all -o wide`

Delete an object
`kubectl delete replicaset <name>`

Replace/Update an object
`kubectl replace -f <filename.yml>`

Scale an object (Imperative)
`kubectl scale -replicas=7 -f <filename.yml>`

Show pods in a different namespace
`kubectl get pods -n <name>` or `kubectl get pods --namespace=<name>`

List all pods in all namespaces
`kubectl get pods --all-namespaces`

Create pods in another namespace (we can also add the namespace option to metadata of pod-definition.yaml but the namespace itself must exist)
`kubectl create -f pod-definition.yaml --namespace=<name>`

To create a new namespace
`kubectl create namespace <name>`

Switch to a different namespace permanently
`kubectl config set-context $(kubectl config current-context) --namespace=<name>`

Get objects using a selector
`kubectl get pods --selector app=App1`

Get objects using multiple selectors
`kubectl get pods --selector env=prod,bu=finance,tier=frontend` 

Get all resource objects using a selector (get all resources in prod environment)
`kubectl get all --selector env=prod`




[k8s]: https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80