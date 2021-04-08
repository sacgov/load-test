# Use an official NodeJs runtime as a parent image
FROM node:fermium
WORKDIR /app
# Copy the current directory contents into the container at /app
ADD . /app
RUN npm i -g clinic
RUN npm i express axios
# Install any needed packages specified in requirements.txt
ENV NODE_ENV=docker
ENV UV_THREADPOOL_SIZE=128

# Make port 80 available to the world outside this container
EXPOSE 8888

# Run app.py when the container launches
# CMD ["node","test.js"]
CMD ["clinic", "doctor","--","node","test.js"]
