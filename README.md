# Scheduled Website Screenshots
This repo aims to build an automated web screenshot mechanism, whereby people can take screenshots of a specified webpage at a provided schedule and access that later.

## How it works

All required scripts are tested on macOS and can be invoked by executing the bash script: `./run.sh`.
Currently, there's limited inbuilt smartness and the `index.js` script goes to the URLs provided in `run.sh` and takes their screenshot and saves to `${userHomeDir}/Documents/ScheduledWebsiteScreenshots/` path.

On the host machine, an auto sync script can integrate with a file watcher and sync these screenshots into any other software. One can also use a CRON to achieve the same.

After using Google Drive Auto sync, I get a view like this:


![Google Photos View](https://raw.githubusercontent.com/vishwarajanand/ScheduledWebsiteScreenshots/main/photos_after_auto_sync.png "Google Photos View")
https://raw.githubusercontent.com/vishwarajanand/ScheduledWebsiteScreenshots/main/photos_after_auto_sync.png?token=GHSAT0AAAAAABQQL7WPJ5RC2L2IFUL3XCRQYTCSR2A
