# docker에서 db2를 설치

```
docker run -it --name mydb2 --privileged=true -p 50000:50000 -e LICENSE=accept -e DB2INST1_PASSWORD=db2inst1
-e DBNAME=testdb -v /${PWD}/db2:/database ibmcom/db2
```

# 로그 확인
```
docker logs -f mydb2 | grep Setup
```

# db2inst1유저로 db2이미지에 접속
```
docker exec -ti mydb2 bash -c "su - db2inst1"
```

# install ibm db2 driver
```
npm install ibm_db
```
# npm install

