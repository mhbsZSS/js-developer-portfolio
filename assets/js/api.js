async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com';
  const fetching = await fetch(url)
  return await fetching.json()
}