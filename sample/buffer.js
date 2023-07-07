const buffer = Buffer.from("나는 버퍼입니다");
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const arr = [Buffer.from("띄엄"), Buffer.from("갸갹"), Buffer.from("유유")];

console.log(Buffer.concat(arr).toString());

console.log(Buffer.alloc(5));
