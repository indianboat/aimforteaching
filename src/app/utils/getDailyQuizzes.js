export default async function getDailyQuizzes() {
  const res = await fetch('https://aimforteaching-backend.onrender.com/api/daily-quizzes', { cache:"no-cache" })
  return res.json();
}