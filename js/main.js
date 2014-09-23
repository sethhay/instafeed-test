//Instafeed customized by Marc Hemeon and then modified to my standards    
    feed = new Instafeed({
   get: 'user',
        userId: 173585556,
        accessToken: '173585556.467ede5.0b8460cef2e64b3cb5ef4ccc0e58da54',
        sortby: 'most-recent',
        resolution: 'standard_resolution',
        links: 'false',
        limit: '60',
        template: '<div id="caption"><span>{{caption}} <br />{{likes}} likes on my <a href="http://instagram.com/sethhay" title="Visit my Instagram page" target="_blank">instagram</a></span></div><div id="bg"><img src="{{image}}" /></div>',
  mock: true,
  custom: {
    images: [],
    currentImage: 0,
    showImage: function () {
      var result, image;
      image = this.options.custom.images[this.options.custom.currentImage];
      result = this._makeTemplate(this.options.template, {
        model: image,
        id: image.id,
        link: image.link,
        image: image.images[this.options.resolution].url,
        caption: this._getObjectProperty(image, 'caption.text'),
        likes: image.likes.count,
        comments: image.comments.count,
        location: this._getObjectProperty(image, 'location.name')
      });
      $("#instafeed").html(result);
    }
  },
  success: function (data) {
    this.options.custom.images = data.data; 
    this.options.custom.showImage.call(this);
  }
});
feed.run();

$(window).load(function() {
	$('.cycle-slideshow').cycle({
		speed: 600,
		manualSpeed: 100,
		swipe: true
	});
});