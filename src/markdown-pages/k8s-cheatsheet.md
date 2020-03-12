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

Tainting nodes
`kubectl taint nodes <node-name> key=value:taint-effect`

Where taint-effect is one of `NoSchedule | PreferNoSchedule | NoExecute`
*NoSchedule = the pods will not be scheduled on the node*
*PreferNoSchedule = the sytem will try to avoid placing a pod on the node but not guaranteed*
*NoExecute = new pods will not be scheduled on the node and existing pods (if any) will be evicted if they don't tolerate the taint*
`kubectl taint nodes node1 app=blue:NoSchedule`

Remove the taint with hey 'dedicated' and effect 'NoSchedule' if one exists
`kubectl taint nodes foo dedicated:NoSchedule-`

Remove all taints with key 'dedicated' from node foo
`kubectl taint nodes foo dedicated-`

Labeling nodes
`kubectl label nodes <node-name> <label-key>=<label-value>`

Extract object definition
`kubectl get <object> <object-name> -o yaml > my-new-manifest.yaml`
`kubectl get pod webapp1 -o yaml > my-new-pod.yaml`

View DaemonSets
`kubectl get daemonsets <name>`

View events
`kubectl get events`

View scheduler logs
`kubectl logs <name-of-scheduler> --namespace=<namespace>`
`kubectl logs my-custom-scheduler --namespace=kube-system`

View metrics of nodes and pods
`kubectl top node` `kubectl top pods`

Update / Upgrade deployment
`kubectl apply -f my-deployment-definition.yaml`

View status of rollout
`kubectl rollout status deployment/<deployment-name>`
`kubectl rollout history deployment/myapp-deployment`

Rollback / Undo rollouts
`kubectl rollout undo deployment/<deployment-name>`

ENV Variables
`docker run -e APP_COLOR=pink simple-webapp-color`


[k8s]: https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80