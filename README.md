# ProjetWeb
Lancer le projet : ```./start.sh```
Mais assurez vous d'avoir modifier l'adresse de votre bdd dans backend/.env

***

## Backend 
Stack : Node.js - express.js - prisma - jest

### Installation : 
```npm init```

```npm install express```

```npm install prisma```

```npm install cors```

```npx prisma init```

When schema.prisma update :	```npx prisma migrate dev```
Launch back : ```node start.js```
Launch test : ```npm run test```

### Architecture 
route handler <=> controller <=> service <=> database access object (DAO)

***

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

Launch front :	```npm start``` -<> y 

***

## ToDo 
* statusEnum
* Units tests