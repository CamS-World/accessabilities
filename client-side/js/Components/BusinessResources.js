export default function BusinessResources(businessResources) {

  console.log('FIRE');
  return `
  <div class="container">
  <h1>Business Directory</h1>
  <div id="searchWrapper">
      <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="search for a business"
      />
  </div>
  <ul id="businessList"></ul>
</div>

      `;
  
    }
