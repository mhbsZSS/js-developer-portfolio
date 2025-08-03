async function fetchProfileData() {
  const url = 'https://githubusercontent.com/mhbsZSS/js-developer-portfolio/main/data/profile.json';
  const fetching = await fetch(url)
  return await fetching.json()

}





