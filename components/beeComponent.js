/**
* @name BeeComponent
* @extends
* @file beeComponent.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class BeeComponent extends Component {

  constructor(model, parent, dataManager) {
    super(model, parent, dataManager);
    this.container.className = 'beeComponent';

    //Create Elements

    this.title = document.createElement('h1');
    this.username = document.createElement('p');
    this.email = document.createElement('p');
    this.street = document.createElement('p');
    this.suite = document.createElement('p');
    this.city = document.createElement('p');
    this.zipcode = document.createElement('p');
    this.lat = document.createElement('p');
    this.lng = document.createElement('p');

    this.phone = document.createElement('p');
    this.website = document.createElement('p');
    this.companyName = document.createElement('p');
    this.catchPhrase = document.createElement('p');
    this.bs = document.createElement('p');
    this.posts = document.createElement('p');
    this.photos = document.createElement('p');
    this.todos = document.createElement('p');
    this.postsBtn = document.createElement('button');
    this.albumBtn = document.createElement('button');
    this.todosBtn = document.createElement('button');


    //Add Elements

    this.container.appendChild(this.title);
    this.container.appendChild(this.username);
    this.container.appendChild(this.email);
    this.container.appendChild(this.street);
    this.container.appendChild(this.suite);
    this.container.appendChild(this.city);
    this.container.appendChild(this.zipcode);
    this.container.appendChild(this.lat);
    this.container.appendChild(this.lng);
    this.container.appendChild(this.phone);
    this.container.appendChild(this.website);
    this.container.appendChild(this.companyName);
    this.container.appendChild(this.catchPhrase);
    this.container.appendChild(this.bs);
    this.container.appendChild(this.posts);
    this.container.appendChild(this.photos);
    this.container.appendChild(this.todos);
    this.container.appendChild(this.postsBtn);
    this.container.appendChild(this.albumBtn);
    this.container.appendChild(this.todosBtn);

    //Fill Elements

    this.title.innerText = this.model.name;
    this.username.innerText = this.model.username;
    this.email.innerText = this.model.email;
    this.street.innerText = this.model.street;
    this.suite.innerText = this.model.suite;
    this.city.innerText = this.model.city;
    this.zipcode.innerText = this.model.zipcode;
    this.lat.innerText = this.model.lat;
    this.lng.innerText = this.model.lng;
    this.phone.innerText = this.model.phone;
    this.website.innerText = this.model.website;
    this.companyName.innerText = this.model.companyName;
    this.catchPhrase.innerText = this.model.catchPhrase;
    this.bs.innerText = this.model.bs;
    this.posts.innerText = 'Posts:' + this.model.posts.length;
    this.photos.innerText = 'Photos:0'; //+ this.model.album.photos.length;
    this.todos.innerText = 'Todos:' + this.model.posts.length;
    this.postsBtn.innerHTML = 'POSTS';
    this.albumBtn.innerHTML = 'ALBUM';
    this.todosBtn.innerHTML = 'TODOS';

    this.postsBtn.onclick = this.postsBtnClick.bind(this);

    this.container.bee = this.model;
  }
  postsBtnClick(e) {
    this.dataManager.setCurrentBee(this.model);
  }
}
