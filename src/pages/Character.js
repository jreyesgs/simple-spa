const Character = (params) => {
  const view = `
    <section class="character-inner">
    ${params}
      <article class="charater-card">
        <img src="image" alt="name">
        <h2>Name</h2>
      </article>
      <article class="charater-card">
        <h3>Episodios:</h3>
        <h3>Estatus:</h3>
        <h3>Especie:</h3>
        <h3>Género:</h3>
        <h3>Origen:</h3>
        <h3>Última ubicación:</h3>
      </article>
    </section>
  `
  return view
}

export default Character