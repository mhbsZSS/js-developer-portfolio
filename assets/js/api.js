async function fetchProfileData() {
  const url = 'https://mhbszss.github.io/js-developer-portfolio/data/profile.json'; // corrigido
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}











