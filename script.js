const height = window.innerHeight
AOS.init();
window.onload = function() {
    setTimeout (function() {
        scrollTo(0, 0);
    }, 100);
}

let choreographer = new Choreographer({
    animations: [
        // second message
        {range: [height*3.3, height*3.3], selector: '#kor', type: 'scale', style: 'width', from: 250, to: 0, unit: 'px'},
        {range: [height*2.7, height*3.3], selector: '#kor', type: 'scale', style: 'opacity', from: 1, to: 0},
        {range: [height*1.5, height*2.5], selector: '#kor', type: 'scale', style: 'opacity', from: 0, to: 1},
        {range: [height*1.5, height*2.5], selector: '#kor', type: 'scale', style: 'padding-top', from: 200, to: 0, unit: "px"},

        // first message
        {range: [-1, height], selector: '#box', type: 'scale', style: 'opacity', from: 0.5, to: 0},
        {range: [height, height*1.5], selector: '#eng', type: 'scale', style: 'opacity', from: 1, to: 0},
        {range: [height/2, height*2.5], selector: '#eng', type: 'scale', style: 'width', from: 250, to: 0, unit: "px" },

        // scroll
        // {range: [-1, height], selector: '#box', type: 'scale', style: 'opacity', from: 0.5, to: 0},
        {range: [-1, height], selector: '#scroll', type: 'scale', style: 'opacity', from: 1, to: 0},
        // {range: [height/2, height*2.5], selector: '#eng', type: 'scale', style: 'width', from: 250, to: 0, unit: "px" },


        // mail
        {range: [height*3.7, height*4], selector: '#mail', type: 'scale', style: 'transform:rotate', from: 0, to: -90, unit: 'deg'},
        {range: [height*3.7, height*4], selector: '#mail', type: 'scale', style: 'top', from: 10, to: 90, unit: 'px'},
        {range: [height*3.7, height*4], selector: '#mail', type: 'scale', style: 'right', from: 10, to: -65, unit: 'px'}
    ]
})
window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset)
})