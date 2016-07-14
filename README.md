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
## Folder Structure
├── data.js<br/>
├── img<br/>
│   └── view.svg<br/>
├── index.html<br/>
├── lib<br/>
│   ├── angular-route.min.js<br/>
│   ├── angular.min.js<br/>
│   ├── prism.css<br/>
│   └── prism.js<br/>
├── package.json<br/>
├── script.js<br/>
├── style.css<br/>
└── views<br/>
    ├── angular.subnav<br/>
    ├── default<br/>
    │   ├── index.html<br/>
    │   ├── script.js<br/>
    │   └── style.css<br/>
    ├── notify-box<br/>
    │   ├── index.html<br/>
    │   ├── script.js<br/>
    ├── └── style.css<br/>
