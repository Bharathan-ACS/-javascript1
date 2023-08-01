const colorChangeButton = document.getElementById('colorChangeButton');
const targetText = document.getElementById('targetText');
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'];
function changeTextColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  targetText.style.color = randomColor;
}
colorChangeButton.addEventListener('click', changeTextColor);
