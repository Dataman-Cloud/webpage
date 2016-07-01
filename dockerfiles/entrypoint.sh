#!/bin/bash
set -x
#check set config script
if [ ! -f /update.sh ]; then
    echo "update.sh doesn't exists." && exit
fi
# set js config
cd / && ./update.sh
# run nginx
nginx -g "daemon off;"