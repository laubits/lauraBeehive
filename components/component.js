/**
* @name Component
* @extends
* @file component.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class Component {

	constructor(model, parent, dataManager) {
    this.model = model;
    this.parent = parent;
    this.dataManager = dataManager;
    this.container = document.createElement('div');
    this.parent.appendChild(this.container);

	}
}
