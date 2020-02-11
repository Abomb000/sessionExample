# sessionExample
### Installation
Clone the project into your pc/server (with installed docker and docker-compose)
```sh
$ git clone https://github.com/Abomb000/sessionExample.git
```
Execute installation of docker compose
```sh
$ docker-compose up --build
```

The project running under port: 8081

you can access to demo page:

http://[YOUR_DOCKER_IP]:8081/static/demo.html

## The API
Functionality implemented by requirements

Session creation:
    
    http://[YOUR_DOCKER_IP]:8081/collect
    
Session data can be updated via GET request on following URL
    
    http://[YOUR_DOCKER_IP]:8081/session_endpoint
    
* before set data via "/session_endpoint", call required to start the session "/collect"

### Demo
The demo can be tested via url:

    http://[YOUR_DOCKER_IP]:8081/static/demo.html 

* session time expires after 5 minutes can be changed in configuration file "config.js"

example:

    cacheTime: 5*60*1000,