<template>
    <div class="feature-area pt-120 pb-120">
        <div class="container-fluid">
            <div class="section-title text-center mb-70">
                <h2 v-html="sectionTitleFeature.title">{{sectionTitleFeature.title}}</h2>
                <p>{{sectionTitleFeature.description}} </p>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="feature-list">
                        <div v-for="(featureDataOneLeft, featureDataOne) in featureDataOne" :key="featureDataOne" class="single-feature-wrap single-feature-wrap-left">
                            <div class="feature-content">
                                <h3>{{ featureDataOneLeft.featureTitle }}</h3>
                                <p>{{ featureDataOneLeft.featureDescription }}</p>
                            </div>
                            <div class="feature-icon">
                                <i :class="featureDataOneLeft.iconName"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="feature-img-wrap">
                        <div class="feature-img text-center">
                            <img src="assets/img/mobile/3.png" class="feature-img" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="feature-list-2">
                        <div v-for="(featureDataOneRight, featureDataTwo) in featureDataTwo" :key="featureDataTwo" class="single-feature-wrap single-feature-wrap-right">
                            <div class="feature-icon">
                                <i :class="featureDataOneRight.iconName"></i>
                            </div>
                            <div class="feature-content">
                                <h3>{{ featureDataOneRight.featureTitle }}</h3>
                                <p>{{ featureDataOneRight.featureDescription }}</p>
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
                sectionTitleFeature: {
                    title: "awesome <span>features</span>", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam ", 
                },
                featureDataOne: [
                    {
                        iconName: 'zmdi zmdi-favorite', 
                        featureTitle: 'Great Support', 
                        featureDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel. '
                    },
                    {
                        iconName: 'zmdi zmdi-language-html5', 
                        featureTitle: 'Clean Code', 
                        featureDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel.'
                    },
                    {
                        iconName: 'zmdi zmdi-desktop-mac', 
                        featureTitle: 'Unique Design', 
                        featureDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel. '
                    },
                ],
                featureDataTwo: [
                    {
                        iconName: 'zmdi zmdi-collection-text', 
                        featureTitle: 'Unlimited Features', 
                        featureDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel. '
                    },
                    {
                        iconName: 'zmdi zmdi-sun', 
                        featureTitle: 'High Resolution', 
                        featureDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel.'
                    },
                    {
                        iconName: 'zmdi zmdi-brush', 
                        featureTitle: 'Modern Design', 
                        featureDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum ma Pellentesque mollis eros vel. '
                    },
                ]
            }
        }
    }
</script>