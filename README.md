# xestate

# 필요 사전 설치
- docker  
- docker-compose  

# 사용 컨테이너 이미지
- node:10.16.0  
- mongo  

# Start Project
```bash
./server.sh up
```

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


