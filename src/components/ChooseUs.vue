<template>
    <div class="choose-area">
        <div class="container">
            <div class="section-title text-center mb-70">
                <h2 v-html="sectionTitleChooseUs.title">{{sectionTitleChooseUs.title}}</h2>
                <p>{{sectionTitleChooseUs.description}} </p>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <div class="choose-img">
                        <img :src="chooseUsImage.image" alt="choose Us image">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="choose-list-wrap">
                        <div v-for="(chooseUsAllData, chooseUsData) in chooseUsData" :key="chooseUsData" class="single-choose-list">
                            <div class="choose-icon">
                                <i :class="chooseUsAllData.iconName"></i>
                            </div>
                            <div class="choose-content">
                                <h3>{{chooseUsAllData.title}}</h3>
                                <p>{{chooseUsAllData.description}}</p>
                            </div>
                        </div>
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
                chooseUsImage: {
                    image: ("assets/img/bg-img/3.png"), 
                },
                sectionTitleChooseUs: {
                    title: "why <span>choose us?</span>",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam "
                },
                chooseUsData: [
                    {
                        iconName: "zmdi zmdi-collection-text",
                        title: "Unlimited Features",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel."
                    },
                    {
                        iconName: "zmdi zmdi-sun",
                        title: "High Resolution",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel."
                    },
                    {
                        iconName: "zmdi zmdi-brush",
                        title: "Modern Design",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel."
                    },
                ]
            }
        }
    }
</script>