// const p = "(()())()";
// const p = ")(";
const p = "()))((()";

function solution(p) {
  if (isCorrect(p)) return p;

  if (p.length === 0) return "";

  let { u, v } = isBalance(p); 

  if (isCorrect(u)) return u + solution(v);

  let result = "(" + solution(v) + ")";

  for (p of u.substring(1, u.length - 1).split("")) result += p === "(" ? ")" : "(";
  
  return result;
}

function isCorrect(str) {

  let items = str.split("");
  let stack = [];

  items.map((item) => {
    switch (item) {
      case "(": stack.push(item); break;
      case ")": if (stack.length !== 0) stack.pop(); else return false;
    }
  });

  return stack.length === 0;
}

function isBalance(str) {

  let items = str.split("");
  let open = 0; let close = 0;
  let u = ""; let v = "";

  for (let item of items) {
    u += item; 
    item === "(" ? open++ : close++;
    if (open !== 0 && close !== 0 && open === close) break;
  }
  v = str.substring(u.length);

  return { u, v };
}