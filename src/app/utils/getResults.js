export default async function getResults() {
  const res = await fetch('https://aimforteaching-backend.onrender.com/api/results', { cache:"no-cache" })
  return res.json();
}