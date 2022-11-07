fetch(
  'https://api.unsplash.com/photos/random?client_id=8U3z4H-Tfaweecdmxu322OHaCz17dpj4FUt2aszzHQA&orientation=landscape&query=nature',
)
  .then((res) => res.json())
  .then((data) => {
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
  const date = new Date();
  const time = document.getElementById('time');
  time.textContent = date.toLocaleTimeString('en-NL', { timeStyle: 'short' });
}
setInterval(viewCurrentTime, 1000);

//FOCUS CONTAINER

const focus = document.getElementById('focus');
focus.addEventListener('click', () => {
  document.getElementById('time').style.fontSize = '10rem';
  focus.style.display = 'none';

  //INPUT
  let input = document.createElement('input');
  input.type = 'text';
  input.className = 'focus';
  input.placeholder = 'type here ...';
  const focusContainer = document.getElementById('focus-container');
  focusContainer.appendChild(input);

  //SET FOCUS BUTTON
  const setFocus = document.createElement('button');
  const spanText = document.createTextNode('Set focus');
  setFocus.appendChild(spanText);
  focusContainer.appendChild(setFocus);
  //input length
  setFocus.addEventListener('click', () => {
    if (input.value.length < 3 || input.value.length > 15) {
      setFocus.style = disabled;
    }
    //AFTER SETTING FOCUS STYLE
    focus.textContent = input.value;
    focus.style.fontSize = '6rem';
    time.style.fontSize = '5rem';
    focus.style.display = 'contents';
    input.style.display = 'none';
    setFocus.style.display = 'none';
  });
});
//QUOTE
const quote = document.getElementById('quote');

fetch('https://api.quotable.io/random?maxLength=60')
  .then((response) => response.json())
  .then((data) => {
    quote.innerHTML = `"${data.content}"`;
  })
  .catch((err) => {
    quote.innerHTML = `"Nothing great was ever achieved without enthusiasm"`;
  });

//clear search input after submission
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const searchInput = document.getElementById('search-input');
  searchInput.value = '';
});
