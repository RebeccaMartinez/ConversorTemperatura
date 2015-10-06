var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0.0 Celsius, 273.1 Kelvin', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius, 273.1 Kelvin");
    });
    test('45C = 113.0 Farenheit, 318.1 Kelvin', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit, 318.1 Kelvin");
    });
    test('-5.4F = -20.8 Celsius, 252.4 Kelvin', function() {
        original.value = "-5.4F";
        calculate();
        assert.deepEqual(converted.innerHTML, "-20.8 Celsius, 252.4 Kelvin");
    });
    test('78K = -195.1 Celsius, -319.3 Farenheit', function() {
        original.value = "78K";
        calculate();
        assert.deepEqual(converted.innerHTML, "-195.1 Celsius, -319.3 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
