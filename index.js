function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li')
  for (var i=0; i<rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML)+n 
  }
  return rankedLists
}

function deepestChild() {
  var currentNode = document.querySelector('#grand-node')
  var nextNode = currentNode.children[0]
  
  while (nextNode) {
    currentNode = nextNode
    nextNode=currentNode.children[0]
  }
  return currentNode
}