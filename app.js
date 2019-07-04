new Vue({
    el:"#vue-app",
    data:{
        name:"Time",
        job:"",
        age:22,
        status:false,
        website:'https://www.facebook.com/time.nopphagulporn',
        count:0,
        colors:[],
        gender:'',
        show: false,
        
    },
    methods:{
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name = n
        },
        addAge:function(){
            this.age++;
            console.log(this.age);
        },
        SubtractAge:function(){
            this.age--;
            console.log(this.age)
        },
        addCount:function(){
            this.count++;
            console.log(this.count)
        },
    }
})