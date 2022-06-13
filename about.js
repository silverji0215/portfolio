const animatedTags = document.querySelectorAll("h3, h1, section p, strong, .image, img, .cont, .item")

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