fotky = ["https://www.pizzagiovanni.sk/wp-content/uploads/sunkova.png",
        "mushroom_pizza.png",
        "hawaii_pizza.png",
        "https://www.pizzagiovanni.sk/wp-content/uploads/vegetariana.png",
        "https://www.pizzagiovanni.sk/wp-content/uploads/mexicana.png",
        "https://www.pizzagiovanni.sk/wp-content/uploads/chorizo.png"
        ]
        nadpis = ["Šunková","Šampiňónová","Hawaii","Vegetaríanska","Mexická","Chorizo"]
        var i = 1
        var logo = document.querySelector("#fotka")
        setInterval(function(){

                logo = document.querySelector("#fotka")
                logo.setAttribute("src",fotky[i])
                pismo = document.querySelector("#text")
                pismo.textContent = nadpis[i]
                if(i>fotky.length-2){
                    i=-1
                };
                i++},5000)
        setInterval(function(){
            
        },2000)   