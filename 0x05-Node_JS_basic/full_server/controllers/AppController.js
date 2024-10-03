#!/usr/bin/node

class AppController {
  static getHomepage(request, response) {
    response.status(200).send("Helllo Holberton School");
  }
}

module.exports = AppController;
