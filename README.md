steps to run this repository ?

clone the repository






BACKEND+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Go to the backend directory 

First Update the .env file where you need to provide some reuqired information about DB host and password and jwt_secret

RUN npm i

and RUN npm start

RUN  script given in the database.txt file it will help you create two tables:
customer and users

----------------------------------------------------------------------------------------------------------
1)register
http://localhost:8000/user/register

payload:
//you can give any role out of this three manager,editor,viewer(make sure to write in the small latters only) 
{
    "username":"dfdf",
    "email":"gdffdfdgfg@gmail.com",
    "password":"pavan123",
    "role":"admin"
}

here it will accept any role but it requires the admin to perform the search operation for the github repositories by the username so write the admin role then and only your request will be authorized 
----------------------------------------------------------------------------------------------------------
2)login
http://localhost:8000/user/login

payload:
{
   "email":"gdffdfdgfg@gmail.com",
    "password":"pavan123"
}
(gives you the token)

-----------------------------------------------------------------------------------------------------------

using the authentication and authorization middleware for searching the repositories by the github username:

here by you can check it as:

first register with the following paylod and then login :

Regiter:

POST : http://localhost:8000/user/register

payload:
{
    "username":"fdfdf",
    "email":"sddsdsdsss@gmail.com",
    "password":"pavan123",
    "role":"admin"
}


login:

POST : http://localhost:8000/user/login

payload:
{
   "email":"sddsdsdsss@gmail.com",
    "password":"pavan123"
}

Response:

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZWY5NDIxOWYtNzk3Ni00MDZlLTg4ODUtNTY5NmIyMzIzMjg0IiwidXNlcm5hbWUiOiJmZGZkZiIsImVtYWlsIjoic2Rkc2RzZHNzc0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTQ4MTI2NTMsImV4cCI6MTcxNDgxNjI1M30.EhxpGMrJd-51rBuuEb3d0FDWA9HPwMqz00NNd6WTqQk"
}




------------------------------------------------------------------
after login you will get the token on successfull login ,paste it in the authorization as trhe bearer token while making the request on this URL below for searching the repositories by github username:

(make sure you will poass the username as the query parameter in the url ):



GET : http://localhost:8000/api/search-username?username=akshayecs     (Note:username should have to be pass in the query parameter)

here by clicking on the avatarURL you can see the github profile photo of the user
Response : 
{
    "status": 200,
    "message": "success",
    "data": {
        "avatarUrl": "https://github.com/akshayecs.png",
        "repositories": [
            {
                "name": "beShary-file-Upload-Download-Share",
                "description": null,
                "watcherCount": 0
            },
            {
                "name": "Node.js-Express-Alpaca-TradinView-Integration",
                "description": null,
                "watcherCount": 0
            },
            {
                "name": "nodejs-passport-user-authentication",
                "description": null,
                "watcherCount": 0
            },
            {
                "name": "NodeJS_CRUD_PostgreSQL",
                "description": null,
                "watcherCount": 0
            },
            {
                "name": "nodesigninLogin-fileUpload",
                "description": "This is a  node application for simple user registration and login and file Uploading",
                "watcherCount": 0
            },
            {
                "name": "solvative-backend",
                "description": null,
                "watcherCount": 0
            },
            {
                "name": "tic-tac-toe-game-with-javascript",
                "description": "This is a Tic Tac Toe game created with javascript ,html,css and ofCourse with some of the audio files and GIFs,that you can check over here.",
                "watcherCount": 0
            }
        ]
    }
}




FRONTEND++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

after cloning the repoitory:

Go to the frontend directory

OPEN terminal

RUN npm i 

you can have a look of the login page which would have to be rendered as a home page on URL: http://localhost:3000/

you can do signUP and login by visiting this endpoint:

http://localhost:3000/signup  on successfully registered it will redirect you to the login page

http://localhost:3000/   (it is a login page)   it will ask you for the email and password :

and on successfull login it will redirect you to the search page simply redirect you can search completely because the response logic is written upto the backend only that you can check by hittin api endpoint on the POSTMAN as i have given all the required reference for this above.



