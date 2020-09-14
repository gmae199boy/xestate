#!/bin/bash

PROCESS=$1
BASIC=$2



if [ "$PROCESS" == "down" ]; then
    rm ./api-server/.env
    docker-compose down
    echo "$?"
    exit 0
fi

if [ "$PROCESS" == "up" ]; then
    touch ./api-server/.env
    echo "BASIC=${BASIC}" >> ./api-server/.env
    docker-compose up -d
    echo "$?"
    exit 0
fi

# RESULT=$(docker ps | grep app)
# echo $RESULT
# if [ "$RESULT" != "" ]; then
#     docker-compose down
# fi

# docker-compose up -d