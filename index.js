var request = require('request-promise');
var Iconv = require('iconv').Iconv;
var parseCsv = require('csv-parse/lib/sync');
var moment = require('moment');

class ArrayExtra extends Array{
    constructor(base){
        super()
        Object.assign(this, base);
    }
    convert(callback) {
        var results = new ArrayExtra();
        this.forEach(function(item, index) {
            callback(item, index, function(result){
                results.push(result);
            })
        })
        return results;
    }
    divide(size, callback) {
        for(var index = 0; index < this.length; index += size) {
            callback(this.slice(index, index + size))
        }
    }
    sortByValue(callback) {
        return this.sort(function(a, b) {
            var _a = callback(a),
                _b = callback(b);
            return _a > _b ? 1: (_a < _b ? -1: 0);
        })
    }
}

exports.getHolidays = function() {
    var iconv = new Iconv('SHIFT-JIS', 'UTF-8//TRANSLIT//IGNORE');
    return request({
        uri: 'http://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv',
        encoding: null,
    })
        .then(function(body) {
            return new ArrayExtra(parseCsv(iconv.convert(body).toString()))
                .convert(function(line, i, resultCallback) {
                    new ArrayExtra(line)
                        .divide(2, function(chunk) {
                            var date = moment(chunk[1], 'YYYY/M/D');
                            date.isValid() && resultCallback({
                                date: date.format('YYYY-MM-DD'),
                                name: chunk[0],
                            })
                        })
                })
                .sortByValue(function(item) {
                    return item.date;
                })
        })
}
