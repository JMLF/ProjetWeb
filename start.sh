#!/bin/bash
cd backend
npx prisma migrate dev
sleep 5  
node start.js & P1=$!
cd ../frontend/mon-app && (yes | npm start) & P2=$!

wait $P1 $P2
