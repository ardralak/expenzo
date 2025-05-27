Expense Tracker Backend Setup Guide 

1. Install Python 

Steps: 

Enable the administration rights 
Go to the Python Downloads page : Download:  Python 3.11 
**Important**: During the installation, make sure to check the box for "Add Python to PATH". If not add it Manually in the Environment Variables. 
Complete the installation by following the on-screen instructions. 

Verify Python Installation: Once Python is installed, verify that it’s working. 
1. Open Command Prompt (Windows) or Terminal (macOS/Linux). 
2. Run these commands: 
   python --version 
   pip --version 
You should see Python and pip versions displayed, indicating successful installation. 

2. Install MongoDB 

To store your application’s data, you’ll need MongoDB. 
Install MongoDB: 
1. Go to the MongoDB Downloads page and install latest version MongoDB version 8.0.8 
2. Install MongoDB using the downloaded installer: 
   Run the installer and choose the Complete installation option. Ensure "Install MongoDB as a Service" is selected. 
We are also using GUI so check Install MongoDB Compass (will be checked already). 

3. Install MongoDB Compass (GUI Tool) 

Check if it is installed in the MongoDB file itself if not install manually…. 

MongoDB Compass is the official GUI for MongoDB, allowing you to interact with your MongoDB database visually. 

Steps: 
1. Download MongoDB Compass from the Download Page: MongoDB Compass 
2. Follow the installation steps for your operating system. 
3. Once installed, open MongoDB Compass and connect to your MongoDB instance: 
   - Connection String: mongodb://localhost:27017 (default MongoDB connection string). 
   - Click Connect.  

Picture 1, Picture 

 

The official MongoDB driver for Python is pymongo, and for asynchronous usage (like with FastAPI), the driver is motor (which builds on pymongo). Install both via Cmd 

>>>>>>>  pip install pymongo motor 

 

If network blocks you, run : pip install pymongo motor --proxy=http://rb-proxy-in.bosch.com:8080 

Picture 1, Picture 

 

4. Install Required Libraries 

Install the necessary libraries for the backend using FastAPI and MongoDB. 

  fastapi 
   uvicorn 
   motor 
   python-dotenv 

Install the libraries using: 

UNZIP THE FOLDER 
   pip install -r requirements.txt 
 

Picture 1, Picture 

5. Create .env File for MongoDB Configuration 

UNZIP the folder  

Create a .env file in the backend directory to store sensitive configuration data like the MongoDB connection URL. 
1. Inside the backend directory, create a file named .env. 
2. Add the following content: 
   MONGO_URL=mongodb://localhost:27017 
   DB_NAME=expenzo 

6. Run the FastAPI Server 

 
1. Run the following command to start the FastAPI server: 

Path: C:\Personal\Expenzo\expenzo-backend 
   uvicorn app.main:app --reload 
2. The server should be running at http://127.0.0.1:8000. 
3. You can test the endpoints using the Swagger UI: 
   Docs URL: http://127.0.0.1:8000/docs 

 

Picture 1, Picture 

 

 

 

 

 

http://127.0.0.1:8000/docs 

Picture 1, Picture 

10. Test Your API 

You can now interact with your backend API: 
- Add Expense (POST): 

Click on the "POST /expenses" to Expand It: Click on Try it out. 

you'll see a Request Body input section. 
       { 
         "title": "Lunch", 
         "amount": 15.50, 
         "category": "Food" 
       } 
 

Execute it. 

Picture 1, Picture 

 

 

 

Open MongoDB Compass. 

Connect to Expenzo Connection 

Check for the Expenzo Database 

On the left-hand sidebar in MongoDB Compass, look for a database called expenzo. 

Click on it to expand it. 

Check the expenses Collection: 

Inside the expenzo database, you should see a collection named expenses. 

 

 

 

GUYSSSSSS with lot of investigation I have installed, tested and then created this document. 
If there are any issues 🧐 Let’s Discuss in our Meeting. 🤓 

 

If there is any Mistakes 😥🫥 Please let me know,,,,,,🫡 

 

Lets Learn Together☺️🤯🦾…. And Grow Together 😌🥸 

 

SEE YOOOUUU ALLL❤️ 

BYEE……..🐿️ 

 

 

For Frontend Setup 

  

Install Node js (https://nodejs.org/en/download) and visual studio code (https://code.visualstudio.com/download)  

Create folder structure : eg :- C:\AAMZ\Personal\Expenzo\frontend\ 

Unzip and keep the expenzo-frontend here 

Open cmd inside this folder and run 

First login in Login - JFrog 

npm config set registry https://rb-artifactory.bosch.com/artifactory/api/npm/bci-npm-virtual/ 

npm login 

Enter username as NTID, password  

npm install 

npm run dev 

Front end is up and running on the url that appears 

 
