function tableToGraph(friends) {
  const graph = {};
  const rows = [...friends.matchAll(/<tr>(.*?)<\/tr>/g)].slice(1).map(r => r[1]);
  for (row of rows){
    const cols = [...row.matchAll(/<td>(.*?)<\/td>/g)].map(c => c[1]);
    const key = cols[0];
    const vals = cols[1].split(', ').filter(c => c.length > 0);

    graph[key] = [];

    for (val of vals){
      if (graph[key].indexOf(val) < 0) graph[key].push(val)

      if (val in graph){
        if (graph[val].indexOf(key) < 0) graph[val].push(key)
      }else{
        graph[val] = [key]
      }
    }
  }
  return graph;
}

if (require.main === module) {
  function printResults(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  // add your own tests in here
  // const friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
  // const result = {
  //   Fred: ["Jane", "Carol", "Anesh", "Xi"],
  //   Jane: ["Fred"],
  //   Carol: ["Fred", "Anesh", "Janelle"],
  //   Anesh: ["Fred", "Carol"],
  //   Xi: ["Fred"],
  //   Janelle: ["Carol"]
  // };

  // console.log("Expecting: ");
  // console.log(printResults(result));
  // console.log("");
  // console.log("Got: ");
  // console.log(printResults(tableToGraph(friends)));

  // console.log("");

  let friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr></table>";
  console.log(tableToGraph(friends));
}

module.exports = tableToGraph;

// Please add your pseudocode to this file
// And a written explanation of your solution
