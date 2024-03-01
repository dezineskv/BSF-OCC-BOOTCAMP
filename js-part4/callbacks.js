// callbacks
const getData = (callback) => {
    setTimeout(() => {
        const data = "This is the data";
        callback(data);
    }, 5000)
}

const processData = (data) => {
    console.log("Processed data:", data)
}

getData(processData);