// 拉平有序二维数组，输入有序递增的二维数组，[[1,4,7],[2,5,6],[3,8,9]] => [1,2,3,4,...]

function flattenTwoArray(arr) {
  const result = [];

  while (arr.length) {
    let recordOperateObject = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (current.length) {
        recordOperateObject =
          current[0] > recordOperateObject[0] ? recordOperateObject : current;
        result.push(recordOperateObject.shift());
      } else {
        arr.splice(i, 1);
        i--;
        continue;
      }
    }
  }

  return result;
}
