class Form{
    constructor(){
        this.input = createInput("Name");
        this.button= createButton("Play");
        this.greeting = createElement("h2");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Asphalt 12");
        title.position(displayWidth/2,displayHeight/2 -400);

        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2 + 50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Howdy " + player.name);
            this.greeting.position(150,160);
        })
    }
    
   
}