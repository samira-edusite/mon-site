// Fonction pour afficher la liste déroulante des leçons
function toggleLeconList() {
  const leconList = document.getElementById('leconList');
  leconList.style.display = leconList.style.display === 'block' ? 'none' : 'block';
}

// Fonction pour ouvrir une leçon spécifique
function openLecon(leconNumber) {
  document.getElementById('leconsModal').style.display = 'block';
  
  let content = '';
  
  // Leçon 1 : La phrase nominale et la phrase verbale
  if (leconNumber === '1') {
    content = `
      <div class="lecon-1">
        <h3>La phrase verbale et la phrase nominale</h3>
        <h4>I) La phrase verbale :</h4>
        <p>Une phrase verbale est une suite de mots contenant un verbe.</p>
        <h4>II) La phrase nominale</h4>
        <p>Une phrase nominale est une suite de mots sans verbe.</p>
      </div>
    `;
  }

  // Leçon 2 : COD & COI
  else if (leconNumber === '2') {
    content = `
      <div class="lecon-2">
        <h3>Leçon 2 : Les COD et COI</h3>
        <p>Le complément d'objet direct (COD) est le mot ou le groupe de mots qui se joint au verbe sans préposition.</p>
      </div>
    `;
  }

  // Leçon 3 : L'accord sujet-verbe
  else if (leconNumber === '3') {
    content = `
      <div class="lecon-3">
        <h3>Leçon 3 : L'accord sujet-verbe</h3>
        <p>Le verbe s'accorde toujours avec son sujet, quelle que soit la position de celui-ci dans la phrase.</p>
      </div>
    `;
  }

  // Mise à jour du contenu de la modal
  document.getElementById('lecon-content').innerHTML = content;
}

// Fonction pour fermer la modale
function closeLecons() {
  document.getElementById('leconsModal').style.display = 'none';
}
