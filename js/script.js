console.log('vue ys ready', Vue);

const root = new Vue({
    el: '#root',
    data: {
        currentImg: 0,
        images:[
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg',
        ],  
    },
    methods: {
        isActive(i){
            return this.currentImg === i ? 'active' : '';
        },
        forwardIndex(){
            if (this.currentImg == this.images.length -1){
                this.currentImg = 0;
            } else {
                this.currentImg ++;
            }
        },
        backIndex(){
            if (this.currentImg == 0){
                this.currentImg = this.images.length -1;
            } else {
                this.currentImg --;
            }
        },
        currentPoints(indexPoints){
            this.currentImg = indexPoints;
        },
        
        

    } 
});