  //innerhtml(),document.write(),window.alart(),innerhtml()

    //  function liveproject(){  //this keyword
    //    var a = 200;
    //    this.x = 300;
    //    this.y = 400;
    //    this.z =function(){
    //     return this.x + this.y;
    //    } 
       
    //  }
     
    //  var lp=new liveproject();
    //  document.write(lp.z());


    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;

    //     this.eat = function () {
    //         console.log('$(this.name) is eating.');
            
    //     };
    // }

    // const sakib = new Person("Sakib", 35);
    // const tamim = new Person("Tamim", 30);

    // sakib.eat();
    // tamim.eat();

    function totalnum(a){
      //private
      x= 20;
      total = function(){
        return x+a;
      };
      this.result = function(){
        this.sum = total();
        return "Result is "+ this.sum;
      }

      }

      var tn = new totalnum(10);
      console.log(tn.result());