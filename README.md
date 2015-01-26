# Shuffle-a-Hotel [![Build Status](https://travis-ci.org/adriannieto/shuffle-a-hotel.svg)](https://travis-ci.org/adriannieto/shuffle-a-hotel)

A new way to find hotel deals. 
 
### Project technologies
This project is based on other open source projects:

- **MongoDB:** A NoSQL database https://github.com/mongodb/mongo
- **Sails.js:** A easy framework to create REST API  https://github.com/balderdashy/sails/
- **Angular.js:**
- **bootstrap-material-design:** Material design theme for Bootstrap 3 https://github.com/FezVrasta/bootstrap-material-design

Among with JQuery, Bootstrap...

### Project structure
The project structure is designed thinking about the isolation of the components. Therfore decided to split the whole application in two different submodules:

- **Frontend:** The project frontend is a pure HTML5 + JS application. It uses Angular.js in order to ease the data binding and speed-up the application development process.
- **Backend:** A MongoDB database with a Sails.js in order to provide a REST API to access to the appication data.

### How to contribute

That's an easy one:
1. Fork the project.
2. Improve the project. Try to follow the existing codebase style.
2. Commit your changes following "[Backend/Frontend] : Message" format.
3. Open a pull request.
4. Done.