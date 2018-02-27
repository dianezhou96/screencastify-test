# screencastify-test
This is a simple site that uses the [Screencastify API](https://github.com/w69b/castify-api-docs).

Requirements:
* Google Chrome browser with [Screencastify](https://www.screencastify.com/) extension
* Google Drive account with an App and [AppID](https://www.screencastify.com/user/api_console)

Make sure to update the index.html file with your specific AppID

## Expected Behavior ##
Upon loading the website, a window pops up asking whether to record the screen or a specific window. Choose the window corresponding to the website.

Upon closing the window, screen sharing stops and a new window pops up. Edit scripts/page.js to decide how to handle the video.

## Testing ##
To test using Python3, navigate to main folder on Terminal and type:
```
python3 -m http.server
```

On Google Chrome, go to
http://localhost:8000

## Helpful Links ##
[Setting Up Screencastify](https://help.screencastify.com/category/131-initial-setup)
[Screencastify API](https://github.com/w69b/castify-api-docs)
