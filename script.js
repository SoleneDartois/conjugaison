// Liste des verbes
const verbos = [
  "Ser", "Tener", "Ir", "Hacer", "Salir", "Poder", "Poner", "Querer", "Comer", "Vivir", "Cantar",
  "Escribir", "Hablar", "Llamarse", "Divertirse", "Subir", "Explicar", "Bailar", "Evocar", "Desarrollar",
  "Beber", "Esconderse", "Comprar", "Nadar", "Jugar", "Pintar", "Volver", "Peinarse", "Cepillarse",
  "Descansar", "Trabajar", "Limpiar", "Tocar", "Imprimir", "Estudiar", "Mandar", "Dibujar", "Rezar",
  "Vestirse", "Medir", "Robar", "Volar", "Afeitarse", "Esperar", "Despegar", "Manchar", "Obtener",
  "Componer", "Cruzar", "Describir", "Celebrar", "Juntarse", "Disfrutar", "Recordar", "Acordarse",
  "Moverse", "Llorar", "Llover", "Estar", "Traer", "Llevar", "Buscar", "Rodear", "Subrayar", "Pegar",
  "Pagar", "Ganar", "Perder", "Empatar", "Crear", "Creer", "Preparar", "Maquillarse", "Abrir", "Cerrar", "Aprender", "Caminar", "Cocinar", "Comenzar", "Encontrar"
];

const generateBtn = document.getElementById("generateBtn");
const verboOutput = document.getElementById("verbo");
const personaOutput = document.getElementById("persona");
const tiempoOutput = document.getElementById("tiempo");
const timeOptions = document.querySelectorAll(".time-option");

// Liste des personnes
const personas = ["Yo", "Tú", "Él/Ella/Usted", "Nosotros/Nosotras", "Vosotros/Vosotras", "Ellos/Ellas/Ustedes"];

// Fonction pour générer un verbe, une personne et un temps
function genererVerbo() {
  // Récupérer les temps sélectionnés
  const tempsSelectionnes = Array.from(timeOptions)
    .filter(option => option.checked)
    .map(option => option.value);

  if (tempsSelectionnes.length === 0) {
    verboOutput.textContent = "Por favor, selecciona al menos un tiempo.";
    personaOutput.textContent = "";
    tiempoOutput.textContent = "";
    return;
  }

  const verbeAleatoire = verbos[Math.floor(Math.random() * verbos.length)];
  const tempsAleatoire = tempsSelectionnes[Math.floor(Math.random() * tempsSelectionnes.length)];
  const personneAleatoire = personas[Math.floor(Math.random() * personas.length)];

  verboOutput.textContent = `Verbo: ${verbeAleatoire}`;
  personaOutput.textContent = `Persona: ${personneAleatoire}`;
  tiempoOutput.textContent = `Tiempo: ${tempsAleatoire}`;
}

// Ajouter un événement au bouton
generateBtn.addEventListener("click", genererVerbo);
