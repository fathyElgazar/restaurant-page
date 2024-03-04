function buildHome(container) {
  container.innerHTML = '';
  container.innerHTML = `
 <section class="welcome-photo-container">
  <img
    src="./images/slider2.jpg"
    alt="Restaurant photo"
    class="welcome-photo"
  />
  <h1 class="welcome-text heading-primary">
    Traditional Italian Cuisine
  </h1>
</section> 
  `;
}

export default buildHome;
