function findMinArrowShots(points: number[][]): number {
  // Sort the points in descending order based on the first coordinate (x) of each point
  points.sort((a, b) => b[0] - a[0]);

  // Initialize the answer with 1 (at least one arrow is needed to start)
  let ans = 1;
  // Initialize the current position with the x-coordinate of the first point
  let currPos = points[0][0];

  // Loop through each point (x, y) in the sorted array
  for (const [x, y] of points) {
    // If the y-coordinate of the current point is less than the current position,
    // it means the current arrow cannot burst this balloon, so we need a new arrow.
    if (y < currPos) {
      // Update the current position with the x-coordinate of the current point
      currPos = x;
      // Increment the answer (a new arrow is needed)
      ans++;
    }
  }

  // Return the minimum number of arrows needed
  return ans;
}
