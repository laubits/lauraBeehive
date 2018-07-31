/**
* @name Post
* @extends
* @file post.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class Post {

	constructor(userId, id, title, body) {
     this.userId = userId;
     this.id = id;
     this.title = title;
     this.body = body;
     this.comments = [];

	}
}
