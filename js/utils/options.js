let value = true;
const showOrHideButton = () => {
    if(value){
        $('.options__display').fadeIn();
        value = false;
    }else{
        $('.options__display').fadeOut();
        value = true;
    }
}