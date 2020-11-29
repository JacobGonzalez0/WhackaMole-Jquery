(()=>{

    class Game{

        difficulty = 400;
        delta = 0;
        timestamp = Date.now()
        last = null
        progress = 0;
        score = 0;
        start = false;
        gameStart = null;
        clicked = []
    
    
        constructor(){
            
            //create start button
            $("#start").click( (e)=>{
                if(this.start){
                    this.start = false; 
                    this.score = 0;
                    this.gameStart = Date.now();
                }else{
                    this.start = true ; 
                    this.score = 0;
                    this.gameStart = Date.now();
                }
                
            })

            //sets the click to hit function
            $("#moles div img").each( (hole, mole)=>{
                
                //prevent dragging on all images
                $(mole).attr('draggable', false);

                this.clicked[hole] = false;
                console.log(this.clicked)

                //hide all moles
                $(mole).hide()
                
                $(mole).click((e)=>{
                    if(e.target.nodeName != "DIV" && this.start && this.clicked[hole] == false){
                        
                        $(e.target).fadeOut()
                        this.score++
                        $("#score").text(this.score)
                        this.clicked[hole] = true;
                    }
                    
                })


    
            })
    
            this.timestamp = Date.now()
            this.last = Date.now()
    
            this.main.bind(this)
            this.main()
        }
    
        main(){
            
            if(this.timestamp - this.gameStart >= 20000 && this.start){
                alert("Game over! " + "Score: " + this.score);
                this.start = false;
            }

            if(this.start){
                this.timestamp = Date.now()
    
                this.progress += (this.timestamp - this.last)
                if(this.progress >= this.difficulty){
        
                    var random = Math.floor(Math.random() * 8)
        
                    console.log()
        
                    $($("#moles div img").get(random)).fadeIn()
                    this.clicked[random] = false;
                    
                    this.progress = 0
        
                }
                
                this.last = this.timestamp
                
                
            }
            //arrow function allows it to be called again
            requestAnimationFrame(()=>this.main())
        }

    }
    
    var game = new Game()
})();


