new Vue({
    el:"#vue-app",
    data:{
        name:"Time",
        job:"GoGO",
        age:22,
        status:false,
        website:'https://www.facebook.com/time.nopphagulporn',
        count:0
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