()=>(){
    class Game{

        difficulty = 400;
        delta = 0;
        timestamp = Date.now()
        last = null
        progress = 0;
        score = 0;
    
    
        constructor(){
            
            //sets the click to hit function
            $("#moles div").each( (hole, test)=>{
    
                //hide all moles
                $(test).children().first().hide()
                
                $(test).click((e)=>{
                    if(e.target.nodeName != "DIV"){
                        
                        $(e.target).fadeOut()
                        this.score++
                        $("#score").text(this.score)
                    }
                    
                })
    
            })
    
            this.timestamp = Date.now()
            this.last = Date.now()
    
            this.main.bind(this)
            this.main()
        }
    
        main(va){
    
            
           
            this.timestamp = Date.now()
    
            this.progress += (this.timestamp - this.last)
            if(this.progress >= this.difficulty){
    
                 console.log(this.progress)
    
                 var random = Math.floor(Math.random() * 8)
    
                 console.log()
    
                 $($("#moles div img").get(random)).fadeIn()
                 
                 this.progress = 0
    
            }
            
            this.last = this.timestamp
            
            //arrow function allows it to be called again
            requestAnimationFrame(()=>this.main())
        }
    
    }
    
    var game = new Game()
}

