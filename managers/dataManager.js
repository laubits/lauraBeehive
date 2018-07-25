/**
* @name DataManager
* @extends
* @file dataManager.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class DataManager {

	constructor() {
    this.bees = [];
    this.setCurrentBee = null;

    this.user = new Bee(100, 'Laura Castillo', 'laubits','contact@laubits.com', new Address('Residencial Monserrat', 'concepcion','Tres Rios','1000/1000',new Geo(0.0, 0.0)),'(506)86211231', 'laubits.com', 'null');
    this.bees.push(this.user);
	}

  setCurrentBee(bee){
    this.setCurrentBee = bee;
    console.log(this.setCurrentBee);
  }
}
