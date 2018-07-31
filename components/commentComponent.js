/**
* @name CommentComponent
* @extends
* @file commentComponent.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class CommentComponent extends Component{

	constructor(model, parent, dataManager) {
    super(model, parent, dataManager);

    this.container.className ='commentComponent';

    //createElement
    this.postId = document.createElement('p');
    this.id = document.createElement('p');
    this.name = document.createElement('h1');
    this.email = document.createElement('p');
    this.body = document.createElement('p');

    //Add Elements
    this.container.appendChild(this.postId);
    this.container.appendChild(this.id);
    this.container.appendChild(this.name);
    this.container.appendChild(this.email);
    this.container.appendChild(this.body);

    //Fill Elements

    this.postId.innerText = this.model.postId;
    this.id.innerText = this.model.id;
    this.name.innerText = this.model.name;
    this.email.innerText = this.model.email;
    this.body.innerText = this.model.body;

    this.container.comment = this.model;

	}
}
