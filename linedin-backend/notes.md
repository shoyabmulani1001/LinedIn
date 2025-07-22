1. Create Backend Folder
2. Create package.json file (npm init or npm init -y
   )
3. Create index.js file (touch index.js or direct create index.js file without command)
4. Create Server
5. Install Express(npm install express)
6. Install Nodemon for Automatically Restarting The Node Application when file change in the dictionary are detected (npm install -g nodemon) ites install globally then we write next command for install nodemon in our project (npm i nodemon)
7. Install Mongoose For Database (npm i monhgoose)
8. then we can create a database in MongoDB Compass Or MongoDB Atlas
9. we can create connection.js file and connect a database to our project
10. we can craete Some Folder to write Backend Logic (routes,models,controller,authintication etc)
11. We can create some file in models folder(user.js,post.js,message.js,conversation.js,comment.js,notification.js etc) then we can write backend code in all files.

12. install npm i cookie-parser -->, bcrypt --> Convert password to star(\*),
    jsonwebtoken --> to generate Token and store browser cookie. JWT (JSON Web Token) is a compact, URL-safe token that contains user data (claims) and is digitally signed. It is often used to:
    Authenticate users after login
    Authorize access to protected routes or resources
    npm i dotenv (.env file create to) --> The .env file is used to store environment variables — settings and secrets that your app needs to run, but that you don’t want hardcoded into your codebase.
    Keeps secrets safe (like API keys, JWT secrets, database URIs)
    Allows easy configuration without changing code
    Supports multiple environments (development, testing, production)
    Makes your codebase portable and cleaner

{
email: 'shoyabmulani1@gmail.com',
password: 'Papya@1001',
f_name: 'Shoyab'
}

find return --> Array
findOne returns --> Object
