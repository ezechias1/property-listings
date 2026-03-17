/* ============================
   MOCK DATA
   ============================ */
const properties = [
  {
    id: 1,
    name: "Clifton Bay Residence",
    location: "Clifton, Cape Town",
    area: "Cape Town",
    price: 8500000,
    bedrooms: 5,
    bathrooms: 4,
    size: 420,
    type: "House",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "An extraordinary five-bedroom masterpiece perched above Clifton's pristine beaches. Floor-to-ceiling glass frames uninterrupted Atlantic Ocean views from every living space. The open-plan kitchen features imported Italian marble countertops, Miele appliances, and a butler's pantry. A private infinity pool blends seamlessly with the ocean horizon, while the rooftop terrace offers panoramic sunset views.",
    amenities: ["Pool", "Garden", "Garage", "Security", "Sea View", "Smart Home"],
    agent: { name: "Sarah van der Merwe", initials: "SV", company: "Cape Luxury Properties" }
  },
  {
    id: 2,
    name: "Sandton Executive Suite",
    location: "Sandton, Johannesburg",
    area: "Johannesburg",
    price: 3200000,
    bedrooms: 3,
    bathrooms: 2,
    size: 185,
    type: "Apartment",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Sleek executive apartment in the heart of Sandton's business district. Features contemporary finishes throughout, an open-plan living area with floor-to-ceiling windows, and a modern kitchen with stone countertops. Walking distance to Sandton City, Nelson Mandela Square, and the Gautrain station. Perfect for professionals seeking luxury urban living.",
    amenities: ["Gym", "Security", "Parking", "Concierge", "Rooftop Lounge", "Fibre"],
    agent: { name: "David Nkosi", initials: "DN", company: "Sandton Realty Group" }
  },
  {
    id: 3,
    name: "Umhlanga Beachfront Villa",
    location: "Umhlanga Rocks, Durban",
    area: "Durban",
    price: 6800000,
    bedrooms: 4,
    bathrooms: 3,
    size: 340,
    type: "House",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "A breathtaking beachfront villa steps from Umhlanga's iconic lighthouse. This four-bedroom property combines coastal elegance with modern luxury. The expansive deck wraps around a heated pool overlooking the Indian Ocean. Open-plan living flows effortlessly to outdoor entertainment areas with built-in braai and pizza oven.",
    amenities: ["Pool", "Garden", "Garage", "Security", "Sea View", "Braai Area"],
    agent: { name: "Priya Govender", initials: "PG", company: "Coastal Living KZN" }
  },
  {
    id: 4,
    name: "Brooklyn Loft",
    location: "Brooklyn, Pretoria",
    area: "Pretoria",
    price: 1650000,
    bedrooms: 2,
    bathrooms: 1,
    size: 95,
    type: "Apartment",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    description: "Industrial-chic loft apartment in trendy Brooklyn, Pretoria. Soaring double-volume ceilings with exposed brick walls and polished concrete floors create an effortlessly stylish living space. The mezzanine bedroom overlooks the main living area. Situated near Brooklyn Mall with excellent restaurants and cafes at your doorstep.",
    amenities: ["Security", "Parking", "Fibre", "Pet Friendly"],
    agent: { name: "Johan Botha", initials: "JB", company: "Urban Living Pretoria" }
  },
  {
    id: 5,
    name: "Waterfall Country Estate",
    location: "Waterfall, Midrand",
    area: "Johannesburg",
    price: 5400000,
    bedrooms: 4,
    bathrooms: 3,
    size: 310,
    type: "House",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    description: "An elegant four-bedroom home in the prestigious Waterfall Country Estate. Set on a generous stand with manicured gardens, this property offers a seamless blend of indoor-outdoor living. The gourmet kitchen opens to a covered patio with pool views. Three garages, staff quarters, and full Waterfall estate security included.",
    amenities: ["Pool", "Garden", "Garage", "Security", "Staff Quarters", "Golf Course"],
    agent: { name: "Lerato Molefe", initials: "LM", company: "Estate Living SA" }
  },
  {
    id: 6,
    name: "Sea Point Penthouse",
    location: "Sea Point, Cape Town",
    area: "Cape Town",
    price: 7200000,
    bedrooms: 3,
    bathrooms: 3,
    size: 240,
    type: "Apartment",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "Spectacular top-floor penthouse with wrap-around terrace offering 270-degree views of the Atlantic Ocean and Lion's Head. Recently renovated with imported European fixtures, underfloor heating throughout, and a chef's kitchen. The master suite includes a walk-in closet and freestanding bath with ocean views. Two secure parking bays included.",
    amenities: ["Pool", "Gym", "Security", "Parking", "Sea View", "Concierge"],
    agent: { name: "Sarah van der Merwe", initials: "SV", company: "Cape Luxury Properties" }
  },
  {
    id: 7,
    name: "Ballito Beach Townhouse",
    location: "Ballito, KZN North Coast",
    area: "Durban",
    price: 2850000,
    bedrooms: 3,
    bathrooms: 2,
    size: 165,
    type: "Townhouse",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    description: "Modern three-bedroom townhouse in a secure Ballito estate, just minutes from pristine North Coast beaches. The double-storey layout offers an open-plan ground floor flowing to a private courtyard garden. Upstairs features three bedrooms with the main en-suite boasting dual vanities and a walk-in shower.",
    amenities: ["Garden", "Garage", "Security", "Braai Area", "Pet Friendly"],
    agent: { name: "Priya Govender", initials: "PG", company: "Coastal Living KZN" }
  },
  {
    id: 8,
    name: "Menlyn Studio Apartment",
    location: "Menlyn, Pretoria",
    area: "Pretoria",
    price: 850000,
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    type: "Studio",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    description: "Compact yet cleverly designed studio apartment ideal for young professionals or investors. Open-plan layout with kitchenette, built-in cupboards, and a modern bathroom with shower. Located within walking distance of Menlyn Maine precinct, offering retail, dining, and entertainment options. Strong rental demand in this area.",
    amenities: ["Security", "Parking", "Fibre", "Laundry"],
    agent: { name: "Johan Botha", initials: "JB", company: "Urban Living Pretoria" }
  },
  {
    id: 9,
    name: "Constantia Wine Estate Villa",
    location: "Constantia, Cape Town",
    area: "Cape Town",
    price: 7800000,
    bedrooms: 5,
    bathrooms: 4,
    size: 450,
    type: "House",
    gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    description: "An exquisite Cape Dutch-inspired villa set among the vineyards of Constantia. Five spacious bedrooms, four bathrooms, a wine cellar, and a separate guest cottage on a 2,000m2 stand. The property features established gardens with century-old oaks, a heated pool, and mountain views. Close to top schools and wine estates.",
    amenities: ["Pool", "Garden", "Garage", "Security", "Wine Cellar", "Guest Cottage"],
    agent: { name: "Sarah van der Merwe", initials: "SV", company: "Cape Luxury Properties" }
  },
  {
    id: 10,
    name: "Morningside Townhouse",
    location: "Morningside, Johannesburg",
    area: "Johannesburg",
    price: 2400000,
    bedrooms: 3,
    bathrooms: 2,
    size: 170,
    type: "Townhouse",
    gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    description: "Stylish three-bedroom townhouse in Morningside's sought-after Rivonia corridor. Modern finishes include stone countertops, built-in appliances, and porcelain tile flooring throughout. A private walled garden with a covered patio is perfect for entertaining. Located close to top schools, Sandton CBD, and major highways.",
    amenities: ["Garden", "Garage", "Security", "Braai Area", "Fibre"],
    agent: { name: "David Nkosi", initials: "DN", company: "Sandton Realty Group" }
  },
  {
    id: 11,
    name: "Berea Heritage Flat",
    location: "Berea, Durban",
    area: "Durban",
    price: 1100000,
    bedrooms: 2,
    bathrooms: 1,
    size: 85,
    type: "Apartment",
    gradient: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
    description: "Charming two-bedroom apartment in a renovated Art Deco building in Durban's leafy Berea. High ceilings, original parquet floors, and large sash windows fill the space with natural light. The updated kitchen and bathroom blend period character with modern convenience. Walking distance to the Durban Botanic Gardens.",
    amenities: ["Security", "Parking", "Garden", "Laundry"],
    agent: { name: "Priya Govender", initials: "PG", company: "Coastal Living KZN" }
  },
  {
    id: 12,
    name: "Centurion Lake Studio",
    location: "Centurion, Pretoria",
    area: "Pretoria",
    price: 920000,
    bedrooms: 1,
    bathrooms: 1,
    size: 50,
    type: "Studio",
    gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    description: "Modern studio with lake views in Centurion's popular waterfront precinct. The open-plan design maximises space with a full kitchen, spacious bathroom, and clever built-in storage. Enjoy the on-site gym, pool, and braai facilities. Ideal for first-time buyers or buy-to-let investors in this high-demand rental area.",
    amenities: ["Pool", "Gym", "Security", "Parking", "Fibre"],
    agent: { name: "Johan Botha", initials: "JB", company: "Urban Living Pretoria" }
  },
  {
    id: 13,
    name: "Fourways Luxury Estate",
    location: "Fourways, Johannesburg",
    area: "Johannesburg",
    price: 4750000,
    bedrooms: 4,
    bathrooms: 3,
    size: 290,
    type: "House",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    description: "Stunning four-bedroom home in a prestigious Fourways security estate. Double-volume entrance leads to spacious living areas with stacked doors opening to the pool deck. The gourmet kitchen features a large island, gas hob, and scullery. Upstairs offers four bedrooms with the main suite including a private balcony with garden views.",
    amenities: ["Pool", "Garden", "Garage", "Security", "Smart Home", "Braai Area"],
    agent: { name: "Lerato Molefe", initials: "LM", company: "Estate Living SA" }
  },
  {
    id: 14,
    name: "Green Point Urban Flat",
    location: "Green Point, Cape Town",
    area: "Cape Town",
    price: 2100000,
    bedrooms: 2,
    bathrooms: 1,
    size: 78,
    type: "Apartment",
    gradient: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
    description: "Contemporary two-bedroom apartment in the vibrant Green Point neighbourhood. Open-plan living with sleek kitchen, stone finishes, and integrated appliances. Walking distance to the V&A Waterfront, Cape Town Stadium, and the Green Point Urban Park. Ideal for professionals wanting a lock-up-and-go Cape Town lifestyle.",
    amenities: ["Security", "Parking", "Fibre", "Gym"],
    agent: { name: "Sarah van der Merwe", initials: "SV", company: "Cape Luxury Properties" }
  }
];

/* ============================
   ICONS (inline SVG helpers)
   ============================ */
const icons = {
  pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  bed: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  bath: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/><path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/></svg>',
  size: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>'
};

/* ============================
   HELPERS
   ============================ */
function formatPrice(n) {
  return "R" + n.toLocaleString("en-ZA");
}

function getInitials(name) {
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

/* ============================
   RENDER CARDS
   ============================ */
const grid = document.getElementById("property-grid");
const noResults = document.getElementById("no-results");

function renderCards(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.style.animationDelay = `${i * .06}s`;
    card.setAttribute("data-id", p.id);

    card.innerHTML = `
      <div class="card-image">
        <div class="card-gradient" style="background:${p.gradient}">${getInitials(p.name)}</div>
        <span class="card-badge">${p.type}</span>
        <span class="card-price-tag">${formatPrice(p.price)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.name}</h3>
        <p class="card-location">${icons.pin} ${p.location}</p>
        <div class="card-specs">
          <span class="spec">${icons.bed} ${p.bedrooms} Bed${p.bedrooms > 1 ? "s" : ""}</span>
          <span class="spec">${icons.bath} ${p.bathrooms} Bath${p.bathrooms > 1 ? "s" : ""}</span>
          <span class="spec">${icons.size} ${p.size} m&sup2;</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

/* ============================
   FILTERING & SORTING
   ============================ */
const filterSort = document.getElementById("filter-sort");
const filterBeds = document.getElementById("filter-beds");
const filterType = document.getElementById("filter-type");
const clearBtn   = document.getElementById("clear-filters");

const searchLocation = document.getElementById("search-location");
const searchType     = document.getElementById("search-type");
const searchPrice    = document.getElementById("search-price");
const searchBtn      = document.getElementById("search-btn");

function getFiltered() {
  let list = [...properties];

  // Search inputs
  const loc = searchLocation.value.trim().toLowerCase();
  if (loc) {
    list = list.filter(p =>
      p.location.toLowerCase().includes(loc) ||
      p.area.toLowerCase().includes(loc)
    );
  }
  const sType = searchType.value;
  if (sType) list = list.filter(p => p.type === sType);

  const sPrice = parseInt(searchPrice.value);
  if (sPrice) list = list.filter(p => p.price <= sPrice);

  // Filter bar
  const fType = filterType.value;
  if (fType) list = list.filter(p => p.type === fType);

  const fBeds = filterBeds.value;
  if (fBeds) {
    const n = parseInt(fBeds);
    list = n >= 5
      ? list.filter(p => p.bedrooms >= 5)
      : list.filter(p => p.bedrooms === n);
  }

  // Sort
  const sort = filterSort.value;
  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

  return list;
}

function applyFilters() {
  renderCards(getFiltered());
}

[filterSort, filterBeds, filterType].forEach(el =>
  el.addEventListener("change", applyFilters)
);

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  applyFilters();
  document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
});

clearBtn.addEventListener("click", () => {
  filterSort.value = "default";
  filterBeds.value = "";
  filterType.value = "";
  searchLocation.value = "";
  searchType.value = "";
  searchPrice.value = "";
  applyFilters();
});

/* ============================
   MODAL
   ============================ */
const overlay  = document.getElementById("modal-overlay");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

function openModal(p) {
  modalBody.innerHTML = `
    <div class="modal-hero" style="background:${p.gradient}">${getInitials(p.name)}</div>
    <div class="modal-content">
      <div class="modal-top">
        <div>
          <h2 class="modal-title">${p.name}</h2>
          <p class="modal-location">${icons.pin} ${p.location}</p>
        </div>
        <div class="modal-price">${formatPrice(p.price)}</div>
      </div>

      <div class="modal-specs-grid">
        <div class="modal-spec">
          <span class="modal-spec-value">${p.bedrooms}</span>
          <span class="modal-spec-label">Bedrooms</span>
        </div>
        <div class="modal-spec">
          <span class="modal-spec-value">${p.bathrooms}</span>
          <span class="modal-spec-label">Bathrooms</span>
        </div>
        <div class="modal-spec">
          <span class="modal-spec-value">${p.size} m&sup2;</span>
          <span class="modal-spec-label">Floor Size</span>
        </div>
        <div class="modal-spec">
          <span class="modal-spec-value">${p.type}</span>
          <span class="modal-spec-label">Type</span>
        </div>
      </div>

      <h3 class="modal-section-title">About This Property</h3>
      <p class="modal-description">${p.description}</p>

      <h3 class="modal-section-title">Amenities</h3>
      <div class="amenities-grid">
        ${p.amenities.map(a => `<div class="amenity"><span class="amenity-dot"></span>${a}</div>`).join("")}
      </div>

      <h3 class="modal-section-title">Listing Agent</h3>
      <div class="agent-card">
        <div class="agent-avatar">${p.agent.initials}</div>
        <div class="agent-info">
          <div class="agent-name">${p.agent.name}</div>
          <div class="agent-company">${p.agent.company}</div>
        </div>
        <button class="btn btn-secondary" onclick="handleEnquire('${p.name}')">Enquire Now</button>
      </div>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function handleEnquire(name) {
  alert(`Thank you for your interest in "${name}". An agent will contact you shortly.`);
}

/* ============================
   NAVBAR SCROLL
   ============================ */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

/* ============================
   STAT COUNTER ANIMATION
   ============================ */
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach(el => {
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = prefix + current.toLocaleString("en-ZA") + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Trigger when stats section is visible
const statsSection = document.querySelector(".stats");
let statsCounted = false;
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statsCounted) {
    statsCounted = true;
    animateCounters();
  }
}, { threshold: 0.3 });
statsObserver.observe(statsSection);

/* ============================
   MOBILE MENU (simple toggle)
   ============================ */
const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.style.display === "flex";
  navLinks.style.display = open ? "none" : "flex";
  navLinks.style.flexDirection = "column";
  navLinks.style.position = "absolute";
  navLinks.style.top = "60px";
  navLinks.style.right = "24px";
  navLinks.style.background = "var(--bg-card)";
  navLinks.style.border = "1px solid var(--border)";
  navLinks.style.borderRadius = "var(--radius)";
  navLinks.style.padding = "16px 24px";
  if (open) navLinks.removeAttribute("style");
});

/* ============================
   INIT
   ============================ */
renderCards(properties);
