FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY prisma ./prisma

RUN npm install -g pnpm && pnpm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
