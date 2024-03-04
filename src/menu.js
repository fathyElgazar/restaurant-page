function buildMenu(container) {
  container.innerHTML = '';
  container.innerHTML = `
  
<section class="section-menu">
  <h1 class="heading-primary menu-text">~ Menu ~</h1>
  <div class="menus-container">
    <div class="menu-item">
      <img
        src="./images/meat-menu.jpg"
        alt="Meat menu"
        class="menu-photo"
      />
      <h3 class="heading-tertiary menu-heading">~ Meat Menu ~</h3>
      <ul class="menu-list">
        <li class="menu-list-item">Bocconcini di carne in nido di</li>
        <li class="menu-list-item">Bruschette con maiale al curry</li>
        <li class="menu-list-item">Uova al prosciutto</li>
        <li class="menu-list-item">Vitello tonnato</li>
        <li class="menu-list-item">
          Fesa di tacchino marinata con olive
        </li>
      </ul>
    </div>

    <div class="menu-item">
      <img
        src="./images/fish-menu.jpg"
        alt="Meat menu"
        class="menu-photo"
      />
      <h3 class="heading-tertiary menu-heading">~ Fish Menu ~</h3>
      <ul class="menu-list">
        <li class="menu-list-item">Carpaccio di polpo</li>
        <li class="menu-list-item">Cozze al verde</li>
        <li class="menu-list-item">Cocktail di gamberi</li>
        <li class="menu-list-item">Risotto alla crema di scampi</li>
        <li class="menu-list-item">
          Ravioli di pesce con crema di scampi
        </li>
      </ul>
    </div>

    <div class="menu-item">
      <img
        src="./images/menu-vegetarian.jpg"
        alt="Meat menu"
        class="menu-photo"
      />
      <h3 class="heading-tertiary menu-heading">~ Vegetarian Menu ~</h3>
      <ul class="menu-list">
        <li class="menu-list-item">Parmigiana di melanzane</li>
        <li class="menu-list-item">Strudel con ricotta e spinaci</li>
        <li class="menu-list-item">Polpette di spinaci e ricotta</li>
        <li class="menu-list-item">Frittata di patate al forno</li>
        <li class="menu-list-item">
          Spaghetti con le polpettine vegetariane
        </li>
      </ul>
    </div>
  </div>
</section> 
  
  
  
  `;
}

export default buildMenu;
