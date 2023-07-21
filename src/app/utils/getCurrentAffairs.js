export default async function getCurrentAffairs() {
  const res = await fetch('https://aimforteaching-backend.onrender.com/api/current-affairs', { cache:"no-cache" })
  return res.json();
}