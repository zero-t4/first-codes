javascript: try {
  document.querySelector("video").playbackRate = 1;
  document.querySelector("audio").playbackRate = 1;
  if (document.querySelector("video").playbackRate === 1)
    console.log(
      `Done playBackRate is - ${document.querySelector("video").playbackRate}`
    );
} catch (e) {
  alert("Error");
}
