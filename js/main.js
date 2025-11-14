document.addEventListener("DOMContentLoaded", async () => {

  const lista = document.getElementById("listaAtletas");
  if (lista) {
    const atletas = await getAtletas();
    
    lista.innerHTML = atletas.map(a => `
      <li>
        <strong>${a.nome}</strong> — ${a.clube}
      </li>
    `).join('');
  }

});
