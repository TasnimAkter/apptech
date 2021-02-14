<template>
    <div class="about-area bg-gray pt-45">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 align-self-center">
                    <div class="about-content">
                        <h2 v-html="title">{{title}}</h2>
                        <h3>{{subtitle}}</h3>
                        <p class="about-pb">{{descone}}</p>
                        <p>{{desctwo}}</p>
                        <div class="about-icon">
                            <a href="#"><i :class="icon1"></i></a>
                            <a href="#"><i :class="icon2"></i></a>
                            <a href="#"><i :class="icon3"></i></a>
                            <a href="#"><i :class="icon4"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about-img">
                        <img src="assets/img/mobile/2.png" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data (){
            return {
                title: "about <span>Apptech</span>", 
                subtitle: "Lorem ipsum dolor sit amet", 
                descone: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare", 
                desctwo: "sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien", 
                icon1: "zmdi zmdi-facebook",
                icon2: "zmdi zmdi-twitter",
                icon3: "zmdi zmdi-pinterest",
                icon4: "zmdi zmdi-linkedin",
            }
        }
    }
</script>