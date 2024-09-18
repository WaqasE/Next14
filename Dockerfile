# Build Stage
FROM node:20-alpine AS BUILD_IMAGE
WORKDIR /next14
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Production Stage
FROM node:20-alpine AS PRODUCTION_STAGE
WORKDIR /next14
COPY --from=BUILD_IMAGE /next14/package*.json ./
COPY --from=BUILD_IMAGE /next14/.next ./.next
COPY --from=BUILD_IMAGE /next14/public ./public
COPY --from=BUILD_IMAGE /next14/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]