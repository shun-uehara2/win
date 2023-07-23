let victoryCount = localStorage.getItem('victoryCount') ? parseInt(localStorage.getItem('victoryCount')) : 0;
let defeatCount = localStorage.getItem('defeatCount') ? parseInt(localStorage.getItem('defeatCount')) : 0;

document.getElementById('message').textContent = `${victoryCount} - ${defeatCount}`;

document.getElementById('victory').addEventListener('click', function() {
  victoryCount += 1;
  localStorage.setItem('victoryCount', victoryCount);
  document.getElementById('message').textContent = `${victoryCount} - ${defeatCount}`;
});

document.getElementById('defeat').addEventListener('click', function() {
  defeatCount += 1;
  localStorage.setItem('defeatCount', defeatCount)
  document.getElementById('message').textContent = `${victoryCount} - ${defeatCount}`;
});
