 /* 
     내부 함수
      : 함수 내부에 선언하는 함수
  */
 function output() {
    function innerfun() { //  innerfun()함수를 '내부 함수'라고 한다. 
        console.log("오늘도 힘내요!")
    }
    innerfun()
}
 
   output()
/* 
   innerfun() (X)   
    -> output()함수 내부에 선언된 innerfun()함수는 외부에서 선언할 수 없다. */
