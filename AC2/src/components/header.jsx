function header(){
    const navbar = [
        {
          nome: "home",
          link: "#home",
        },
        {
          nome: "Sobre nós",
          link: "#sobre",
        },
        {
          nome: "Experiencia",
          link: "#cards",
        },
        {
          nome: "Contato",
          link: "#contato",
        },
      ];
      const header = document.querySelector("header");
      const title = document.createElement("h2");
      const titleText = document.createTextNode("Bem Vindo");
      title.appendChild(titleText);
      header.appendChild(title);
    
      const ul = document.createElement("ul");
      //adicionar classe
      //ul.classList.add('')
      header.appendChild(ul);
    
      navbar.forEach((navbar) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        //adicionar classe
        //li.classList.add('')
        //a.classList.add('')
        a.href = navbar.link;
        const nome = document.createTextNode(navbar.nome);
        a.appendChild(nome);
        li.appendChild(a);
        ul.appendChild(li);
      });
}

export default header