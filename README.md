# family_tree

node index.js
>>add p1
input add p1
{ Person: { p1: { name: 'p1' } }, add: [Function: add] }
true

>>add p2
input add p2
{
  Person: { p1: { name: 'p1' }, p2: { name: 'p2' } },
  add: [Function: add]
}
true

>>add relationship son
{ Relation: { son: true }, add: [Function: add] }
true

>>connect p1 as son of p2
{ op1: 'p1', relation: 'son', op2: 'p2' }
{ family_graph: { p2: { son: [Array] } }, add: [Function: add] }
true

>>count sons of p1
0

>>count sons of p2
1

