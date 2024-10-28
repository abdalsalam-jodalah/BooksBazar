# BooksBazar

## Technologies
- **Node.js**: The runtime environment for executing JavaScript code on the server.
- **Express.js**: A web application framework for building APIs and handling HTTP requests.
## Project Structure
To simplify development, instead of implementing each service separately, we organized them within a single monolithic repository. Each service will have its own folder, allowing it to function independently from the others and enabling it to run as a standalone way 

    ├── catalog-service
        ├── src/ 
        ├── server.js 
        ├── Dockerfile
        └── package.json
    ├── frontend-service
        ├── src/ 
        ├── server.js 
        ├── Dockerfile
        └── package.json
    └── order-service
        ├── src/ 
        ├── server.js 
        ├── Dockerfile
        └── package.json

## Setup Instructions
- Clone the repository: `git clone https://github.com/abdalsalam-jodalah/BooksBazar.git`
- Install dependencies: `npm install`
- make sure to install docker desktop
- run docker desktop
- navigate to the project folders
- Run the app: `run docker-compose up --build`


## Documentation 
- User Documentation in UserAPI-Documentation.md
- You can see full Documentation for all services in wiki section in repo 
