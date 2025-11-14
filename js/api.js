const API_URL = "https://SEU-BACKEND.a.run.app";

async function getAtletas() {
  const response = await fetch(`${API_URL}/atletas`);
  return response.json();
}
