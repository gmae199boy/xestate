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
    echo "BASIC=\"Basic ${BASIC}\"" >> ./api-server/.env
    docker-compose up -d
    # 배포 전 image: node:10.16.0 쓸 때
    if [ ! -d ./api-server/node_modules ]; then
        cd api-server
        npm install
    fi
    cd ..
    if [ ! -d ./xestate_react/node_modules ]; then
        cd xestate_react
        npm install
    fi
    exit 0
fi

# RESULT=$(docker ps | grep app)
# echo $RESULT
# if [ "$RESULT" != "" ]; then
#     docker-compose down
# fi

# docker-compose up -d