function toggleLeconList() {
  const leconList = document.getElementById('leconList');
  leconList.style.display = leconList.style.display === 'block' ? 'none' : 'block';
  document.getElementById('activiteList').style.display = 'none';
}

function toggleActiviteList() {
  const activiteList = document.getElementById('activiteList');
  activiteList.style.display = activiteList.style.display === 'block' ? 'none' : 'block';
  document.getElementById('leconList').style.display = 'none';
}

function openLecon(leconNumber) {
  document.getElementById('leconsModal').style.display = 'block';
  const content = {
    "1": `
      <div class="lesson-content" style="font-family: 'Segoe UI', sans-serif; font-size: 18px; color: #2c3e50; line-height: 1.6;">
        <h2 style="color:#ffffff; background:#2ecc71; padding:15px; border-radius:10px; text-align:center;">Leçon : La phrase verbale et la phrase nominale</h2>
        <div style="border: 2px solid #2ecc71; border-radius: 12px; padding: 20px; background-color: #ecf9f1;">
          <p><strong style="color:#e67e22;">Définition :</strong></p>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li><span style="color:#27ae60; font-weight:bold;">Une phrase verbale</span> est une phrase qui contient un ou plusieurs verbes conjugués.</li>
            <li><span style="color:#2980b9; font-weight:bold;">Une phrase nominale</span> est une phrase qui ne contient aucun verbe conjugué.</li>
          </ul>
          <p><strong style="color:#e67e22;">Exemples :</strong></p>
          <div style="margin-top:10px;">
            <p style="background-color:#ecf0f1; padding:12px; border-left:5px solid #27ae60; border-radius:6px;">✅ Phrase verbale : <em style="color:#16a085;">Mon frère mange une pomme.</em></p>
            <p style="background-color:#ecf0f1; padding:12px; border-left:5px solid #2980b9; border-radius:6px;">✅ Phrase nominale : <em style="color:#8e44ad;">Quelle belle journée !</em></p>
          </div>
          <p><strong style="color:#e67e22;">Remarques :</strong></p>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>📌 La phrase verbale est la forme la plus utilisée dans la langue française.</li>
            <li>💬 La phrase nominale est souvent utilisée à l’oral, dans les titres, les slogans, ou les interjections.</li>
          </ul>
        </div>
      </div>
    `,
    "2": `
      <div class="lesson-content" style="font-family: 'Segoe UI', sans-serif; font-size: 18px; color: #2c3e50; line-height: 1.6;">
        <h2 style="color:#ffffff; background:#e67e22; padding:15px; border-radius:10px; text-align:center;">Leçon : COD et COI</h2>
        <div style="border: 2px solid #e67e22; border-radius: 12px; padding: 20px; background-color: #fff9f0;">
          <h3 style="color:#c0392b;">I) Le Complément d'Objet Direct (COD)</h3>
          <p>Le complément d'objet direct (COD) est le mot ou le groupe de mots qui se joint au verbe <strong>sans préposition</strong> pour en compléter le sens.</p>
          <p>C'est un complément du verbe. Il représente l'être ou la chose qui reçoit directement l'action que fait le sujet.</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>🔹 Je conduis <strong style="color:#c0392b;">la voiture</strong>.</li>
            <li>🔹 Maman fait <strong style="color:#c0392b;">les gâteaux</strong>.</li>
          </ul>
          <p><strong>Pour reconnaître le COD</strong>, on pose la question <em>"qui ?"</em> ou <em>"quoi ?"</em> après le verbe :</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>➡️ Je conduis <em>quoi</em> ? → <strong style="color:#c0392b;">La voiture</strong> = COD</li>
            <li>➡️ Maman fait <em>quoi</em> ? → <strong style="color:#c0392b;">Les gâteaux</strong> = COD</li>
          </ul>

          <h3 style="color:#2980b9; margin-top:30px;">II) Le Complément d'Objet Indirect (COI)</h3>
          <p>Le complément d'objet indirect (COI) est un mot ou un groupe de mots qui se joint au verbe <strong>par l'intermédiaire d'une préposition</strong> pour en compléter le sens.</p>
          <p>C'est un complément du verbe. Il représente l'être ou la chose qui reçoit indirectement l'action que fait le sujet.</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>🔹 Pascal parle <strong style="color:#2980b9;">à son frère</strong>.</li>
            <li>🔹 Sébastien se souvient <strong style="color:#2980b9;">de sa leçon</strong>.</li>
          </ul>
          <p><strong>Pour reconnaître le COI</strong>, on pose les questions :</p>
          <ul>
            <li>À qui ? / À quoi ?</li>
            <li>De qui ? / De quoi ?</li>
            <li>Pour qui ? / Pour quoi ?</li>
            <li>Contre qui ? / Contre quoi ?</li>
          </ul>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>➡️ À qui parle Pascal ? → <strong style="color:#2980b9;">à son frère</strong> = COI</li>
            <li>➡️ De quoi se souvient Sébastien ? → <strong style="color:#2980b9;">de sa leçon</strong> = COI</li>
          </ul>
        </div>
      </div>
    `,
    "3": `
      <div class="lesson-content" style="font-family: 'Segoe UI', sans-serif; font-size: 18px; color: #2c3e50; line-height: 1.6;">
        <h2 style="color:#ffffff; background:#8e44ad; padding:15px; border-radius:10px; text-align:center;">Leçon : L'accord sujet-verbe</h2>
        <div style="border: 2px solid #8e44ad; border-radius: 12px; padding: 20px; background-color: #f8f0ff;">
          <p><strong>Le verbe s'accorde toujours avec son sujet, quelle que soit la position de celui-ci dans la phrase.</strong></p>
          <p style="background:#ecf0f1; border-left: 4px solid #27ae60; padding:10px;">👉 Les enfants <strong style="color:#27ae60;">mangent</strong> le gâteau au chocolat.<br><em>→ Le verbe "manger" s'accorde avec le sujet "les enfants".</em></p>
          <p style="background:#ecf0f1; border-left: 4px solid #27ae60; padding:10px;">👉 Le gâteau que tu as fait <strong style="color:#27ae60;">est</strong> très bon.<br><em>→ Le verbe "être" s'accorde avec le sujet "le gâteau".</em></p>

          <p>Il faut savoir reconnaître le sujet et le verbe pour accorder correctement.</p>
          <p><strong>Pour trouver le sujet :</strong> posez la question <em>"qu'est-ce qui ?"</em> ou <em>"qui ?"</em> après le verbe.</p>
          <p style="background:#ecf0f1; border-left: 4px solid #3498db; padding:10px;">👉 QUI prend un bain ? → <strong style="color:#3498db;">Les enfants</strong>.</p>

          <p><strong>Un même sujet peut avoir plusieurs verbes :</strong></p>
          <p style="background:#ecf0f1; border-left: 4px solid #9b59b6; padding:10px;">👉 Cet enfant <strong style="color:#9b59b6;">crie, pleure et fait</strong> des caprices.</p>
          <p style="background:#ecf0f1; border-left: 4px solid #9b59b6; padding:10px;">👉 Ces enfants <strong style="color:#9b59b6;">crient, pleurent et font</strong> des caprices.</p>

          <p><strong>Un verbe peut avoir plusieurs sujets, on l'accordera au pluriel :</strong></p>
          <p style="background:#ecf0f1; border-left: 4px solid #e67e22; padding:10px;">👉 Le professeur et le directeur <strong style="color:#e67e22;">sont</strong> en réunion.</p>

          <p><strong>Dans une phrase interrogative :</strong> le sujet est placé après le verbe (sujet inversé).</p>
          <p>Les règles d'accord sont les mêmes.</p>

          <p style="background:#ecf0f1; border-left: 4px solid #34495e; padding:10px;"><strong>N.B. :</strong> Il faut mettre un trait d'union entre le verbe et le sujet. Ne pas oublier le <em>"t euphonique"</em> pour la liaison :</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>🔹 Sans consonne euphonique : <em>D'où viens-tu ?</em></li>
            <li>🔹 Avec <strong>t euphonique</strong> : <em>Où va-t-elle ?</em></li>
          </ul>
        </div>
      </div>
    `
  };
  document.getElementById('lecon-content').innerHTML = content[leconNumber] || "";
}

function closeLecons() {
  document.getElementById('leconsModal').style.display = 'none';
}

function openHistoire() {
  const content = `
    <div style="font-family: 'Comic Sans MS', cursive; font-size: 18px; line-height: 1.6; color: #2d3436; padding: 20px; background: linear-gradient(135deg, #fceabb, #f8b500); border-radius: 15px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
      <h2 style="text-align:center; color: #d63031; background-color:#ffeaa7; padding:10px; border-radius:8px;">📘 Histoires pour enfants</h2>
      <div style="display:flex; justify-content:center; gap:15px; margin-bottom:20px;">
        <button onclick="afficherHistoire(1)">Histoire 1</button>
        <button onclick="afficherHistoire(2)">Histoire 2</button>
        <button onclick="afficherHistoire(3)">Histoire 3</button>
        <button onclick="afficherHistoire(4)">Histoire 4</button>
      </div>
      <div id="contenu-histoire" style="opacity: 0; transition: opacity 0.6s ease; background-color: #fffde7; padding: 15px; border-radius: 10px; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);"></div>
    </div>
  `;
  document.getElementById('leconsModal').style.display = 'block';
  document.getElementById('lecon-content').innerHTML = content;
}

function afficherHistoire(num) {
  let histoire = "";

  if (num === 1) {
    histoire = `
      <h3 style="color: #6c5ce7; background-color:#dfe6e9; padding: 10px; border-radius: 8px;">🐭 Lili la petite souris et le trésor du grenier</h3>
      <p><span style="color:#00b894;">Il était une fois</span>, dans une vieille maison en bois, une petite souris grise appelée <strong style="color:#6c5ce7;">Lili</strong>.</p>
      <p><strong style="color:#e67e22;">Lili</strong> habitait dans un petit trou douillet au fond d’un <span style="color:#fd79a8;">grenier</span> rempli de vieilles boîtes et de secrets oubliés.</p>
      <p>Chaque matin, Lili partait à la recherche de <span style="color:#fab1a0;">miettes de pain</span> ou d’un bout de <strong style="color:#f1c40f;">fromage</strong>. Elle était <strong style="color:#0984e3;">maline</strong>, <strong style="color:#d35400;">rapide</strong>, et surtout très <strong style="color:#00cec9;">curieuse</strong>.</p>
      <p>Un jour, en fouillant derrière une <span style="color:#636e72;">valise poussiéreuse</span>, elle découvrit une boîte <span style="color:#fdcb6e;">brillante</span> et fermée à clé.</p>
      <p>Une clé était accrochée juste au-dessus, suspendue à un clou. Lili grimpa prudemment, attrapa la clé, et <span style="color:#00cec9;">ouvrit la boîte</span>...</p>
      <p style="background-color:#ffeaa7; padding:10px; border-left:5px solid #fdcb6e; border-radius: 5px;">À l’intérieur, elle trouva le plus <strong style="color:#e17055;">gros morceau de gruyère</strong> qu’elle ait jamais vu ! Ses yeux brillèrent de bonheur 😍.</p>
      <p>Mais soudain, elle entendit un bruit… <span style="color:#2d3436;">C’était le vieux chat Moustache ! 😼</span></p>
      <p style="background-color:#fab1a0; padding:10px; border-left:5px solid #d63031; border-radius: 5px;">Vite, Lili referma la boîte, prit un petit bout de fromage et fila dans son trou !</p>
      <p>Depuis ce jour, Lili gardait le secret du trésor du grenier, et chaque nuit, elle en grignotait un tout petit morceau. 🧀✨</p>
      <p style="text-align:center; font-size:20px; color:#6c5ce7;"><strong>🎉 Fin 🎉</strong></p>
    `;
  } else if (num === 2) {
    histoire = `
      <h3 style="color: #00cec9; background-color:#dfe6e9; padding: 10px; border-radius: 8px;">🦊 Le renard et le corbeau</h3>
      <p>Un <strong style="color:#d35400;">renard malin</strong> vit un <strong style="color:#2d3436;">corbeau</strong> perché sur un arbre, tenant un <span style="color:#f1c40f;">fromage</span>.</p>
      <p>Le renard dit : <em>"Que tu es beau ! Si ta voix est aussi belle, tu es le roi des oiseaux !"</em></p>
      <p>Flatté, le corbeau ouvrit le bec pour chanter... et le <strong style="color:#f39c12;">fromage tomba</strong> !</p>
      <p>Le renard le prit et s’éloigna en disant : <em>"Apprenez que tout flatteur vit aux dépens de celui qui l’écoute."</em></p>
      <p style="text-align:center; font-weight:bold; color:#e67e22;">🐾 Fin 🐾</p>
    `;
  } else if (num === 3) {
    histoire = `
      <h3 style="color: #e17055; background-color:#dfe6e9; padding: 10px; border-radius: 8px;">🐢 La tortue et le lièvre</h3>
      <p>Le <strong style="color:#d63031;">lièvre</strong>, rapide et moqueur, riait de la lente <strong style="color:#27ae60;">tortue</strong>.</p>
      <p>Ils décidèrent de faire une course. Le lièvre courut vite… mais fit une sieste !</p>
      <p>La tortue, <strong style="color:#3498db;">patiente et constante</strong>, avança doucement… et gagna !</p>
      <p style="text-align:center; font-weight:bold; color:#8e44ad;">🎉 Moralité : Rien ne sert de courir, il faut partir à point.</p>
    `;
  } else if (num === 4) {
    histoire = `
      <h3 style="color: #0984e3; background-color:#dfe6e9; padding: 10px; border-radius: 8px;">🦁 Le lion et la souris</h3>
      <p>Un <strong style="color:#e84393;">lion</strong> attrapa une petite <strong style="color:#2ecc71;">souris</strong> mais la laissa partir.</p>
      <p>Plus tard, le lion fut pris dans un filet. La souris arriva, rongea les cordes et le libéra.</p>
      <p style="text-align:center; font-weight:bold; color:#d63031;">Moralité : Même les plus petits peuvent être d'une grande aide.</p>
    `;
  }

  const conteneur = document.getElementById('contenu-histoire');
  conteneur.style.opacity = 0;
  setTimeout(() => {
    conteneur.innerHTML = histoire;
    conteneur.style.opacity = 1;
  }, 300);
}

function openActivite(activiteNumber) {
  document.getElementById('activitesModal').style.display = 'block';
  let content = "";

  if (activiteNumber === "1") {
    content = `
      <h2>QCM – Phrase verbale et nominale</h2>
      <form id="qcm1">
        ${generateQCM([
          { q: "Le soleil brille.", a: "verbal" },
          { q: "Quelle belle surprise !", a: "nominal" },
          { q: "Il chante une chanson.", a: "verbal" },
          { q: "Des vacances de rêve.", a: "nominal" },
          { q: "L’enfant court dans la cour.", a: "verbal" },
        ])}
        <button type="button" onclick="checkQCM('qcm1')">Vérifier</button>
        <button type="button" class="return-btn" onclick="closeActivites()">Retour aux activités</button>
        <div class="result"></div>
      </form>
    `;
  }

  if (activiteNumber === "2") {
    content = `
      <h2>QCM – COD ou COI ?</h2>
      <form id="qcm2">
        ${generateQCM([
          { q: "Elle donne un livre à son ami.", a: "coi" },
          { q: "J'ai vu Marc hier.", a: "cod" },
          { q: "Il parle à sa sœur tous les jours.", a: "coi" },
          { q: "Nous avons regardé un film passionnant.", a: "cod" },
          { q: "Elle écrit une lettre à son grand-père.", a: "coi" },
        ], ["cod", "coi"])}
        <button type="button" onclick="checkQCM('qcm2')">Vérifier</button>
        <button type="button" class="return-btn" onclick="closeActivites()">Retour aux activités</button>
        <div class="result"></div>
      </form>
    `;
  }

  if (activiteNumber === "3") {
    content = `
      <h2>QCM – L'accord sujet-verbe</h2>
      <form id="qcm3">
        <div class="qcm-question">
          <p>1. Les élèves __________ pour l'examen.</p>
          <label><input type="radio" name="q0" value="étudient" /> Étudient</label><br>
          <label><input type="radio" name="q0" value="étudie" /> Étudie</label>
        </div>
        <div class="qcm-question">
          <p>2. Le chat __________ sa nourriture.</p>
          <label><input type="radio" name="q1" value="mange" /> Mange</label><br>
          <label><input type="radio" name="q1" value="mangent" /> Mangent</label>
        </div>
        <div class="qcm-question">
          <p>3. Nous __________ en vacances demain.</p>
          <label><input type="radio" name="q2" value="partons" /> Partons</label><br>
          <label><input type="radio" name="q2" value="partirons" /> Partirons</label>
        </div>
        <div class="qcm-question">
          <p>4. Elle __________ ses devoirs tous les jours.</p>
          <label><input type="radio" name="q3" value="fait" /> Fait</label><br>
          <label><input type="radio" name="q3" value="fais" /> Fais</label>
        </div>
        <div class="qcm-question">
          <p>5. Vous __________ en retard ce matin.</p>
          <label><input type="radio" name="q4" value="êtes" /> Êtes</label><br>
          <label><input type="radio" name="q4" value="es" /> Es</label>
        </div>
        <button type="button" onclick="checkQCM('qcm3')">Vérifier</button>
        <button type="button" class="return-btn" onclick="closeActivites()">Retour aux activités</button>
        <div class="result"></div>
      </form>
    `;
  }

  document.getElementById('activite-content').innerHTML = content;
}

function closeActivites() {
  document.getElementById('activitesModal').style.display = 'none';
}

function generateQCM(questions, options = ["verbal", "nominal"]) {
  return questions.map((q, index) => `
    <div class="qcm-question">
      <p>${index + 1}. ${q.q}</p>
      ${options.map(opt => `
        <label>
          <input type="radio" name="q${index}" value="${opt}" />
          ${opt === "verbal" ? "Phrase verbale" : opt === "nominal" ? "Phrase nominale" : opt.toUpperCase()}
        </label><br>
      `).join('')}
    </div>
  `).join('');
}

function showConfettiIfPerfect(score, total) {
  if (score === total) {
    document.getElementById("success-audio").play();

    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
// ✅ Animation de bienvenue sur la page d'accueil (à intégrer dans le HTML si besoin)
document.addEventListener("DOMContentLoaded", () => {
  const titre = document.querySelector(".center-text h1");
  if (titre) {
    titre.style.transition = "transform 1s ease, opacity 1s ease";
    titre.style.transform = "translateY(-20px)";
    titre.style.opacity = 0;
    setTimeout(() => {
      titre.style.transform = "translateY(0)";
      titre.style.opacity = 1;
    }, 300);
  }
});
function goToEvaluation() {
  window.location.href = "evaluation.html";
}

function goToResultats() {
  window.location.href = "resultats.html";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;
  const user = users[role].find(u => u.username === username && u.password === password);

  if (user) {
    document.getElementById("welcomeUser").textContent = "Bienvenue, " + username + " (" + role + ")!";
    closeLoginModal();

    // Rediriger l'élève vers la page d'évaluation
    if (role === "eleve") {
      window.location.href = "evaluation.html"; // Assurez-vous que ce fichier existe
    }

    // Rediriger l'enseignant vers la page des résultats des élèves
    if (role === "enseignant") {
      window.location.href = "resultats.html"; // Assurez-vous que ce fichier existe
    }

  } else {
    document.getElementById("loginError").textContent = "Identifiants incorrects.";
  }
}



function checkQCM(formId) {
  const form = document.getElementById(formId);
  const questions = form.querySelectorAll('.qcm-question');
  const answers = {
    "qcm1": ["verbal", "nominal", "verbal", "nominal", "verbal"],
    "qcm2": ["coi", "cod", "coi", "cod", "coi"],
    "qcm3": ["étudient", "mange", "partons", "fait", "êtes"]
  };
  const correct = answers[formId];
  let score = 0;

  questions.forEach((q, index) => {
    const selected = form.querySelector(`input[name="q${index}"]:checked`);
    const inputs = form.querySelectorAll(`input[name="q${index}"]`);

    // Nettoyage des anciens feedbacks
    q.querySelectorAll('.feedback').forEach(el => el.remove());
    inputs.forEach(input => input.parentElement.style.color = "black");

    if (selected) {
      const feedback = document.createElement("span");
      feedback.className = "feedback";
      feedback.style.marginLeft = "10px";

      if (selected.value === correct[index]) {
        selected.parentElement.style.color = "green";
        feedback.innerHTML = "✔️";
        score++;
      } else {
        selected.parentElement.style.color = "red";
        feedback.innerHTML = "❌";
      }

      selected.parentElement.appendChild(feedback);
    }
  });

  const resultDiv = form.querySelector(".result");
  let message = `<p><strong>Score :</strong> ${score}/${correct.length}</p>`;

  if (score === correct.length) {
    message += `<p style="color:green;font-weight:bold;">Bravo ! Tu as tout réussi ! 😄🎉</p>`;
  } else if (score >= correct.length - 1) {
    message += `<p style="color:orange;">Très bien joué ! Tu es presque parfait ! 😊</p>`;
  } else if (score >= 3) {
    message += `<p style="color:blue;">Bon effort, continue comme ça ! 💪</p>`;
  } else {
    message += `<p style="color:red;">Tu peux recommencer pour t'améliorer ! 💡</p>`;
  }
  

  resultDiv.innerHTML = message;
  showConfettiIfPerfect(score, correct.length);
}
