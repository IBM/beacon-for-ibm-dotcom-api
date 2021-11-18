FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install Google Chrome
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN echo "deb [arch=amd64]  http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get -y update
RUN apt-get -y install google-chrome-stable

# Copy the app
COPY . .

# Build the app
RUN yarn install

EXPOSE 8080
CMD [ "node", "index.js" ]
