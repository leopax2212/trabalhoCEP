document.getElementById("cep").addEventListener("blur", async function () {
    const cep = this.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
  
        if (!data.erro) {
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("uf").value = data.uf;
        } else {
          alert("CEP não encontrado.");
          document.getElementById("logradouro").value = "";
          document.getElementById("uf").value = "";
        }
      } catch (error) {
        alert("Erro ao buscar CEP.");
      }
    }
  });
  
  document.getElementById("form-cep").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const cep = document.getElementById("cep").value;
    const logradouro = document.getElementById("logradouro").value;
    const uf = document.getElementById("uf").value;
    const numero = document.getElementById("numero").value;
  
    const dados = `CEP: ${cep}\nLogradouro: ${logradouro}\nUF: ${uf}\nNúmero: ${numero}`;
    
    alert(dados);
  
    document.getElementById("resultado").innerHTML = `
      <h3>Dados Enviados:</h3>
      <p><strong>CEP:</strong> ${cep}</p>
      <p><strong>Logradouro:</strong> ${logradouro}</p>
      <p><strong>UF:</strong> ${uf}</p>
      <p><strong>Número:</strong> ${numero}</p>
    `;
  });
  