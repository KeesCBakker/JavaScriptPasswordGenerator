# JavaScriptPasswordGenerator
A JavaScript Password Generator - salted hash

Many small applications need to store user credentials, but it’s hard to create a good username/password infrastructure. What if you could just use a small XML file with credentials that don’t actually stores the password, but just a hash and some salt.

For a small cloud project I ended up creating such a solution. The aim is to make a solution that works on the client using JavaScript.

Demo: http://keestalkstechapps.azurewebsites.net/passwordgenerator/
Blog with explanation: http://keestalkstech.com/2015/09/login-credentials-generator-in-javascript/
