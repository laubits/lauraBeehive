/**
* @name AlbumComponent
* @extends
* @file albumComponent.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class AlbumComponent extends Component{

	constructor(model, parent, dataManager) {
    super(model, parent, dataManager);

    this.container.className = 'albumComponent';


    //Create Element
    this.userId = document.createElement('p');
    this.id = document.createElement('p');
    this.title = document.createElement('h1');

    //Add Element
    this.container.appendChild(this.userId);
    this.container.appendChild(this.id);
    this.container.appendChild(this.title);

    //Fill Element

    this.userId.innerText = this.model.userId;
    this.id.innerText = this.model.id;
    this.title.innerText = this.model.title;

    this.container.comment = this.model;

	}
}
