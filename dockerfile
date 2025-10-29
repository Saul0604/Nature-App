FROM node as build
 
WORKDIR /app
 
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run create:secret-env
RUN npm run build
RUN rm .env
FROM nginx
COPY --from=build /app/dist/NatureApp/browser /usr/share/nginx/html
 
COPY nginx.conf /etc/nginx/nginx.conf
 
EXPOSE 80
 
CMD ["nginx", "-g", "daemon off;"]