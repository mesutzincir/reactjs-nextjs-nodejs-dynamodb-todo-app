# Getting Started

This is a sample todo web api with Nodejs.

This project use AWS DynamoDb as a NoSql database.

## How to run it locally?

you need to AWS dynamoDb. Using Docker image is the easiest way.
Simply run docker run -p 8000:8000 amazon/dynamodb-local to execute DynamoDB locally. so the URL of Database is http://localhost:8000

clone this repository
git clone https://github.com/mesutzincir/reactjs-nextjs-nodejs-dynamodb-todo-app.git

install the npm packages
npm install

then we need to some AWS setting. so create and .env file in project root folder and put below envariment variable and set values.
PORT=9090
AWS_REGION=
AWS_DB_ENDPOINT=http://localhost:8000
AWS_ACCESS_KEY_ID=
AWS_ACCESS_KEY=

Dont forget to set above your AWS_REGION, AWS_ACCESS_KEY_ID, AWS_ACCESS_KEY. otherwise can't access dynamodb.

another way is adding these variables in your computer enveriment setting. this is cchange according to your operationg system (Windows, Lunix, IOS ...)

Now your database and setting are ready to run.
run below command

npm run start

done. Api is listening PORT=9090.

## EndPoints:

1- get all records.
Http method: GET URL : http://localhost:9090/todos/
2- get one record by id
Http method: GET URL : http://localhost:9090/todos/{id}
3- add new todo
Http method: POST URL : http://localhost:9090/todos/
request body example is below.

{
"id": 1,
"title": "Deploy Todo App ",
"desc": "Deploy todo add in AWS ",
"status": 0
}

4- delete the record by id
Http method: DELETE URL : http://localhost:9090/todos/{id}

5- patch/update a todo record
Http method: PATCH URL : http://localhost:9090/todos/{id}
request body example is below.

{
"title": "Deploy Todo App ",
"desc": "Deploy todo add in AWS ",
"status": 0
}

Have fun, good luck
