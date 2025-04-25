const tutorForm = document.getElementById('tutorForm');
const petForm = document.getElementById('petForm');
const tutorSelect = document.getElementById('tutorPet');
const listaPets = document.getElementById('listaPets');

// Usamos URL relativa, para não “hard-coded” em produção
const API_URL = '';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service Worker registrado!', reg))
    .catch((err) => console.log('Erro ao registrar o Service Worker', err));
}


async function carregarTutores() {
  const res = await fetch(`${API_URL}/tutores`);
  const tutores = await res.json();
  tutorSelect.innerHTML = '<option value="">Selecione o tutor</option>';
  tutores.forEach(tutor => {
    const option = document.createElement('option');
    option.value = tutor._id;
    option.textContent = tutor.nome;
    tutorSelect.appendChild(option);
  });
}

async function carregarPets() {
  const res = await fetch(`${API_URL}/pets`);
  const pets = await res.json();
  listaPets.innerHTML = '';
  pets.forEach(pet => {
    const li = document.createElement('li');
    li.textContent = `${pet.nome} (${pet.raca}) - Tutor: ${pet.tutor?.nome || 'Desconhecido'}`;
    listaPets.appendChild(li);
  });
}

tutorForm.addEventListener('submit', async e => {
  e.preventDefault();
  const nome = document.getElementById('nomeTutor').value;
  const telefone = document.getElementById('telefoneTutor').value;
  const endereco = document.getElementById('enderecoTutor').value;

  await fetch(`${API_URL}/tutores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, telefone, endereco })
  });

  tutorForm.reset();
  await carregarTutores();
});

petForm.addEventListener('submit', async e => {
  e.preventDefault();
  const nome = document.getElementById('nomePet').value;
  const idade = parseInt(document.getElementById('idadePet').value, 10);
  const raca = document.getElementById('racaPet').value;
  const foto = document.getElementById('fotoPet').value;
  const tutor = document.getElementById('tutorPet').value;

  await fetch(`${API_URL}/pets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, idade, raca, foto, tutor })
  });

  petForm.reset();
  await carregarPets();
});

// Inicialização
window.addEventListener('load', () => {
  carregarTutores();
  carregarPets();
});
