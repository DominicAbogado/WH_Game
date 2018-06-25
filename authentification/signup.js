var inquirer = require('inquirer');
var md5 = require('md5');
var db = require("./db.js");
var firebase = require('firebase');

function signUp(onSignedIn) {
    inquirer.prompt([
        {
            "name": "answerUserName",
            "type": "input", 
            "message": "What is your user name?"
        },
        {
            "name": "answerPassword",
            "type": "input", 
            "message": "What is your password?"
        }
    ]).then(answers => {
        var connection = db.login();
        /*
        CREATE TABLE users (
            id integer not null primary key auto_increment,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(40) NOT NULL
        );
        */

        connection.connect(function(err) {
            if (err) {
                throw err;
            }

            var username = answers.answerUserName;
            var password = answers.answerPassword;

            var query = `CREATE TABLE IF NOT EXISTS users (
                id integer not null primary key auto_increment,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(40) NOT NULL
            );
            
            INSERT INTO users (username, password) VALUES (?, ?);
            `;

            connection.query(query, [username, password]);
        })

        onSignedIn(answers.answerUserName);
    });
}

module.exports = {
    signUp: signUp

}