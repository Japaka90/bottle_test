function water(red, blue) {
  var j = 0;
  var res = [];
  for (var i = 0; i < red.length; i++) {
    if (blue.length < j+1) {
      break;
    }

    while (red[i] > 0) {

      if (red[i] >= blue[j]) {
          if (res.length == j+1) {
              res[j] += ', затем налито из красной бутылки № ' + Number(i+1) + ': ' + blue[j] + ' л.';
          }
          else {
            res.push(['в синюю бутылку № '+ Number(j+1) + ' налито из красной бутылки № ' + Number(i+1)+ ': ' + blue[j] + ' л.']);
          }
          red[i] = red[i] - blue[j];
          j += 1;
      }
      else {
        if (blue.length < j+1) {
          break;
        }
        else {
          if (res.length == j+1) {
            res[j] += ', затем налито из красной бутылки № ' + Number(i+1) + ': ' + red[i] + ' л.';
          }
          else {
            res.push(['в синюю бутылку № '+ Number(j+1) + ' налито из красной бутылки № ' + Number(i+1) + ': ' + red[i] + ' л.']);
          }
        }
        blue[j] = blue[j] - red[i];
        red[i] = 0;
      }
    }

  }
  return res;
}

exports.water = water;
