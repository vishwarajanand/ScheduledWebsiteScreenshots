#!/bin/bash

function printCmd() {
    echo -e "\n################## \n$@ \n##################\n"
}

printCmd "$(TZ=Asia/Kolkata date)"
printCmd "Starting Scheduled Website Screenshots"
cd ~/github/ScheduledWebsiteScreenshots
npm install
npm update

# Add all your URLs here
URLs=(
  "https://news.google.com/"
  "https://dev.to/"
  "https://iromin.medium.com/"
  "https://vishwarajanand.com/blog"
)

node index.js "${URLs[@]}"
# node index.js https://stackoverflow.com/questions https://cloud.google.com/functions

printCmd "Finished Scheduled Website Screenshots"
printCmd "$(TZ=Asia/Kolkata date)"
