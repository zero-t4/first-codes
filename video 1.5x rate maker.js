javascript: try {
  document.querySelector("video").playbackRate = 1.5;
  document.querySelector("audio").playbackRate = 1.5;
  if (document.querySelector("video").playbackRate === 1.5)
    console.log(
      `Done playBackRate is - ${document.querySelector("video").playbackRate}`
    );
} catch (e) {
  alert("Error");
}
