/**
* @name AddressComponent
* @extends
* @file addressComponent.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class AddressComponent extends Component{

	constructor(model, parent, dataManager) {
    super(model, parent, dataManager);
    this.container.className = 'beeComponent';

    //Create Element
    this.street = document.createElement('p');
    this.suite = document.createElement('p');
    this.city = document.createElement('p');
    this.zipcode = document.createElement('p');

    //Add Elements

    this.container.appendChild(this.street);
    this.container.appendChild(this.suite);
    this.container.appendChild(this.city);
    this.container.appendChild(this.zipcode);

    //Fill Elements

    this.street.innerText = this.model.street;
    this.suite.innerText = this.model.suite;
    this.city.innerText = this.model.city;
    this.zipcode.innerText = this.model.zipcode;

    this.container.address = this.model;










	}
}
