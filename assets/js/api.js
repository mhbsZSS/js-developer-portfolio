async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/mhbsZSS/js-developer-portfolio/blob/main/data/profile.json';
  const fetching = await fetch(url)
  return await fetching.json()

}


