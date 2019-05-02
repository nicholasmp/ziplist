/*
*First Try: 25:00+ DNF
* Second Try: 14:58 RX
 */
const alpha = ['a', 'b', 'c'];
const num = [1, 2, 3];

function zipList(list1, list2) {
  const list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i], list2[i]);
  }
  return list;
}
console.log(zipList(alpha, num));
function zipListTheEasyWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheEasyWay(alpha, num));
