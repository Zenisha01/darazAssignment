FROM cypress/browsers:node12.14.0-chrome79-ff71
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser chrome