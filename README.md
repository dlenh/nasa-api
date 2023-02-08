# San Francisco Stargazer Society
Pick a date to pull up astronomy picture of the day from NASA's API. 

**Link to project:** https://sfstargazer.netlify.app/

![Screenshot of website](https://i.gyazo.com/19309b03f147c4c46731c548a7dcca4e.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

An API key was required from NASA's Astronomy Picture of the Day (APOD) API and stored in a config file. A simple user interface was created where users enter a date in a form and that gets converted into a value the API recognizes. The fetch API returns a plethora of information, like copyright and media type, but only certain aspects, like title and description, are placed into the document object model (DOM). Different media types, like image, gif, and videos, had to be taken into consideration: both an image tag and an iframe tag were present in the HTML, but only one of their sources gets filled out based on the information that gets return from the fetch. Both tags were given a class of "hidden". Once the media type was confirmed from the promise, DOM manipulation was used to add/remove the "hidden" class to reveal the appropriate HTML tag.

## Lessons Learned:

This application utilizes API fetch to return information that is readily available, and in this case, that resource is NASA's APOD API. API keys should never be made public and this provided me practice with hiding sensitive information and calling it with an object from another file. In addition to that, I was able to practice object manipulation with the promise object that was returned from the fetch. 

