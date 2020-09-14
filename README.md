# xestate

# 필요 사전 설치
- docker  
- docker-compose  

# 사용 컨테이너 이미지
- node:10.16.0  
- mongo  

# Start Project
```bash
./server.sh up ${BASIC KEY}
```
- ./server.sh up (Basic key) -> KAS API 통신을 위한 Basic 키 값을 두번째 인자로 받고,  
docker-compose 파일을 실행시킨다. 키 값은 Basic 문자열을 제외한 msdvuASgohw18w7rZSc... 만 넣는다.  

- ./server.sh down -> 실행 도커 컨테이너들을 중지시키고 삭제한다.  

# Stop Project
```bash
./server.sh down
```

# .env 설정
- api-server 폴더 안에 .env 파일 생성  


# Docker Compose 구성도
- networks: test  
- react 클라이언트 서버 : localhost:3000   container_name: xestate-react  
- api server 서버 : localhost:8080   container_name: xestate-api  
- mongodb server : localhost:27017   container_name: xestate-db  


