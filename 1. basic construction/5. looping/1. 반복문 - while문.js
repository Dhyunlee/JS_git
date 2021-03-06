/* 반복문 */

// 예제1)
let i = 0;
while (i < 5) {
    console.log(i);
    i++
}

// 예제2)
let i = 1;
let isFun = false;

while (!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
};

// 예제3 - 5초동안 반복  
let seconds = (new Date()).getSeconds();

while ((new Date()).getSeconds() < seconds + 5) {
    console.log(seconds + "초부터 시작했습니다. ");
}

// 예제4 - 배열을 반복문과 함께 활용!
let array = [10, 13, 20, 21, 30, 40, 50, 60];
let i = 0; // i의 값은 인덱스 번호를 의미

while (array[i] < 40) { // i의 값(=인덱스의 요소)이 40 될때까지 반복!
    console.log(array[i]); // 인덱스의 요소 출력
    i++; //출력 후 1만큼 증가 후, 조건문이 맞으면(반복문 조건식이 거짓) 종료!
}
