//Simple example of recursion in js (no fibonacci!)

const countDown = (num) => {
  console.log(num);
  if(num > 0) countDown(num-1);
}
