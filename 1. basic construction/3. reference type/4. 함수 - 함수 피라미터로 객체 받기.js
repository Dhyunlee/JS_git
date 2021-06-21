// 함수에서 객체를 파라미터로 받기     

const student1 = {
    name: "김철수",
    stuID: 123,
    class: "1반"
};
const student2 = {
    name: "신짱구",
    stuID: 456,
    class: "2반"
};

function stuInfo(value) {
    const text = `
        이름:${value.name} 
        학번:${value.stuID}
        학년:${value.class}
    `;
    console.log(text);
}

stuInfo(student1)
stuInfo(student2)