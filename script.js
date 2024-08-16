async function getData() {
  const url = "https://pokeapi.co/api/v2/pokemon/1010"; // Ditto의 API URL
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const spriteUrl = json.sprites.front_default;
    const pokemonSprite = document.getElementById("pokemon-sprite");
    pokemonSprite.src = spriteUrl;

    // 초기 상태에서 그림자 효과 적용
    pokemonSprite.classList.add("shadow");
  } catch (error) {
    console.error(error.message);
  }
}

document.getElementById("toggle-shadow").addEventListener("click", () => {
  const pokemonSprite = document.getElementById("pokemon-sprite");
  // 'shadow' 클래스 토글
  pokemonSprite.classList.toggle("shadow");
});

// 페이지가 로드되면 버튼을 클릭하여 Pokémon 이미지를 가져오도록 설정
window.onload = getData;
