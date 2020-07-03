# docker install
alpine39:~$ docker run -itd --name mydb2 --privileged=true -p 50000:50000 -e LICENSE=accept -e DB2INST1_PASSWORD=$DB2_PASS -e DBNAME=testdb -v $HOME/db2:/database ibmcom/db2

# install ibm db2 driver
npm install ibm_db

# npm install

