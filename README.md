# docker에서 db2를 설치

```
docker run -it --name mydb2 --privileged=true -p 50000:50000 -e LICENSE=accept -e DB2INST1_PASSWORD=db2inst1 -e DBNAME=testdb -v /${PWD}/db2:/database ibmcom/db2
```

# 로그 확인
```
docker logs -f mydb2 | grep Setup
```
docker cp data/home-sales-training-data.csv mydb2:home-sales-training-data.csv


# install ibm db2 driver
```
npm install ibm_db
```
# npm install

# db2inst1유저로 db2이미지에 접속
```
docker exec -ti mydb2 bash -c "su - db2inst1"
```

db2 connect to testdb
db2 'CREATE SCHEMA DB2WML'
#
db2 'CREATE TABLE DB2WML.HOME_SALES (ID SMALLINT, LOTAREA INTEGER, BLDGTYPE VARCHAR(6),HOUSESTYLE VARCHAR(6), OVERALLCOND INTEGER, YEARBUILT INTEGER, ROOFSTYLE VARCHAR(7), EXTERCOND VARCHAR(2), FOUNDATION VARCHAR(6), BSMTCOND VARCHAR(2), HEATING VARCHAR(4), HEATINGQC VARCHAR(2),CENTRALAIR VARCHAR(1), ELECTRICAL VARCHAR(5), FULLBATH INTEGER, HALFBATH INTEGER, BEDROOMABVGR INTEGER, KITCHENABVGR VARCHAR(2), KITCHENQUAL VARCHAR(2), TOTRMSABVGRD INTEGER, FIREPLACES INTEGER, FIREPLACEQU VARCHAR(2), GARAGETYPE VARCHAR(7), GARAGEFINISH VARCHAR(3), GARAGECARS INTEGER, GARAGECOND VARCHAR(2), POOLAREA INTEGER, POOLQC VARCHAR(2), FENCE VARCHAR(6), MOSOLD INTEGER, YRSOLD INTEGER, SALEPRICE INTEGER )'

db2 'CREATE TABLE DB2WML.HOME_ADDRESS (ADDRESS1 VARCHAR(50), ADDRESS2 VARCHAR(50), CITY VARCHAR(50), STATE VARCHAR(5), ZIPCODE INTEGER, COUNTRY VARCHAR(50), HOME_ID INTEGER)'

db2 'IMPORT FROM ../../../home-sales-training-data.csv OF DEL SKIPCOUNT 1 INSERT INTO DB2WML.HOME_SALES'