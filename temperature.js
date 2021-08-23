class Temperature {
  fromCelcius(to, x) {
    if (to == 'celcius') {
      return x;
    }
    if (to == 'farenheit') {
      return (9 / 5) * x + 32;
    }
    if (to == 'reamur') {
      return (4 / 5) * x;
    }
  }

  fromFarenheit(to, x) {
    if (to == 'farenheit') {
      return x;
    }
    if (to == 'celcius') {
      return (5 / 9) * (x - 32);
    }
    if (to == 'reamur') {
      return (4 / 9) * (x - 32);
    }
  }

  fromReamur(to, x) {
    if (to == 'reamur') {
      return x;
    }
    if (to == 'celcius') {
      return (5 / 4) * x;
    }
    if (to == 'farenheit') {
      return (9 / 4) * x + 32;
    }
  }
}

module.exports = Temperature;