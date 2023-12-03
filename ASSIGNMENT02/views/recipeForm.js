function submitRecipe() {
    var recipeName = document.getElementById('recipeName').value;
    var recipeImage = document.getElementById('recipeImage').value;
    var recipeSteps = document.getElementById('recipeSteps').value;
    var recipeOverview = document.getElementById('recipeOverview').value;

    if (!recipeName || !recipeImage || recipeSteps || recipeOverview) {
        alert('Please fill in all required fields.');
        return;
      }
      
    var newCardHTML = `
        <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
        <img src="${recipeImage}" alt="${recipeName}" />
        class="card-img-top" alt="Sarson ka Saag" />
          <div class="card-body">
          <h5 class="card-title">${recipeName}</h5>
          <p class="card-text">${recipeOverview}</p>
          <a href="#" class="btn btn-info">Learn More</a>
          </div>
        </div>
      </div>
    `;

    var container = document.querySelector('.row');
    container.insertAdjacentHTML('beforeend', newCardHTML);

    document.getElementById('recipeName').value = '';
    document.getElementById('recipeImage').value = '';
    document.getElementById('recipeSteps').value = '';
    document.getElementById('recipeOverview').value = '';
}
