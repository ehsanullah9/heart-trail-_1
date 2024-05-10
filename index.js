const bodyEl = document.querySelector('body');

console.log(bodyEl);


bodyEl.addEventListener('mousemove' , (event)=>{
        let offsetX = event.offsetX;
        let offsetY = event.offsetY;
        let span = create_span();
        span.style.width = offsetX +  'px';
        span.style.height=offsetY + 'px';
        bodyEl.appendChild(span);
})


function create_span(){
        let span = document.createElement('span');
        return span ;
}