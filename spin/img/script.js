var apiKey = "51n2bls2uFiUfsYaR5l0xobWYv9QNVTx"; // Replace with your own API key
    var laughTracks = [
      "https://www.shockwave-sound.com/sound-effects/laugh-sounds/cannedlaugh.mp3"
      
      // Add more laugh track URLs here
    ];

    // Function to search GIFs
    function searchGif(frame1) {
      

      // Clear previous search result
      document.getElementById(frame1).querySelector(".gif").src = "img/flicker.gif";
      

      // Make a request to GIPHY API
      var url = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=fail&type=random";

      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Process the response
          var gif = data.data;
          if (gif) {
            document.getElementById(frame1).querySelector(".gif").src = gif.images.original.url;
            // Show the GIF frame when the new GIF is ready
            document.getElementById(frame1).style.display = "block";
          }
        })
        .catch(function(error) {
          console.log("Error frame1:", error);
        });
    }

    function searchGif(frame2) {
      

      // Clear previous search result
      document.getElementById(frame2).querySelector(".gif").src = "img/flicker.gif";
      

      // Make a request to GIPHY API
      var url = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=fail&type=random";

      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Process the response
          var gif = data.data;
          if (gif) {
            document.getElementById(frame2).querySelector(".gif").src = gif.images.original.url;
            // Show the GIF frame when the new GIF is ready
            document.getElementById(frame2).style.display = "block";
          }
        })
        .catch(function(error) {
          console.log("Error frame2:", error);
        });
    }

    function searchGif(frame3) {
      

      // Clear previous search result
      document.getElementById(frame3).querySelector(".gif").src = "img/flicker.gif";
    

      // Make a request to GIPHY API
      var url = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=fail&type=random";

      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Process the response
          var gif = data.data;
          if (gif) {
            document.getElementById(frame3).querySelector(".gif").src = gif.images.original.url;
            // Show the GIF frame when the new GIF is ready
            document.getElementById(frame3).style.display = "block";
          }
        })
        .catch(function(error) {
          console.log("Error frame3:", error);
        });
    }

    // Function to generate new GIF on button click
    function spin() {
      searchGif("frame1");
      searchGif("frame2");
      searchGif("frame3");
      //setTimeout(playLaughTrack, 2000); // Delay laugh track playback by 2 seconds
    }

    // Function to play the laugh track
    function playLaughTrack() {
      var audio = document.getElementById("laughTrack");
      var randomLaughTrackIndex = Math.floor(Math.random() * laughTracks.length);
      audio.src = laughTracks[randomLaughTrackIndex];
      audio.play();
    }

    // Automatically trigger initial search on page load
    window.onload = function() {
      searchGif("frame1");
      searchGif("frame2");
      searchGif("frame3");
    };

   /* // Event listener for GIF load completion
    document.getElementById("frame1").querySelector(".gif").addEventListener("ended", function() {
      playLaughTrack();
    });
    document.getElementById("frame2").querySelector(".gif").addEventListener("ended", function() {
      playLaughTrack();
    });
    document.getElementById("frame3").querySelector(".gif").addEventListener("ended", function() {
      playLaughTrack();
    }); */