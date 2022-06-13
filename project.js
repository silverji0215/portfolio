const animatedTags = document.querySelectorAll(".mark, h3, h4, h5, h6, section p, .out p, img")

        animatedTags.forEach(tag => {
            tag.style.opacity = 0;
        })

        const fadeIn = function(){
            let delay = 0.25

            animatedTags.forEach(tag=>{
                const tagTop = tag.getBoundingClientRect().top;
                const tagBottom = tag.getBoundingClientRect().bottom;
                if(tagTop < window.innerHeight && tagBottom > 0){
                    tag.style.animation = `fadeIn 1s ${delay}s both`;

                    delay += 0.1;
                }else{
                    tag.style.animation = "0";
                }
            })
        }

        fadeIn()

        document.addEventListener("scroll",function(){
            fadeIn()
        })

        window.addEventListener("resize", function(){
            fadeIn()
        })