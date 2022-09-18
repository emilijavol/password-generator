document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    function output() {
      function passGenerator(pass, servName) {
        let password = servName[servName.length - 1];
        const vowelCount = servName.match(/[aeiou]/gi);
  
        password += servName[vowelCount === null ? 0 : vowelCount.length - 1];
        password += pass;
        password += servName.length - vowelCount.length;
        password += servName[0];
  
        return password;
      }
  
      const password = document.querySelector("#password").value;
      const service = document.querySelector("#service").value;
      const container = document.createElement("p");
      container.innerText = `Password: ${passGenerator(password, service)}`;
  
      if (document.querySelector("p")) {
        document.querySelector("p").remove();
      }
      document.querySelector("#app").appendChild(container);
    }
  
    output();
    document.querySelector("#form").reset();
  });


  