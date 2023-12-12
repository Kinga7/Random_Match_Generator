// Function to play sound
function playSound(soundUrl) {
    const audio = new Audio(soundUrl);
    audio.play();
  }
  
  // Function to shuffle an array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Function to generate matches with a delay
  function generateMatchesWithDelay(team1, team2, maps) {
    const matchContainer = document.getElementById('matches');
    matchContainer.innerHTML = '';
  
    const totalMatches = team1.length;
    let matchIndex = 0;
  
    function generateMatch() {
      const player1 = team1[matchIndex];
      const player2 = team2[matchIndex];
      const selectedMap = maps[matchIndex % maps.length]; // Cycling through maps using modulo
  
      const matchAnnouncement = document.createElement('div');
      matchAnnouncement.classList.add('match-announcement');
  
      const matchElement = document.createElement('p');
      matchElement.textContent = `${player1} vs ${player2} on ${selectedMap}`;
  
      matchAnnouncement.appendChild(matchElement);
      matchContainer.appendChild(matchAnnouncement);
  
      // Apply animation for each match announcement
      setTimeout(() => {
        matchAnnouncement.style.opacity = '1';
        matchAnnouncement.style.transform = 'translateY(0)';
      }, 100); // Immediate animation for the first match, adjust timing as needed
  
      matchIndex++;
  
      if (matchIndex < totalMatches) {
        setTimeout(generateMatch, 3000); // All matches have a 3-second delay
      } else {
        // Display the match window after all matches are displayed
        setTimeout(() => {
          const matchWindow = document.getElementById('match-window');
          matchWindow.style.display = 'block';
        }, 3000 * totalMatches);
      }
    }
  
    generateMatch(); // Start generating matches
  }
  
  // Event listener for Generate Matches button
  document.getElementById('generate-btn').addEventListener('click', function() {
    const team1Input = document.getElementById('team1-input').value;
    const team2Input = document.getElementById('team2-input').value;
  
    const team1 = team1Input.split(',').map(player => player.trim());
    const team2 = team2Input.split(',').map(player => player.trim());
  
    if (team1.length !== team2.length) {
      alert('Teams should have the same number of players');
      return;
    }
  
    const maps = ['Neo Dark Origin 2.1', 'Invader 1.0', 'Apocalypse 1.4', 'La Campanella 1.1', 'Polypoid 1.75', 'Retro 1.2', 'Tempest 1.1'];
    shuffle(maps);
  
    // Play sound when generating matches
    playSound('https://match-generator-files777.s3.amazonaws.com/gogogo.wav');
  
    generateMatchesWithDelay(team1, team2, maps);
  });
  