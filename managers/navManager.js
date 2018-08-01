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
    this.postsComponent = document.getElementById('postsComponent');
    this.commentsComponent = document.getElementById('commentsComponent');
    this.albumsComponent = document.getElementById('albumsComponent');

	}

  showBees() {
    this.dataManager.bees.forEach(bee => {
      var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
    });
  }

  showBeePost() {
    this.dataManager.posts.forEach(post =>{
      var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
    });

  }

  showBeePostComment() {
    this.dataManager.comments.forEach(comment =>{
      var commentComponent = new CommentComponent(comment, this.commentsComponent, this.dataManager);
    });
  }

  showBeeAlbum() {
    this.dataManager.albums.forEach(album => {
      var albumComponent = new AlbumComponent(album, this.albumsComponent, this.dataManager);
    });

  }

  showBeeTodos() {

  }
}
