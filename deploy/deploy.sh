#!/bin/bash
set -x

curl -v -X PUT $MARATHON_API_URL/v2/apps/shurenyun-$TASKENV-$SERVICE -H Content-Type:application/json -d \
'{
      "id": "shurenyun-'$TASKENV'-'$SERVICE'",
      "cpus": '$CPUS',
      "mem": '$MEM',
      "instances": '$INSTANCES',
      "constraints": [["hostname", "LIKE", "'$DEPLOYIP'"]],
      "container": {
                     "type": "DOCKER",
                     "docker": {
                                     "image": "'$SERVICE_IMAGE'",
                                     "network": "BRIDGE",
                                     "privileged": '$PRIVILEGED',
                                     "forcePullImage": '$FORCEPULLIMAGE',
                                     "portMappings": [
                                             { "containerPort": 80, "hostPort": 0, "protocol": "tcp"}
                                     ]
                                }
                   },
      "parameters": [
                              {
                                "key": "log-opt",
                                "value": "syslog-format=rfc5424micro"
                              },
                              {
                                "key": "log-driver",
                                "value": "syslog"
                              },
                              {
                                "key": "log-opt",
                                "value": "syslog-address=tcp://10.3.3.3:5011"
                              },
                              {
                                "key": "log-opt",
                                "value": "tag={{.ID}}/{{ (.ExtraAttributes nil).MARATHON_APP_ID }}/{{ (.ExtraAttributes nil).MESOS_TASK_ID }}"
                              },
                              {
                                "key": "log-opt",
                                "value": "env=MARATHON_APP_ID,MESOS_TASK_ID"
                              },
                              {
                                "key": "label",
                                "value": "APP_ID=shurenyun-'$TASKENV'-'$SERVICE'"
                              }
                            ],             
      "env": {
                    "BAMBOO_PUBLIC": "'$BAMBOO_PUBLIC'",
                    "BAMBOO_PROXY":"'$BAMBOO_PROXY'",
                    "'$BAMBOO_PROTOCOL'":"true"
             },
      "healthChecks": [{
                     "path": "/pics/logo-shurenyun-ico.svg",
                     "protocol": "HTTP",
                     "gracePeriodSeconds": 300,
                     "intervalSeconds": 60,
                     "portIndex": 0,
                     "timeoutSeconds": 20,
                     "maxConsecutiveFailures": 3
                 }],
      "uris": [
               "'$CONFIGSERVER'/config/demo/config/registry/docker.tar.gz"
       ]
}'
