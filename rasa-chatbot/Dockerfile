# Stage 1: Build Rasa
FROM rasa/rasa:3.6.0-full as rasa

WORKDIR /app
COPY . .

# Train the model (ignore front-end files)
RUN rasa train

# Stage 2: Build Frontend
FROM node:18 as frontend

WORKDIR /app/front-end
COPY front-end/package*.json ./
RUN npm install
COPY front-end/ .
RUN npm run build

# Final Stage: Serve both
FROM nginx:alpine

# Copy Rasa API files
COPY --from=rasa /app /app/rasa
WORKDIR /app/rasa

# Copy built frontend
COPY --from=frontend /app/front-end/dist /usr/share/nginx/html

# Configure Nginx to proxy Rasa requests
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start both services
CMD (nginx -g "daemon off;" &) && rasa run --enable-api --cors "*"