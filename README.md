Application Name: Marketplace

To run locally: (requires nodejs)
---------------

1. Install nodejs / npm if necessary

From terminal:
-------------
2. Install serve - 'npm install -g serve'
3. Unzip prod build archive to a folder of your choice (email)
4. Change directory to the folder in #3
5. Run the app - 'serve -s .'
6. Enter URL per startup message in your browser
Ex.   - Local:  http://localhost:5000

To run over network follow this URL:
https://steve-brown701.github.io/marketplace/

How the application was developed
---------------------------------
For a single page application application template I used React.js framework.
Official instructions on how this is done can be found here:
https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

As this was my first time ever exposure to utilizing React.js,
I also spent some time going over this tutorial
https://www.taniarascia.com/getting-started-with-react/

Once I got a handle on the workings of React.js, I started implementing the application.
I used the information in the mock take-home document / screen shot as direction for the UI layout.
I had not prior experience with any of the Frameworks mentioned in the document.
My experience with front end was limited to just HTML/ CSS and pure Javascript.
React.js was my choice of Framework as I believe it the most popular; and it was the one I wanted to learn.

Although it was not mentioned in the specs, it seems obvious to me that duplicates and empty records should
not be allowed; so I implemented the app to reject those. I also went ahead and implemented record delete / removal.

Edit a record
-------------
I add a button for this functionality but left the implementation for further discussion.
The most obvious implement for me would be to do a pop-up form with the record fields filled in.
This would be a user friendly way to allow user to update fields with current values as reference.

Comments on take home
---------------------
Challenging to me as I had no previous experience with a front-end framework.
A good learning experience for me; and I think it a fair challenge for Sr role.
I am sure it will be trivial for a more experience front-end engineer.

Happy Hacking :-)
