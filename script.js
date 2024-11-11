document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const mensagem = document.getElementById("mensagem");
  
    if (!nome || !email || !senha || !confirmaSenha) {
      mensagem.textContent = "Todos os campos são obrigatórios.";
      mensagem.style.color = "red";
      return;
    }
  
    if (senha !== confirmaSenha) {
      mensagem.textContent = "As senhas não correspondem.";
      mensagem.style.color = "red";
      return;
    }
  
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
    document.getElementById("cadastroForm").reset();
  });
  