/**
* @name index.js
* @file index.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);


function init() {
	//Declare variables
	var bees;
  var posts;
  var comments;
  var albums;
  var dataManager = new DataManager();
  var navManager = new NavManager(dataManager);

	//Initialize variables
	bees = [];
  posts= [];
  coments= [];
  albums = [];
	//Program Logic
	requestUsersData();
  requestPostsData();
  requestCommentsData();
  requestAlbumsData();
	//'https://jsonplaceholder.typicode.com/todos'
	//'https://jsonplaceholder.typicode.com/photos'
	//'https://jsonplaceholder.typicode.com/albums'
	//'https://jsonplaceholder.typicode.com/comments'
	//'https://jsonplaceholder.typicode.com/posts'

	function requestUsersData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
		request.onreadystatechange = requestUsersDataCompleted;
		request.send();
	}

	function requestUsersDataCompleted(e) {
		var request = e.target;

		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);

				for (var key in data) {
					// console.log(data[key]);
          var beeData = data[key];
          var addressData =data[key].address;
          var companyData = data[key].company;

          var geo = new Geo (addressData.geo.lat, addressData.geo.lng);

          var address = new Address(addressData.street, addressData.suite, addressData.city, addressData.zipcode, geo);

          var company = new Company(companyData.companyName, companyData.catchPhrase, companyData.bs);

					var bee = new Bee(beeData.id, beeData.name, beeData.username,beeData.email,
          new Address(addressData.street, addressData.suite, addressData.city,  addressData.zipcode, new Geo(addressData.geo.lat, addressData.geo.lng)),beeData.phone, beeData.website, new Company(companyData.companyName, companyData.catchPhrase, companyData.bs));
					dataManager.bees.push(bee);
				}

				navManager.showBees();
			}
			else {
				console.log('Server Error');
			}
		}
	}

  function requestPostsData() {
    var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		request.onreadystatechange = requestPostsDataCompleted;
		request.send();

  }

  function requestPostsDataCompleted(e) {
    var request = e.target;

		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);

				for (var key in data) {
					// console.log(data[key]);
          var postData = data[key];
          // var commentData=data[key].comments;
          //
          // var comment = new Comment (commentData.postId, commentData.id, commentData.name, commentData.email, commentData.body);

					var post = new Post(postData.userId, postData.id, postData.title, postData.body);
            // new Comment(commentData.postId, commentData.id, commentData.name, commentData.email. commentData.body));
					dataManager.posts.push(post);
				}

				navManager.showBeePost();
			}
			else {
				console.log('Server Error');
			}
		}

  }

  function requestCommentsData() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
    request.onreadystatechange = requestCommentsDataCompleted;
    request.send();

  }

  function requestCommentsDataCompleted(e) {
    var request = e.target;

		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);

				for (var key in data) {
					// console.log(data[key]);
          var commentData = data[key];
          // var commentData=data[key].comments;
          //
          // var comment = new Comment (commentData.postId, commentData.id, commentData.name, commentData.email, commentData.body);

					var comment = new Comment(commentData.postId, commentData.id, commentData.name, commentData.email, commentData.body);
					dataManager.comments.push(comment);
				}

				navManager.showBeePostComment();
			}
			else {
				console.log('Server Error');
			}
		}

  }

  function requestAlbumsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
		request.onreadystatechange = requestAlbumsDataCompleted;
		request.send();
	}

	function requestAlbumsDataCompleted(e) {
		var request = e.target;

		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);

				for (var key in data) {
					// console.log(data[key]);
          var albumData = data[key];

					var album = new Album(albumData.userId, albumData.id, albumData.title);
					dataManager.albums.push(album);
				}

				navManager.showBeeAlbum();
			}
			else {
				console.log('Server Error');
			}
		}
	}


  function addPostByUserID(post) {

  }
}
