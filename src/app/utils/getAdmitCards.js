export default async function getAdmitCards() {
  const res = await fetch('https://aimforteaching-backend.onrender.com/api/admit-cards', { cache:"no-cache" })
  return res.json();
}