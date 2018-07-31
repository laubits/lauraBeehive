/**
* @name PostComponent
* @extends
* @file postComponent.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class PostComponent extends Component{

	constructor(model, parent, dataManager) {
    super(model, parent, dataManager);

    this.container.className = 'postComponent';

    //createElement
    this.userId  = document.createElement('p');
    this.id = document.createElement('p');
    this.title = document.createElement('h1');
    this.body = document.createElement('p');
    this.comments = document.createElement('p');
    this.commentsBtn = document.createElement('button');


    //Add Elements

    this.container.appendChild(this.userId);
    this.container.appendChild(this.id);
    this.container.appendChild(this.title);
    this.container.appendChild(this.body);
    this.container.appendChild(this.comments)
    this.container.appendChild(this.commentsBtn)

    //Fill Elements

    this.userId.innerText = this.model.userId;
    this.id.innerText = this.model.id;
    this.title.innerText = this.model.title;
    this.body.innerText = this.model.body;
    this.comments.innerText = 'Comments:' + this.model.comments.length;
    this.commentsBtn.innerHTML = 'COMMENTS';

    this.commentsBtn.onclick = this.commentsBtnClick.bind(this);

    this.container.post = this.model;
	}
  addComments() {
    for (let index = 0; i < this.model.comments.length; i++){
      var commentComponent = new CommentComponent(this.model.comments[i],this.container, this.dataManager);
    }

  }

  commentsBtnClick(e) {
    this.dataManager.setCurrentPost(this.model);
  }
}
