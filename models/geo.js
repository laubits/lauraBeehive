/**
* @name Geo
* @extends
* @file geo.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class Geo{

	constructor (street, suite, city, zipcode,lat,lng) {
    super(street, suite, city, zipcode);

    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.lat = lat;
    this.lng = lng;

	}
}
