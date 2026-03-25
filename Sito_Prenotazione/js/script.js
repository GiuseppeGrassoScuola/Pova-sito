document.addEventListener("DOMContentLoaded", () => {
  const links = {
    bacheca: "https://docs.google.com/spreadsheets/d/1TOO7tYt3YCX2MzR7A_IVxvLl_-k8ZEYpbhJ7vGC2x6M/edit?gid=1901819266#gid=1901819266",
    prenotazione: "https://forms.gle/9X31GkumzhMnc4DM6",
    modifica: "https://forms.gle/Ex98ugN6JEo1PPfM8",
    bachecaEmbed: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_lW5s5WifpACbIILu1IdL33Txi342GtLRrTZpETxzVXn15idDerh7GBirDJ4CVJTOme5KHEUpXEYx/pubhtml?gid=1901819266&single=true"
  };

  const setLink = (id, url) => {
    const element = document.getElementById(id);
    if (element && url) {
      element.href = url;
    }
  };

  setLink("bachecaTopLink", links.bacheca);
  setLink("prenotaTopLink", links.prenotazione);
  setLink("modificaTopLink", links.modifica);
  setLink("bacheca-link", links.bacheca);
  setLink("prenotazione-link", links.prenotazione);
  setLink("modifica-link", links.modifica);
  setLink("bachecaButtonLink", links.bacheca);
  setLink("footerPrenotaLink", links.prenotazione);
  setLink("footerModificaLink", links.modifica);

  

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("nav--open");
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("nav--open");
      });
    });
  }
});