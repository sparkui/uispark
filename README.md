#UISPARK
##Prerequisites
* Install [nodejs](https://nodejs.org)
* Go to the directory where you check out the project
* Run `npm install`

##How to start server
1. **Nodejs** <br/>
	Change directory to where you checkout the project from terminal and run `npm server`, you'll be able to see the UI by open [http://127.0.0.1:3000](http://127.0.0.1:3000)
2. **Python 2** <br/>
	If you are using *NIX system, you've got python environment already. As a optional way, you can run `python -m SimpleHTTPServer 3000` to start the server without having nodejs installed.
3. **Python 3**
	If you upgrade your python to **3.x**, you can run `python3 -m http.server 3000`

##Folder Structure

uispark
├── data.js
├── img
│   └── view.svg
├── index.html
├── lib
│   ├── angular-route.min.js
│   ├── angular.min.js
│   ├── prism.css
│   └── prism.js
├── package.json
├── script.js
├── style.css
└── views
    ├── angular.subnav
    ├── default
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    ├── notify-box
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    ├── popups
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    ├── scroll-nav
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    ├── sortable
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    └── triangle-corners
        ├── index.html
        ├── script.js
        └── style.css
