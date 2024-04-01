function forms() {
    const forms = [
      {
        classe: "formGroup",
        for: "email",
        label: "mensagem",
        type: "email",
        id: "email",
        name: "Email",
        input: "input",
      },
      {
        classe: "formGroup",
        for: "mensagem",
        label: "mensagem",
        type: "mensagem",
        id: "mensagem",
        name: "Mensagem",
        input: "textarea",
      },
    ];
    const main = document.querySelector("main");
    const form = document.createElement("form");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const button = document.createElement("button");
    const h2T = document.createTextNode("Entre em Contato");
    const btT = document.createTextNode("Enviar");
  
    section.setAttribute("id", "contato");
    form.setAttribute("action", "/cadastro");
    form.setAttribute("method", "post");
    button.setAttribute("type", "submit");
  
    form.classList.add('bigform')
  
    h2.appendChild(h2T);
    form.appendChild(h2);
  
    forms.forEach((forms) => {
      const formgroup = document.createElement("div");
      const label = document.createElement("label");
      const input = document.createElement(forms.input);
  
      const labelT = document.createTextNode(forms.name);
      input.classList.add('mensagens')
  
      formgroup.classList.add('form');
      label.setAttribute("for", forms.for);
      input.setAttribute("type", forms.type);
      input.setAttribute("id", forms.id);
      input.setAttribute("name", forms.name);
  
      label.appendChild(labelT);
      formgroup.appendChild(label);
      formgroup.appendChild(input);
      form.appendChild(formgroup);
    });
  
    button.appendChild(btT);
    form.appendChild(button);
    section.appendChild(form);
    main.appendChild(section);
  }

  export default forms