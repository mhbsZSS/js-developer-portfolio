async function fetchProfileData() {
  const url = 'https://github.com/mhbsZSS/js-developer-portfolio/blob/7c791105f02fe903f911547f146dd2beb277d690/data/profile.json';
  const fetching = await fetch(url)
  return await fetching.json()

}





