FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY . .


# Install dependencies
RUN npm init -y
#RUN npm run build
EXPOSE 3000




CMD ["node" , "Backend/index.js"]
#RUN cd Backend && node index.js 
#RUN cd frontned && npm run dev