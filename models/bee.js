/**
* @name Bee
* @extends
* @file bee.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class Bee {

	constructor(id, name, username, email, address, phone, website, company) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
    this.post = [];
    this.album = null;
    this.todos = [];
	}
}
