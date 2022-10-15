const CharacterDetail = (params) => {
  const view = `
    <section class="character-inner">
    ${params}
      <article class="charater-card">
        <img src="image" alt="name">
        <h2>Detalle</h2>
      </article>
      <article class="charater-card">
        <h3>Episodios:</h3>
   
      </article>
    </section>
  `
  return view
}

export default CharacterDetail