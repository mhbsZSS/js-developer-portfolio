async function fetchProfileData() {
  const url = 'https://raw.mhbszss.github.io/js-developer-portfolio/';
  const fetching = await fetch(url)
  return await fetching.json()

}
