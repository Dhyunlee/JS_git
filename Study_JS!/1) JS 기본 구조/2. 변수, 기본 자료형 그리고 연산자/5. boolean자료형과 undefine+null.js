window.onload = function () {

/*
     1. 불(논리) 자료형
       : 참(true)과 거짓(false)의 값을 표현하는 자료형으로
         참일때 → true, 거짓일때 → false 출력한다.
          -> 컴퓨터는 0을 false로, 1을 true로 인식한다. 
          -> 컴퓨터는 0을 제외한 모든 수를 true로 인식하며 
             그 대표적인 숫자가 1이다. 
  
       불(논리) 자료형은 조건문의 조건식이나 논리 연산(논리 
       연산자 사용)을 할 때 사용한다.  
*/
  console.log(34 > 21) // 참이므로 true 출력
  console.log(34 < 21) // 거짓이므로 false 출력
  console.log(true > false)
/* 
      불 자료형의 값인 true, false도 크기 비교가 가능하다. 이때
      true를 1, false를 0으로 변환한뒤 연산된다. 
*/

//  불(논리) 자료형과 조건문 
  if (273 < 52) {
    console.log('273은 52보다 작다.')
  }

  if (273 > 52) {
    console.log('273은 52보다 큽니다.')
  }

/*
     위의 예제는 조건문 중 if조건문이다. (조건문에서 정리!) 
     
     조건문 괄호()안에는 조건식(불표현식)이 들어가며, 
     조건식이 참이면 중괄호{} 속 문장을 실행하고 거짓이면
     중괄호 속 문장을 무시한다. 
     즉 조건식(불표현식)이 참인 두 번째 조건문만 출력한다.  
*/

  /*
     2. undefined와 null
           
      1) undefined
              : undefined자료형은 '값이 할당되지 않은 상태'를
                나타낼 때 사용된다. 
               - undefined 자료형이자, 값이다. 
               - 변수에 어떠한 값도 입력하지 않으면 undefined 값이
                 자동으로 할당된다
           
      2) null
              : '비어있는 값, 존재하지 않는 값, 알 수 없는 값'을 
                 나타낼 때 사용
               - null값은 undefined와는 다르게 객체 자료형에 속한다. 
               - 값으로 할당할 수 있음
  */

  let example1;
  let example2 = null;

  console.log(example1)
  console.log(example2)

}
