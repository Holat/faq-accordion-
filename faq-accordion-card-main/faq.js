const icons = document.querySelectorAll(".Q");
const questionAnswers = document.querySelectorAll('.QA')



icons.forEach(function(icon){
    icon.addEventListener('click',function(e){
        questionAnswers.forEach(function(item){
            item.classList.remove('active')
        })
        e.target.parentElement.classList.toggle('active');
    })
});