# ProjetWeb
Stack : Node.js - express.js - prisma - jest
## Backend 
### Installation : 
```npm init```
```npm install express```
```npm install prisma```
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

## BDD 
Using postgressql on local host.


## ToDo 
* https://thekenyandev.com/blog/routes-controllers-services-and-models-daos-in-a-nodejs-api-layered-architecture-in-depth/


Il faudrait ustiliser des modèles pour passer les objets 
Test avec jest
Faire une fonction dans le civilit service qui renvoi l'id d'une civ en fonction de son nom pour l'utiliser dans le user service. 