var setVanta = ()=>{
    if(window.VANTA) window.VANTA.BIRDS({
        el: ".s-page-1 .s-section-1 .s-section-3",
        mouseControls:true,
        touchControls:true,
        gyrocontrols:false,
        minHeight: 200.00,
        minWidth:200.00,
        scale:1.00,
        scaleMobile:1.00
    })
}
_stk.push(function(){
    setVanta()
    window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta)
})
