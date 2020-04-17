---
title: "Kubernetes cheatsheet"
date: "2020-03-06"
description: "Kubernetes cheatsheet"
---

![][k8s]

---

**Create an object**
<br />
`kubectl create -f replicaset-definition.yml`

**Show which resources are running**
<br />
`kubectl get replicaset -o wide`

**Show all resources**
<br />
`kubectl get all -o wide`

**Delete an object**
<br />
`kubectl delete replicaset <name>`

**Replace/Update an object**
<br />
`kubectl replace -f <filename.yml>`

**Scale an object (Imperative)**
<br />
`kubectl scale -replicas=7 -f <filename.yml>`

**Show pods in a different namespace**
<br />
`kubectl get pods -n <name>` or `kubectl get pods --namespace=<name>`

**List all pods in all namespaces**
<br />
`kubectl get pods --all-namespaces`

**Create pods in another namespace (we can also add the namespace option to metadata of pod-definition.yaml but the namespace itself must exist)**
<br />
`kubectl create -f pod-definition.yaml --namespace=<name>`

**To create a new namespace**
<br />
`kubectl create namespace <name>`

**Switch to a different namespace permanently**
<br />
`kubectl config set-context $(kubectl config current-context) --namespace=<name>`

**Get objects using a selector**
<br />
`kubectl get pods --selector app=App1`

**Get objects using multiple selectors**
<br />
`kubectl get pods --selector env=prod,bu=finance,tier=frontend` 

**Get all resource objects using a selector (get all resources in prod environment)**
<br />
`kubectl get all --selector env=prod`

**Tainting nodes**
<br />
`kubectl taint nodes <node-name> key=value:taint-effect`
<br />

**Where taint-effect is one of** `NoSchedule | PreferNoSchedule | NoExecute`

_NoSchedule = the pods will not be scheduled on the node_ <br />
_PreferNoSchedule = the sytem will try to avoid placing a pod on the node but not guaranteed_ <br />
_NoExecute = new pods will not be scheduled on the node and existing pods (if any) will be evicted if they don't tolerate the taint_

`kubectl taint nodes node1 app=blue:NoSchedule`

**Remove the taint with key 'dedicated' and effect 'NoSchedule' if one exists**
<br />
`kubectl taint nodes foo dedicated:NoSchedule-`

**Remove all taints with key 'dedicated' from node foo**
<br />
`kubectl taint nodes foo dedicated-`

**Labeling nodes**
<br />
`kubectl label nodes <node-name> <label-key>=<label-value>`

**Extract object definition**
<br />
`kubectl get <object> <object-name> -o yaml > my-new-manifest.yaml`
<br />
`kubectl get pod webapp1 -o yaml > my-new-pod.yaml`

**View DaemonSets**
<br />
`kubectl get daemonsets <name>`

**View events**
<br />
`kubectl get events`

**View scheduler logs**
<br />
`kubectl logs <name-of-scheduler> --namespace=<namespace>`
<br />
`kubectl logs my-custom-scheduler --namespace=kube-system`

**View metrics of nodes and pods**
<br />
`kubectl top node` `kubectl top pods`

**Update / Upgrade deployment**
<br />
`kubectl apply -f my-deployment-definition.yaml`

**View status of rollout**
<br />
`kubectl rollout status deployment/<deployment-name>`
<br />
`kubectl rollout history deployment/myapp-deployment`

**Rollback / Undo rollouts**
<br />
`kubectl rollout undo deployment/<deployment-name>`

**ENV Variables**
<br />
`docker run -e APP_COLOR=pink simple-webapp-color`

**Create ConfigMap**
<br />
`kubectl create -f <configmap.yaml>` # declarative
<br />
`kubectl create configmap <config name> --from-literal=<key>=<value>` # imperative
<br />
`kubectl create configmap my-app-config --from-literal=APP_COLOR=blue --from-literal=APP_MODE=prod`

Also possible to reference a file with the data of KV pairs
<br />
`kubectl create configmap my-app-config --from-file=<path-to-file>`

**View ConfigMap**
<br />
`kubectl get configmaps`

**Describe ConfigMaps**
<br />
`kubectl describe configmaps`

**Create secret**
<br />
`kubectl create -f <secret.yaml>` # declarative
<br />
`kubectl create secret generic` # imperative
<br />
`kubectl create secret generic <secret-name> --from-literal=<key>=<value>`
<br />
`kubectl create secret generic my-secret --from-literal=DB_Host=mysql` `--from-literal=DB_Password=passwrd`

Also possible to reference a file with the data of KV pairs
<br />
`kubectl create secret generic my-secret --from-file=<path-to-file>`

**View Secrets**
<br />
`kubectl get secrets`
<br />
`kubectl describe secrets`

**View values from secrets**
<br />
`kubectl get secret <secret-name> -o yaml`

**See all nodes** (shows k8s version on each node)
<br />
`kubectl get nodes`

**Drain a node from workloads**
<br />
`kubectl drain node-1` 

**Cordon a node** (mark the node as **unschedulable**)
<br />
`kubectl cordon node-2` # This command does NOT terminate/move pods. It just makes sure that new pods are not scheduled on that node

**Uncordon a node**
<br />
`kubectl uncordon node-1`

**Upgrading master node**
<br />
`apt-get/yum upgrade -y kubeadm=1.17.0-00`
<br />
`kubeadm upgrade plan`
<br />
`kubeadm upgrade apply v1.17.0`

**Upgrade master kubelets**
<br />
`apt-get/yum upgrade -y kubelet=1.17.0-00` and restart the service post upgrade `systemctl restart kubelet`

**Upgrade worker nodes one by one** (perform these steps for all nodes)

1. drain the node (run this on master) `kubectl drain node-1`
2. upgrade kubeadm (run this on worker node) `apt-get/yum upgrade -y kubeadm=1.17.0-00`
3. upgrade kubelet (run this on worker node) `apt-get/yum upgrade -y kubelet=1.17.0-00`
4. upgrade the node (run this on worker node) `kubeadm upgrade node config --kubelet-version v1.17.0`
5. restart kubelet service (run this on worker node) `systemctl restart kubelet`
6. unmark node 1 from being unschedulable (run this on master) `kubectl uncordon node-1`

**Create a service account**
<br />
`kubectl create serviceaccount sa1`

**List all service accounts**
<br />
`kubectl list serviceaccount`

**View certificate signing requests (for admins only)**
<br />
`kubectl get csr`

**Approve CSR (admins only)**
<br />
`kubectl certificate approve <name-of-csr>`

**View the certificate (csr), get the `certificate` and decode it to plain text then share with end user**
<br />
`kubectl get csr -o yaml`
<br />
`echo "contentsOfCertificate hjkdfbabjdsjak" | base64 --decode`

**View KubeConfig**
<br />
`kubectl config view` # lists clusters, contexts, users and current-context

**View other KubeConfig files**
<br />
`kubectl config view --kubeconfig=my-custom-configs`

**Swith to another Context (that's available within KubeConfig file)**
<br />
`kubectl config use-context <context-name>`
<br />
`kubectl config use-context prod-user@production` # verify if context switched using kubectl config view

**Other KubeConfig cmds**
<br />
`kubectl config -h`

**Create roles & role bindings**
<br />
`kubectl create -f dev-role.yaml`

`kubectl create -f dev-user-developer-binding.yaml`

**View RBAC and Role bindings**
<br />
`kubectl get roles`
<br />
`kubectl get rolebindings`

**View additional info about a role and role binding**
<br />
`kubectl describe role <rolename>`
<br />
`kubectl describe role binding <name-of-rolebinding>`

**Check access (literally ask a question)**
<br />
`kubectl auth can-i create deployments`
<br />
`kubectl auth can-i delete nodes`
<br />
`kubectl auth can-i create deployments --as dev-user` # runs the command as another user
<br />
`kubectl auth can-i create pods --as dev-user --namespace test` # check if dev-user can create pods in test namespace

**Create Cluster Role & Cluster Role Binding**
<br />
`kubectl create -f cluster-admin-role.yaml`
<br />
`kubectl create -f cluster-role-admin-role-binding.yaml`

**Create a network policy**
<br />
`kubectl create -f policy-definition.yaml`


[k8s]: https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80