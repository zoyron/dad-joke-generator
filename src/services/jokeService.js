export async function getDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: 'application/json',
      'User-Agent': 'My Library',
    }
  });

  if (!response.ok) {
    throw new Error(`Error Statur: ${response.status}`);
  }

  const dadJoke = await response.json();
  return dadJoke.joke;
}