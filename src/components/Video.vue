<template>
    <div class="video-area overlay ptb-220" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <button class="video-popup">
                        <silentbox-single :src="youTube.youTubeLink">
                            <i :class="videoIcon.iconName"></i>
                        </silentbox-single>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                bgImg: {
                    backgroundImage: `url('assets/img/video/1.jpg')`
                },
                videoIcon: {
                    iconName: "zmdi zmdi-play",
                },
                youTube: {
                    youTubeLink: "https://www.youtube.com/watch?v=LTauBc7lDIg",
                }
            }
        }
    }
</script>