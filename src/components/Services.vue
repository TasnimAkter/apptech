<template>
    <section class="service-area pt-100 pb-90">
        <div class="container">
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(service, services) in services" :key="services" class="col-lg-4">
                    <div class="single-service text-center mb-30">
                        <div class="single-item-icon">
                            <i :class="service.icon"></i>
                        </div>
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.desc }}</p>
                    </div>
                </div>
                <!-- single item end -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data (){
            return {
                services:[
                    {  
                        icon: "zmdi zmdi-settings",
                        title: "Easy To Customize", 
                        desc: "Lorem ipsum dolor sit amet, consectetur adipising elit. Pellentesque vel volutpat felis, eu condimtum ma Pellentesque mollis eros vel.", 
                    },
                    {
                        icon: "zmdi zmdi-favorite",
                        title: "User Friendly", 
                        desc: "Lorem ipsum dolor sit amet, consectetur adipising elit. Pellentesque vel volutpat felis, eu condimtum ma Pellentesque mollis eros vel.", 
                    },
                    {
                        icon: "zmdi zmdi-time",
                        title: "24/7 Support", 
                        desc: "Lorem ipsum dolor sit amet, consectetur adipising elit. Pellentesque vel volutpat felis, eu condimtum ma Pellentesque mollis eros vel.", 
                    }
                ]
            }
        }
    }
</script>


