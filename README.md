This repo holds a working example on frisby API framework.

EndPoint: https://reqres.in/

Requirements
node (version > 10 ) on your machine and should be set to PATH
npm
docker
Code Editor: Visual Studio code
Install Dependencies
npm install

Bring up in local
docker-compose -f docker-compose.yaml up

Run first test
Run npm test in another terminal
Check HTML Report
Find reports present at location ./src/reports
Congratulations!!! You have successfully run your first test.

Test the GET API
Open Postman
Send the GET request with https://reqres.in/api/users
Verify the output
Test the POST API
Open Postman
Send the POST request with https://reqres.in/api/users and request body as
{
    "name": "morpheus",
    "job": "leader"
}
Verify the user is created successfully
Congratulations!!! You are ready for API Testing