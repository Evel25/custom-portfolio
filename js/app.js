let subItems = $('nav .sub-items');
$(function(){
    navItemsSlideUp();
    /** getting the nav item and slid the sub items */
    let item = $('nav .nav-item .item');
    
    item.on('click',function(){
        let item = $(this).siblings().first();
        // remove the active class
        subItems.each(function(i,v){
            $(v).parent().removeClass('active');
        });
        // add class active to the clicked item again
        $(this).parent().addClass('active');

        // collap all the author items
        subItems.each(function(i,v){
            if(!$(v).parent().hasClass('active')){
                $(v).slideUp(200);
            }else{
                $(v).delay(200).slideDown(200);
            }
        });
    });

    AddNewProjectInput();
});

function navItemsSlideUp(){
    // hide not active sub items
    subItems.each(function(i,v){
        if($(v).parent().hasClass('active')){
            $(this).slideDown(200);
        }else{
            $(this).css("display","none");
        }
    });

}

function AddNewProjectInput(){
    $('form.project .span-add').on('click',function(){
        let data = $(this).data('role');
        let parent = $(this).parent().parent();
        if(data == 'gols'){
            parent.append('<div class="col-12 pt-2"><label for="gols" class="text-capitalize">Gol</label><input type="text" class="rounded" name="gols[]"  />');
        }else if(data == 'Framworks'){
            parent.append(' <div class="col-12 pt-2"><label for="Framworks" class="text-capitalize">Framwork</label><input type="text" class="rounded" name="Framworks[]"  /></div>');
        }else if(data == 'outcomes'){
            parent.append('<div class="col-12 pt-2"><label class="text-capitalize">Outcome</label><input type="text" class="rounded" name="Outcomes[]"  /></div>')
        }
    });
}