const generateButton = document.getElementById("button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

generateButton.onclick = () => generateTree();

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function drawTree(startX, startY, len, angle, branchWidth) {
  ctx.lineWidth = branchWidth;
  ctx.beginPath();
  ctx.save();
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  //   draw leafs
  if (len < 7) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  const randomAngle2 = angle + Math.random() * 10 - 15;
  const randomAngle1 = angle + Math.random() * 10 + 15;

  drawTree(0, -len, len * 0.8, randomAngle1, branchWidth * 0.7);
  drawTree(0, -len, len * 0.8, randomAngle2, branchWidth * 0.7);
  ctx.restore();
}

function generateTree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const angle = Math.random() * 30 - 15;
  const width = Math.random() * 100 + 10;
  const len = Math.random() * 40 + 130;
  const treeColor = getRandomColor();
  const leafColor = getRandomColor();

  ctx.strokeStyle = treeColor;
  ctx.fillStyle = leafColor;

  const startX = canvas.width / 2;
  const startY = canvas.height - 80;

  generateButton.style.background = treeColor;
  drawTree(startX, startY, len, angle, width);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateTree();
