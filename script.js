let pokemonData = null; // json을 전역에서 사용할 수 있도록 선언

async function getData() {
  const url = "https://pokeapi.co/api/v2/pokemon/101"; // Ditto의 API URL
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    pokemonData = await response.json(); // pokemonData에 저장
    const spriteUrl = pokemonData.sprites.front_default;
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
  const pokemonName = document.getElementById("pokemonName");
  pokemonName.innerText = pokemonData.name; // 이름을 페이지에 표시
});

// 페이지가 로드되면 Pokémon 이미지를 가져오도록 설정
window.onload = getData;
