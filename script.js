document.querySelectorAll('.clove-why-question').forEach(function(question) {
    question.addEventListener('click', function() {
        var parent = question.closest('.clove-why-item');
        document.querySelectorAll('.clove-why-item.open').forEach(function(other) {
            if (other !== parent) other.classList.remove('open');
        });
        parent.classList.toggle('open');
                var imgPath = parent.getAttribute('data-img');
        if(imgPath){
            document.getElementById('cloveWhyMainImg').src = imgPath;
        }
    });
    question.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            question.click();
        }
    });
});

