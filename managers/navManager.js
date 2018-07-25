/**
* @name NavManager
* @extends
* @file navManager.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class NavManager {

	constructor(dataManager) {
    this.dataManager = dataManager;
    this.beesComponent = document.getElementById('beesComponent');
    //Get container for bee posts, albums and todos

	}

  showBees() {
    this.dataManager.bees.forEach(bee => {
      var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
    });
  }

  showBeePost() {

  }

  showBeeAlbum() {

  }

  showBeeTodos() {
    
  }
}
