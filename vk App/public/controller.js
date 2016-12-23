var Controller = {
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return Model.getFriends().then(function(friends) {
            results.innerHTML = View.render('friends', {list: friends.items});
        });
    },
    newsRoute: function() {
        return Model.getNews().then(function(news) {
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    groupsRoute: function() {
        return Model.getGroups().then(function(groups) {
            results.innerHTML = View.render('groups', {list: groups.items});
        });
    },
    photosRoute: function() {
      return Model.getAllPhotos()
      .then(function(photos) {
        for(let i = 0; i < photos.items.length; i++){
          Model.getComment(photos.items[i].id).then(function(comment){
            if(comment.items[0] != undefined) {
              for(let i = 0; i < comment.items.length; i++) {
                let currentId = comment.items[i].from_id;
                comment.profiles.forEach(function(item, index){
                  if(item.id == currentId){
                    comment.items[i].photo_50 = comment.profiles[index].photo_50;
                    comment.items[i].first_name = comment.profiles[index].first_name;
                    comment.items[i].last_name = comment.profiles[index].last_name;
                  }
                })
              }
              photos.items[i].commentsCount = comment.items;
              console.log(photos);
            }
          })
          .then(function() {
            results.innerHTML = View.render('photos', {list: photos.items});
          })
        }
      })
    }
};