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
    this.posts = [];
    this.setCurrentPost = null;
    this.comments = [];
    this.setCurrentComment= null;

    this.user = new Bee(100, 'Laura Castillo', 'laubits','contact@laubits.com', new Address('Residencial Monserrat', 'concepcion','Tres Rios','1000/1000',new Geo(0.0, 0.0)),'(506)86211231', 'laubits.com', 'null');
    this.bees.push(this.user);

    // this.post = new Post(userID, id, title, body, comments);
    // this.posts.push(this.post);
	}

  setCurrentBee(bee){
    this.setCurrentBee = bee;
    console.log(this.setCurrentBee);
  }


  setCurrentPost(post) {
    this.setCurrentPost = post;
    console.log(this.setCurrentPost);
    }

  addPostToBee(post){
    console.log(post);
    this.bees.forEach(function (bee){
      if (bee.id ===post.userId){
        bee.post.push(post);
        console.log(bee);
        return;
      }
    });

  }
  addCommentToPost(comment) {
    this.bees.forEach(function(bee){
      bee.posts.forEach(function(post){
        if(post.id === comment.postId){
          post.comments.push(comment);
          return;
        }

      });
    });

  }
  setCurrentComment(comment) {
    this.setCurrentComment = comment;
    console.log(this.setCurrentComment);
  }

}
