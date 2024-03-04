function buildAbout(container) {
  container.innerHTML = '';
  container.innerHTML = `
  
 <section class="section-about">
        <h1 class="heading-primary about-text">~ Restaurant ~</h1>
        <div class="about-grid">
          <div class="about-grid-item">
            <h2 class="heading-secondary">Location</h2>
            <p class="item-description">
              Thanks for stopping by. We are the last authentic Italian
              restaurant in Milan, serving delicious Italian cuisine cooked by
              the best chefs. It only takes a few minutes to browse through our
              website and check out our menu. We hope you'll soon join us for a
              superb Italian culinary experience.
            </p>
            <h3 class="heading-tertiary">A Unique Experience</h3>
            <p class="item-description">
              Thanks for stopping by. We are the last authentic Italian
              restaurant in Milan, serving delicious Italian cuisine cooked by
              the best chefs. It only takes a few minutes to browse through our
              website and check out our menu. We hope you'll soon join us for a
              superb Italian culinary experience.
            </p>
          </div>
          <div class="about-grid-item">
            <img
              src="./images/location.jpg"
              alt="Restaurant location"
              class="about-img"
            />
          </div>
          <div class="about-grid-item">
            <img
              src="./images/cuisine.jpg"
              alt="Restaurant cuisine"
              class="about-img"
            />
          </div>
          <div class="about-grid-item">
            <h2 class="heading-secondary">Cuisine</h2>
            <p class="item-description">
              Thanks for stopping by. We are the last authentic Italian
              restaurant in Milan, serving delicious Italian cuisine cooked by
              the best chefs. It only takes a few minutes to browse through our
              website and check out our menu. We hope you'll soon join us for a
              superb Italian culinary experience.
            </p>
            <h3 class="heading-tertiary">A Unique Experience</h3>
            <p class="item-description">
              Thanks for stopping by. We are the last authentic Italian
              restaurant in Milan, serving delicious Italian cuisine cooked by
              the best chefs. It only takes a few minutes to browse through our
              website and check out our menu. We hope you'll soon join us for a
              superb Italian culinary experience.
            </p>
          </div>
        </div>
      </section> 
  
  
  `;
}

export default buildAbout;
