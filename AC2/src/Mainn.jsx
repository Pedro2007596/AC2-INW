function main() {
    const cards = [
      {
        nome: "Victor Cecilio",
        hardskills:
          "Proficiência em inglês, Excel avançado, Operação de máquinas e sistemas, Domínio de Javascript, Domínio de CSS",
        softskills:
          "Comunicação, Flexibilidade, Motivação, Paciência, Persuasão, Trabalho em equipe",
      },
      {
        nome: "Pedro H. Sartorelli Ferreira",
        hardskills:
          "Proficiência em inglês, Domínio de Javascript, Domínio de CSS, Domínio de HTML",
        softskills:
          "Comunicação, Flexibilidade, Motivação, Persuasão, Trabalho em equipe",
      },
      {
        nome: "Leandro Afonso S.S Júnior",
        hardskills:
          "Proficiência em inglês, Operação de sistemas, Domínio de Javascript, Domínio de CSS, Domínio de HTML",
        softskills:
          "Flexibilidade, Motivação, Paciência, Persuasão, Trabalho em equipe",
      },
    ];
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.classList.add("banner");
    section.setAttribute("id", "home");
  
    const banner = document.createElement("div");
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    banner.classList.add("banner");
    section.appendChild(banner);
    main.appendChild(section);
  
    cards.forEach((cards) => {
      const div = document.createElement("div");
      div.classList.add('cards')
      const h3 = document.createElement("h3");
      const br = document.createElement("br");
      const br2 = document.createElement("br");
      const sSks = document.createElement("p");
      const hSks = document.createElement("p");
      const h3T = document.createTextNode(cards.nome);
      const sSkT = document.createTextNode("Softskills: " + cards.softskills);
      const hSkT = document.createTextNode("Hardskills: " + cards.hardskills);
      h3.appendChild(h3T);
      hSks.appendChild(hSkT);
      sSks.appendChild(sSkT);
      div.appendChild(h3);
      div.appendChild(br2);
      div.appendChild(hSks);
      div.appendChild(sSks);
      div.appendChild(br);
      cardContainer.appendChild(div);
    });
    main.appendChild(cardContainer);
  }

  export default main