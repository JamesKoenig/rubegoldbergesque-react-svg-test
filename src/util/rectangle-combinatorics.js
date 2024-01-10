/*
 * there's almost definitely some way of cleaning this fn up
 *
 * the whiteboard-idea was to take the set:
 * {
 *  (x1,y1),
 *  (x2,y1),
 *  (x1,y2),
 *  (x2,y2)
 * }, where (x_i,y_j) \in \mathbb{R}^2;
 *                i,j \in {0,1} \sub \mathbb{N}
 *
 * that generates the indexing pattern:
 * {
 *   (1,1)
 *   (2,1)
 *   (1,2)
 *   (2,2)
 * }
 *
 * which, when 1 is subracted from all values gives:
 * { (0,0), (1,0), (0,1), (1,1) }
 *
 * which could be generated from:
 * {
 *   0b00 //0
 *   0b01 //1
 *   0b10 //2
 *   0b11 //3
 * }
 *
 * which bitwise can then be used as a basis for indexing the four corners from
 * 0 to 3
 *
 * hence the monstrosity below
 */
const genRectPoints = (topLeft, bottomRight) => {
  const xs = [topLeft[0],bottomRight[0]]; //x1,x2
  const ys = [topLeft[1],bottomRight[1]]; //y1,y2

  let res = Array(4);

  for(let idx = 0; idx < 4; idx ++ ){
    res[idx] = [
      xs[ idx    &1],
      ys[(idx>>1)&1]  //(0b1X>>1)&1 == 1, (0b0X>>1)&1 == 0
    ];
  }

  return res;
};

const genLineParams = (rectPointsArr) => {
  //I used this twice so I const'd it
  const baseLen = rectPointsArr.length;

  // empty array to store our values, the 6 is from nCr(4,2)
  // i.e. unique pair-combinations of 4 elements
  let res = Array(6);
  let resIdx = 0;

  // populate the res array with objects with the proper x1,y1,x2,y2 key-values
  //   note I could probably just do the argument-array.each but that gave me a
  //    headache when trying to figure out how to incorporate the inner for loop
  for(let idx = 0; idx < baseLen; idx++) {
    //starting from the top left edge generate pairs from each edge
    let [x1,y1] = rectPointsArr[idx];

    //
    for(let jdx = idx+1; jdx < baseLen; jdx++) {
      let [x2,y2] = rectPointsArr[jdx];

      //save our pair so that it can be splatted directly into an svg line 
      //element
      res[resIdx] = {x1,y1,x2,y2};
      resIdx++;
    }
  }

  return res;
};

/*
 * all of the above is just to avoid writing out six points manually smdh
 */

const lineParamsFromDiagonal = (tL,bR) =>
  genLineParams(genRectPoints(tL,bR));

export {
  lineParamsFromDiagonal,
};
