'use strict';

function loadCss(href) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
loadCss("/style.css");

class ProgressBar{
    constructor(option = {}){
        const  {
            start = 0,
            end = 100,
            bg = 'white',
            height = 60,
            lineheight = '40px',
            textColor = 'yellow',
            border = '1px solid black',
            margin = '10px'
            
        } = option
        this.start = start;
        this.end = end;
        this.bg  = bg;
        this.height = height;
        this.textColor = textColor;
        this.border = border;
        this.lineHeight = lineheight;
        // this.width = width;
        this.margin = margin;
    }
    

    init(selector){
        document.querySelector(selector).append(this.createProgressBar());

    }
    createProgressBar(){
        const progressBar = document.createElement('div');
        const bar = this.createBar();
        progressBar.append(bar);
        progressBar.style.width = '100%';
        progressBar.style.border = this.border;
        progressBar.style.background = 'white';
        progressBar.style.color = this.textColor;
        progressBar.style.margin = this.margin;
        progressBar.style.lineHeight = this.height;
        
        this.animateBar(bar);
        return progressBar;
        
    
        
    }
    createBar(){
        const bar = document.createElement('div');
        bar.style.cssText = `
        text-align:center;
        background-color: ${this.bg};
        height:${this.height}px;
        line-height: ${this.height}px;
        background-color: ${this.bg};
        color:${this.textColor};
        margin: ${this.margin};
        `;

        this.stateProgress(bar);

        return bar;

    }
    stateProgress(elem){
        elem.style.width = `${this.start}%`;
        elem.textContent = `${this.start}%`
        elem.style.transition = ' 5s'
    }

    animateBar(bar){
        const animate = () => {
            if(this.start < this.end){
                this.start++;
                this.stateProgress(bar);
                requestAnimationFrame(animate);
                
            }

        };

        requestAnimationFrame(animate);
       
    }

}

class RoundedProgressBar extends ProgressBar{
    constructor(option = {}){
        super(option)
        const { rounded } = option;
        this.rounded = rounded;
        
    }
    createProgressBar(){
        const progressBar = super.createProgressBar();
        this.roundedBar(progressBar)
        return progressBar;

    }
    roundedBar(elem){
        elem.style.borderRadius = this.rounded;
        elem.firstChild.style.borderRadius = this.rounded;
    }
}








