(function () {
  "use strict";

  var concerns = {
    dryness: { name: "Dew Cleanser", shape: "pump", why: "A soft gel wash that cleans without stripping, so moisture stays in." },
    oiliness: { name: "Veil SPF 50", shape: "tube", why: "A weightless sunscreen with a matte finish that will not clog pores." },
    dullness: { name: "Halo Serum", shape: "dropper", why: "Niacinamide evens tone and brings back an even glow within four weeks." },
    sensitivity: { name: "Dew Cleanser", shape: "pump", why: "Fragrance-free and gentle. Add one product at a time, a week apart." }
  };

  var hero = document.getElementById("hero");
  var chips = document.querySelectorAll(".chip");
  var pickName = document.getElementById("pick-name");
  var pickWhy = document.getElementById("pick-why");
  var bottleLabel = document.getElementById("bottle-label");
  var heroProd = document.getElementById("hero-prod");

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var key = chip.getAttribute("data-concern");
      var data = concerns[key];

      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });

      hero.setAttribute("data-theme", key);
      pickName.textContent = "Start with " + data.name;
      pickWhy.textContent = data.why;
      bottleLabel.textContent = data.name;
      heroProd.className = "prod " + data.shape + " swap";
      setTimeout(function () { heroProd.classList.remove("swap"); }, 500);
    });
  });

  var count = 0;
  var countEl = document.getElementById("bag-count");

  document.querySelectorAll(".add").forEach(function (btn) {
    btn.addEventListener("click", function () {
      count += 1;
      countEl.textContent = count;
      btn.textContent = "Added";
      btn.classList.add("added");
      setTimeout(function () {
        btn.textContent = "Add to bag";
        btn.classList.remove("added");
      }, 1500);
    });
  });

  document.getElementById("news-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("news-note").textContent = "Thanks! Your 10% code is on its way.";
    event.target.reset();
  });
})();