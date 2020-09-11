#!/bin/bash

PROCESS=$1

if [ "$PROCESS" == "down" ]; then
    docker-compose down
    echo "$?"
    exit 0
fi

if [ "$PROCESS" == "up" ]; then
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