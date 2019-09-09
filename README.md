# REST API web app with Docker

Small project which dockerizes a simple persons REST API (get & post) web app service, using NodeJS, ExpressJs & Postgresql.

## Prerequisites

Install & activate Docker & Docker-compose (both built in with Docker-Desktop for windows).

## Usage

### Run

1. Clone the project.
2. Open shell terminal/cmd & cd to the root of the cloned project.
3. run command:   

```bash
docker-compose up --build
```

   for building & running the app (2 containers) using docker compose. No need to create user, db nor schema in postgresql, that is done by the app itself using the first docker container (contains the postgres image) & sql script provided in the app.
   
4. After the build is done - the App is up & running (the output 'App running on port 4000' should appear in shell).

### Test

1. For validating the succesful activation - open a browser & navigate to `http://localhost:4000`. the expected output is (in json format) - {"info":"Node.js, Express, and Postgres REST API"} . Another option is to open a second shell window & run command:

```bash
curl http://localhost:4000  
```
   (for the same output).
   
2. For checking the REST API - 
#### POST
run command (with values instead of <..> ) :
    for linux-

```bash
curl --header "Content-type:application/json" --request POST --data '{"name":"<name>","age":<value>}' http://localhost:4000/api/v1/persons 
```
   
   for windows -

```bash
curl --header "Content-type:application/json" --request POST --data "{\"name\":\"<name>\",\"age\":<value>}" http://localhost:4000/api/v1/persons
```

   in a second shell. The expected output is: 'Person added with name: <name> & age: <value>' .Note that if you'll try to insert the same person twice - the request will fail & the output will be: 'request failed'.
#### GET
navigate to `http://localhost:4000/api/v1/persons/?age=<value>` in your browser or run command:   
   
```bash
curl http://localhost:4000/api/v1/persons/?age=<value>
```  

   in a second shell. The expected output is the DB query result. Note that is you run this before entering any persons to the DB (via POST) you'll get an empty set - [ ] as result.
   
3. For closing the App use Ctrl+c. For removing any dungling containers run command:    

```bash
docker-compose down
```
