document.addEventListener("DOMContentLoaded", function () {
    const btnSearch = document.getElementById("btnSearch");
    const contBarsSearch = document.getElementById("cont-bars-search");
    const coverCtnSearch = document.getElementById("cover-ctn-search");
    const inputSearch = document.getElementById("inputSearch");
    const boxSearch = document.getElementById("box-search");

    let searchVisible = false;

    btnSearch.addEventListener("click", function () {
      searchVisible = !searchVisible;
      if (searchVisible) {
        contBarsSearch.style.top = "80px";
        coverCtnSearch.style.display = "block";
        inputSearch.focus();
      } else {
        hideSearchBar();
      }
    });

    coverCtnSearch.addEventListener("click", hideSearchBar);

    function hideSearchBar() {
      contBarsSearch.style.top = "-100px";
      coverCtnSearch.style.display = "none";
      inputSearch.value = "";
      boxSearch.style.display = "none";
      searchVisible = false;
    }

    inputSearch.addEventListener("input", function () {
        const filter = this.value.trim().toUpperCase();
        const li = boxSearch.getElementsByTagName("li");
        const noResults = document.getElementById("no-results");
        let found = false;
      
        if (filter === "") {
          boxSearch.style.display = "none";
          return;
        }
      
        for (let i = 0; i < li.length; i++) {
          if (li[i].id === "no-results") continue;
          const a = li[i].querySelector("a");
          if (a && a.textContent.toUpperCase().includes(filter)) {
            li[i].style.display = "";
            found = true;
          } else {
            li[i].style.display = "none";
          }
        }
      
        boxSearch.style.display = "block";
        noResults.style.display = found ? "none" : "block";
      });
      
  });

//Mostrar u ocultar boton para regresar
  const btn = document.getElementById("btnSubir");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      btn.classList.remove("d-none"); // Muestra
    } else {
      btn.classList.add("d-none"); // Oculta
    }
  });

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al inicio
  });

