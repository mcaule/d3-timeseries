function createRandomData(n, range, rand) {
  if (range == null) range = [0, 100];
  if (rand == null) rand = 1 / 20;

  var num = range[0] + Math.floor(Math.random() * (range[1] - range[0]));
  var num2 = range[0] + Math.floor(Math.random() * (range[1] - range[0]));
  var num3 = num;
  var d = new Date("2013-01-01");
  var data = [];
  var rgen = d3.randomNormal(0, (range[1] - range[0]) * rand);
  for (var i = 0; i < n; i++) {
    data.push({
      date: d,
      n: num,
      n2: num2,
      n3: num3,
      ci_up: num3 * 1.05,
      ci_down: num3 * 0.95
    });
    d = new Date(d.getTime() + 1000 * 60 * 60 * 24);
    num = num + rgen();
    num3 = num + rgen() / 3;
    num = Math.min(Math.max(num, range[0]), range[1]);
    num2 = num2 + rgen();
    num2 = Math.min(Math.max(num2, range[0]), range[1]);
  }
  return data;
}
