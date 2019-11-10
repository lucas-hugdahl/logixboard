export default (input, rowDelimiter, colDelimeter, colNames) => {
    let res = {
        columns: colNames,
        data: []
    };
    let rowObj = {};
    let formatedColName = null;
    input.split(rowDelimiter).map((row,index) => {
        rowObj = {};
        row.split(colDelimeter).map((colValue, index) => {
            formatedColName = colNames[index].split(" ").join("_").toLowerCase();
            rowObj[formatedColName] = colValue.trim();
        })
        res.data.push(rowObj);
    });

    res.data = res.data.slice(2, res.data.length - 1);
    return  res;
}

