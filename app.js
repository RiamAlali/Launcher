
fetch(
  'https://api.unsplash.com/photos/random?client_id=8U3z4H-Tfaweecdmxu322OHaCz17dpj4FUt2aszzHQA&orientation=landscape&query=nature',
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById(
      'image-info',
    ).textContent = `Photo By: ${data.user.name} / Unsplash`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1463663090918-4d8338918803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzY3MDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1MTAwMTY&ixlib=rb-4.0.3&q=80&w=1080
)`;
    document.getElementById(
      'image-info',
    ).textContent = `Photo By: Christian Widell / Unsplash`;
  });
// time
function viewCurrentTime() {
  const date = new Date()
  document.getElementById("time").textContent = date.toLocaleTimeString("en-NL", {timeStyle: "short"})
}
setInterval(viewCurrentTime, 1000)
