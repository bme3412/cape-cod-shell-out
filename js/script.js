const categoryButtons = document.querySelectorAll(".category-btn");
const filterContainer = document.getElementById("filter-container");
const filtersSection = document.getElementById("filters");
const resultsContainer = document.getElementById("results");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    populateFilters(category);
    toggleFiltersSection(category);
    fetchAndDisplayResults(category);
  });
});

function fetchAndDisplayResults(category, filter) {
  if (category === "towns") {
    fetch("data/towns/towns.json")
      .then((response) => response.json())
      .then((data) => {
        if (filter) {
          const filteredData = data.towns.filter(
            (town) => town.filters[filter]
          );
          displayResults(filteredData);
        } else {
          resultsContainer.innerHTML = ""; // Clear results if no filter selected
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
}

function displayResults(towns) {
  resultsContainer.innerHTML = ""; // Clear current results

  if (towns.length > 0) {
    const townGrid = document.createElement("div");
    townGrid.classList.add("town-grid");

    towns.forEach((town) => {
      const townBox = document.createElement("div");
      townBox.classList.add("town-box");
      townBox.innerHTML = `Town: ${town.name}`;
      townGrid.appendChild(townBox);
    });

    resultsContainer.appendChild(townGrid);
  } else {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  }
}

function populateFilters(category) {
  filterContainer.innerHTML = "";

  if (category === "towns") {
    // Add town-specific filters
    filterContainer.innerHTML = `
    <button class="filter" data-filter="greatBeaches">Great Beaches</button>
    <button class="filter" data-filter="whaleWatches">Whale Watches</button>
    <button class="filter" data-filter="localArtScene">Local Art Scene</button>
    <button class="filter" data-filter="easyToGetTo">Easy To Get To</button>
    <button class="filter" data-filter="weddingVenues">Wedding Venues</button>
    <button class="filter" data-filter="greatGolf">Great Golf</button>
    <button class="filter" data-filter="bikePaths">Bike Paths</button>
    <button class="filter" data-filter="lighthouses">Lighthouses</button>
    <button class="filter" data-filter="deepSeaFishing">Deep Sea Fishing</button>
    <button class="filter" data-filter="familyFriendly">Family Friendly</button>
    <button class="filter" data-filter="diningOptions">Dining Options</button>
    <button class="filter" data-filter="nightlife">Nightlife</button>
    <button class="filter" data-filter="july4thEvents">July 4th Events</button>
    <button class="filter" data-filter="capeBaseballLeague">Cape Baseball League</button>
    <button class="filter" data-filter="sharkFree">Shark-Free</button>
    <button class="filter" data-filter="massTransit">Mass Transit</button>
    <hr class="filter-divider">
    <button class="filter" data-filter="upperCape">🌉 Upper Cape</button>
    <button class="filter" data-filter="midCape">🛣️ Mid-Cape</button>
    <button class="filter" data-filter="lowerCape">🍇 Lower Cape</button>
    <button class="filter" data-filter="outerCape">🌊 Outer Cape</button>
    <button class="filter" data-filter="capecodNationalSeashore">🏞️ Cape Cod National Seashore</button>
    <button class="filter" data-filter="islands">🏝️ The Islands</button>
    <hr class="filter-divider"> 
    <button class="filter" data-filter="familyFriendly">👨‍👩‍👧‍👦 Family-Friendly</button> 
    <button class="filter" data-filter="historicalSites">🏰 Historical Sites</button> 
    <button class="filter" data-filter="artGalleries">🎨 Art Galleries</button> 
    <button class="filter" data-filter="beachAccess">🏖️ Beach Access</button> 
    <button class="filter" data-filter="shoppingDistricts">🛍️ Shopping Districts</button> 
    <button class="filter" data-filter="natureTrails">🌲 Nature Trails</button> 
    <button class="filter" data-filter="nightlife">🍸 Nightlife</button> 
    <button class="filter" data-filter="localCuisine">🦞 Local Cuisine</button> 
    <button class="filter" data-filter="publicTransport">🚌 Public Transport</button> 
    <button class="filter" data-filter="petFriendlyAreas">🐾 Pet-Friendly Areas</button> 
    <button class="filter" data-filter="accommodations">🏠 Accommodations</button> 
    <button class="filter" data-filter="restaurants">🍴 Restaurants</button>
    `;

    // Add click event listener to filter buttons
    const filterButtons = document.querySelectorAll(".filter");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        fetchAndDisplayResults("towns", filter);
      });
    });
  } else if (category === "beach") {
    // Add beach-specific filters
    filterContainer.innerHTML = `
      <button class="filter">Pet-Friendly</button>
      <button class="filter">Lifeguards On Duty</button>
      <button class="filter">Water Sports</button>
      <button class="filter">Soft Sand</button>
      <button class="filter">Rocky Shores</button>
      <button class="filter">Quiet Spots</button>
      <button class="filter">Family Areas</button>
      <button class="filter">Picnic Facilities</button>
      <button class="filter">Public Restrooms</button>
      <button class="filter">Boardwalks</button>
      <hr class="filter-divider">
      <button class="filter">🌉 Upper Cape</button>
    <button class="filter">🛣️ Mid-Cape</button>
    <button class="filter">🍇 Lower Cape</button>
    <button class="filter">🌊 Outer Cape</button>
    <button class="filter">🏞️ Cape Cod National Seashore</button>
    <button class="filter">🏝️ The Islands</button>
      <hr class="filter-divider">
      <button class="filter" data-town="Falmouth">🌊 Falmouth</button>
    <button class="filter" data-town="Bourne">⚓ Bourne</button>
    <button class="filter" data-town="Sandwich">🥪 Sandwich</button>
    <button class="filter" data-town="Barnstable">🐚 Barnstable</button>
    <button class="filter" data-town="Yarmouth">⛵ Yarmouth</button>
    <button class="filter" data-town="Dennis">🌅 Dennis</button>
    <button class="filter" data-town="Harwich">🐟 Harwich</button>
    <button class="filter" data-town="Brewster">🌿 Brewster</button>
    <button class="filter" data-town="Chatham">🦈 Chatham</button>
    <button class="filter" data-town="Orleans">🦞 Orleans</button>
    <button class="filter" data-town="Eastham">🌊 Eastham</button>
    <button class="filter" data-town="Wellfleet">🦪 Wellfleet</button>
    <button class="filter" data-town="Truro">🎨 Truro</button>
    <button class="filter" data-town="Provincetown">🌈 Provincetown</button>
    <button class="filter" data-town="Nantucket">⚓ Nantucket</button>
    <button class="filter" data-town="Martha's Vineyard">🍇 Martha's Vineyard</button>
    `;
  } else if (category === "things-to-do") {
    // Add activities-specific filters
    filterContainer.innerHTML = `
      <button class="filter">Outdoor Activities</button>
      <button class="filter">Cultural Events</button>
      <button class="filter">Children's Activities</button>
      <button class="filter">Nature Parks</button>
      <button class="filter">Boat Tours</button>
      <button class="filter">Fishing Spots</button>
      <button class="filter">Historical Tours</button>
      <button class="filter">Golf Courses</button>
      <button class="filter">Art Workshops</button>
      <button class="filter">Live Music</button>
      <button class="filter">Light Houses</button>
      <button class="filter">Bike Paths</button>
      <button class="filter">July 4th Fireworks</button>
      <button class="filter">July 4th Parades</button>
      <button class="filter">Cape League Baseball</button>
      <button class="filter">Ferries to Islands</button>
      <hr class="filter-divider">
      <button class="filter">🌉 Upper Cape</button>
    <button class="filter">🛣️ Mid-Cape</button>
    <button class="filter">🍇 Lower Cape</button>
    <button class="filter">🌊 Outer Cape</button>
    <button class="filter">🏞️ Cape Cod National Seashore</button>
    <button class="filter">🏝️ The Islands</button>
      <hr class="filter-divider">
      <button class="filter" data-town="Falmouth">🌊 Falmouth</button>
    <button class="filter" data-town="Bourne">⚓ Bourne</button>
    <button class="filter" data-town="Sandwich">🥪 Sandwich</button>
    <button class="filter" data-town="Barnstable">🐚 Barnstable</button>
    <button class="filter" data-town="Yarmouth">⛵ Yarmouth</button>
    <button class="filter" data-town="Dennis">🌅 Dennis</button>
    <button class="filter" data-town="Harwich">🐟 Harwich</button>
    <button class="filter" data-town="Brewster">🌿 Brewster</button>
    <button class="filter" data-town="Chatham">🦈 Chatham</button>
    <button class="filter" data-town="Orleans">🦞 Orleans</button>
    <button class="filter" data-town="Eastham">🌊 Eastham</button>
    <button class="filter" data-town="Wellfleet">🦪 Wellfleet</button>
    <button class="filter" data-town="Truro">🎨 Truro</button>
    <button class="filter" data-town="Provincetown">🌈 Provincetown</button>
    <button class="filter" data-town="Nantucket">⚓ Nantucket</button>
    <button class="filter" data-town="Martha's Vineyard">🍇 Martha's Vineyard</button>
    `;
  }
}

function toggleFiltersSection(category) {
  if (category) {
    filtersSection.classList.add("active");
  } else {
    filtersSection.classList.remove("active");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for filter buttons
  const filterButtons = document.querySelectorAll(".filter");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      fetchAndDisplayResults("towns", filter);
    });
  });
});
