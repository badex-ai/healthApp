ARG CODE_VERSION=0.0.1
FROM node:20-alpine
COPY ../src .
WORKDIR .
RUN pnpm install
CMD ["npm","dev"]