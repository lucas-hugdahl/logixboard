export default (input, rowDelimiter, colDelimeter, colNames) => {
    let res = {
        columnDictionary: {},
        data: []
    };
    let rowObj = {};
    let formatedColName = null;
    let rows = input.split(rowDelimiter);
    rows.shift();
    rows.pop();
    rows.map((row,index) => {
        if (index == 0) {
            row.split(colDelimeter).map((colValue, index) => {
                formatedColName = colValue.split(" ").join("_").toLowerCase();
                res.columnDictionary[formatedColName] = colValue;
            })
        } else {
            rowObj = {};
            row.split(colDelimeter).map((colValue, index) => {
                formatedColName = colNames[index].split(" ").join("_").toLowerCase();
                rowObj[formatedColName] = colValue.trim();
            })
            res.data.push(rowObj);
        }
    });
    return  res;
}

