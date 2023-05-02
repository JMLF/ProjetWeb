# ProjetWeb

## Backend 
Stack : Node.js - express.js - prisma - jest

### Installation : 
```npm init```
```npm install express```
```npm install prisma```
```npm install cors```
```npx prisma init```

When schema.prisma update :	```npx prisma migrate dev```

### Architecture 
route handler <=> controller <=> service <=> database access object (DAO)

### Reference : 
* https://www.dawsoncodes.com/posts/5/building-a-rest-api-with-prisma-and-expressjs
* https://www.prisma.io/docs/getting-started/quickstart
* https://expressjs.com/fr/
* https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466459-optimisez-la-structure-du-back-end
* https://thekenyandev.com/blog/routes-controllers-services-and-models-daos-in-a-nodejs-api-layered-architecture-in-depth/
* https://medium.com/@welcomebachar/prisma-node-typescript-jest-mongodb-tdd-ooomg-%EF%B8%8F-4c9be0b0ff2e


## Frontend
Stack : Node.js - React - MUI - Axios - React router 

### Installation : 
```npx create-react-app mon-app```
```npm install axios```
```npm install @mui/material @emotion/react @emotion/styled```
```npm install @mui/icons-material```
```npm install @mui/system```
```npm install @mui/icons-material```
```npm install react-router-dom```   

Launch front :	```npm start```

## ToDo 
* https://thekenyandev.com/blog/routes-controllers-services-and-models-daos-in-a-nodejs-api-layered-architecture-in-depth/
* Handle user creation with specific civility