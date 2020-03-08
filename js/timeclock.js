       
        add.addEventListener('click', sumit)

          function sumit() {
        let text = parseInt(document.getElementById("inp").value) 
        let hours = document.getElementById("hours");
        let numbers = [100,2]
        
         numbers.push(text)
          total = numbers.reduce((number, text) => {
           return number + text
         }) 

       hours.innerHTML = `You have studied ${total} hours today.`;
            }


        
        
    