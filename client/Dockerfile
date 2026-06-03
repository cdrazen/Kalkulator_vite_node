# Build faza
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production faza
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Kopiramo default nginx konfiguraciju kako bi React Router (ako ga koristiš) radio ispravno
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]