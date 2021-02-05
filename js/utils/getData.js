export const fetchData = (API_URL) => {
    let loaded = false;
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', API_URL, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                loaded = true;
                (xhttp.status === 200) ?
                    resolve(JSON.parse(xhttp.responseText))
                    :
                    reject(new Error('Error on get the data'))
            }
        });
        xhttp.send();
    });
}

