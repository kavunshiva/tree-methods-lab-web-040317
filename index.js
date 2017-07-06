function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(currentNode, newNode){
  if(newNode.data < currentNode.data){
    if(currentNode.left){
      findOrAdd(currentNode.left, newNode)
    } else {
      currentNode.left = newNode
    }
  }
  if(newNode.data > currentNode.data){
    if(currentNode.right){
      findOrAdd(currentNode.right, newNode)
    } else {
      currentNode.right = newNode
    }
  }
  return true
}

function min(rootNode){
  if (rootNode.left){
    return min(rootNode.left)
  } else {
    return rootNode
  }
}
function max(rootNode){
  if (rootNode.right){
    return max(rootNode.right)
  } else {
    return rootNode
  }
}
