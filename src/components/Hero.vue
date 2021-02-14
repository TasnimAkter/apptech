<template>
    <section class="slider-area default-overlay bg-img height-100vh pt-45 slider-content-center"  :style="bgImg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 align-self-center">
                    <div class="slider-content">
                        <h1>{{hero.title}}</h1>
                        <h2>{{hero.subTitle}}</h2>
                        <p>{{hero.desc}}</p>
                        <div class="slider-btn-wrap">
                            <a v-for="(heroBtns, heroBtn) in heroBtn" :key="heroBtn" href="#" class="slider-btn">
                                <div class="slider-btn-icon">
                                    <i :class="heroBtns.iconName"></i>
                                </div>
                                <div class="slider-btn-text">
                                    <span>{{heroBtns.subTitle}}</span>
                                    <h4>{{heroBtns.title}}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="slider-img">
                        <img :src="heroSingleImg.image" alt="slider image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data (){
            return {
                bgImg: {
                    backgroundImage: `url('assets/img/bg-img/bg-1.jpg')`
                },
                hero:{
                    title: "Roger", 
                    subTitle: "makes your dost", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam eu efficitur enim, vitae fermentum orci. Sed et feugiat nulla.", 
                },
                heroBtn: [
                    {
                        iconName: 'zmdi zmdi-apple', 
                        title: 'App Store', 
                        subTitle: 'Available on the', 
                    },
                    {
                        iconName: 'zmdi zmdi-google-play', 
                        title: 'Play Store', 
                        subTitle: 'Available on the', 
                    },
                ],
                heroSingleImg: {
                    image: ("assets/img/mobile/1.png"), 
                },
            }
        }
    }
</script>


