/* 
 [논리연산자를 좀 더 유용하게 사용하는 방법]       
  : 논리 연산자를 사용 할 때에는 true 혹은 false값을 사용해야 하는 것은 아니다. 
   문자열이나 숫자, 객체를 사용할 수 있고, 해당 값이 Truthy하냐 falsy하냐에 따라
   결과가 달라진다. 
 */

 const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이

/* getName()함수의 피라미터에 제대로된 객체가 주어지지
   않으면 오류가 발생한다. 
*/
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal.name; //에러 발생
}

const name = getName();
console.log(name);
/* 
   animal 객체가 undefined 이기 때문에,  undefined 에서 name 값을 
   조회 할 수 없어서 이렇게 에러가 발생하게 됩니다. 
*/

// 그렇다면, 만약 함수에 animal값이 제대로 주어졌을 때만 name을 조회하고,
// 그렇지 않을 때는 그냥 undefined를 반환하게 하고 싶으면 어떻게 해야할까?

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);

// 이렇게 하면 animal값이 주어지지 않아도, 에러가 발생하지 않게 된다. 
// 이러한 코드를 논리 연산자를 사용하면 코드를 단축시킬 수 있다. 

/* && 연산자로 코드 단축시키기 */

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined

//=====================================================

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
/*
 이게 작동하는 이유는, A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다. 
 반면, A 가 Falsy 한 값이라면 결과는 A 가 됩니다.
 
*/

console.log(true && 'hello'); // hello  
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1


/* 연산자로 코드 단축시키기 */
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

// 위 코드는 ||연산자를 사용하면 다음과 같이 단축시킬 수 있다. 
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

// A || B는 만약 A가 Truthy할 경우 결과는 A가 된다. 
// 반면 A가 Falsy하다면 결과는 b가 된다. 
