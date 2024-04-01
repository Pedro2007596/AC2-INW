function footer() {
    const footer = document.querySelector("footer");
    footer.classList.add('nomes')
    const sobre = [
      {
        Nome: "Victor Cecilio",
        links: [
          "https://github.com/victor12020",
          "https://www.instagram.com/vcecilioao?igsh=c3FtZmwzMnM0ajds",
          "https://www.instagram.com/vcecilioao?igsh=c3FtZmwzMnM0ajds",
        ],
        sites: ["Github", "Instagram", "Whatsapp"],
        img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
      },
      {
        Nome: "Pedro Henrique",
        links: ["https://github.com/Pedro2007596", "", ""],
        sites: ["Github", "Instagram", "Whatsapp"],
        img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
      },
      {
        Nome: "Leandro Afonso",
        links: [
          "https://github.com/TLean07",
          "https://www.instagram.com/ileandrojr07?igsh=aWFrbm9yems5d3oz",
          "https://wa.me/qr/UX6ZEKFKWHPMF1",
        ],
        sites: ["Github", "Instagram", "Whatsapp"],
        img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
      },
    ];
    sobre.forEach((sobre) => {
      const div = document.createElement("div");
      const divI = document.createElement("div");
      const nome = document.createElement("h2");
      const nomeT = document.createTextNode(sobre.Nome);
      nome.appendChild(nomeT);
      div.appendChild(nome);
  
      for (i = 0; i <= 2; i++) {
        const link = document.createElement("a");
        const img = document.createElement("img");
        img.classList.add('icon')
        link.href = sobre.links[i];
        img.src = sobre.img[i];
        img.alt = sobre.sites[i];
        link.appendChild(img);
        divI.appendChild(link);
      }
      div.appendChild(divI);
      footer.appendChild(div);
    });
  }

  export default footer