var data = [];
function myFunction(item, index) {
  var description = document.querySelectorAll('ytd-video-renderer')[index].getElementsByClassName('style-scope ytd-video-renderer')["description-text"].innerHTML
  var channelName = document.querySelectorAll('ytd-video-renderer')[index].getElementsByClassName('style-scope ytd-video-renderer')["channel-name"].getElementsByClassName('yt-simple-endpoint')[0].innerHTML
  
  console.log(description)
  console.log(channelName)
  data.push({"description": description, "channelName":channelName})
}

document.querySelectorAll('ytd-video-renderer').forEach(myFunction)
console.log(data)