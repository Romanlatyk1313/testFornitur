

new Swiper('.new__box',{
    navigation:{
        nextEl:'.button-next',
        prevEl: '.button-prev'
    },
    pagination:{
        el:'.swiper-pagination-fraction',
       type:'fraction',
    //    renderFraction: function(currentClass, totalClass){
    //     return  '<span className="' + currentClass + '"></span>' +
    //     ' of ' +
    //     '<span className="' + totalClass + '"></span>';
    //     // '0'+ '<span className="' + currentClass + '"></span>' +
    //     // ' / ' +
    //     // '0'+'<span className="' + totalClass + '"></span>';
    //    }
    },
    

});
new Swiper('.ourPerevagi__box',{
    navigation:{
        nextEl:'.next',
        prevEl: '.prev'
    },
    
      slidesPerView: 3,  
    spaceBetween: 30,
})
