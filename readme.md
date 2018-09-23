start api server:
- `$ DEBUG=myapp:* npm start`

start front end server:
- `$ cd sept/`
- `$ ember serve`

some notes about this directory structure:
- september is an express API server
- API routes are in route/api.js
- sept is the ember front end app
- the front end server builds to the dist/ under sept/ and is sym linked to the public folder for the express server
- the views/ directory has one file (index.hbs) symlinked to the dist/ directory's index.html  