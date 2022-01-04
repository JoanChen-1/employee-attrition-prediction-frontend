const base_url = 'localhost:5000'
async function getResult (){
    setTimeout(console.log("handle predict"), 1000);
    return {
        "message": "Success",
        "result": {
            "probs": [
                {'user_id':442, 'Attrition': 76},
                {'user_id':443, 'Attrition': 20},
                {'user_id':444, 'Attrition': 55}
            ],
            "img": 
            "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"+
            "OLA10DUAOKAnUAVwBjAGwAZwBoAFoCVgNZA3EDXwNJAxwDMQNkA0ICsQBlAGcAawBo"+
            "AF4A5wBXA18DlwN7AzIDVAJ7AuoCCgGcAJUAZQBsAGMAVwB0AFcDVwOFAnMCOAN5A+A"+
            "D0gLOAIsAhABXAGwAawBVAHwAXQNYA/EBzAOFA7EDoQPtAG4BdgCGAFgAXQBXAFUAe"+
            "QBbA1MDbgI6A3gDcANkA38DmQKGAJAAaQCZAGgAXACaAFkD2AJlAQsDHQPfAu4Cnw"+
            "N4A0YCeABgAGoAVwBfAOIAWgNMA1EBzAI0A70C3wKPA7sDOAP0AGEAUgBbAKsAgQF"+
            "TA1ID2QLYAiUC5gIpA9UDtANtA1oBYgBUAFMAxQAvAksDUANYA7QBAgK+A8MD4AOS"+
            "AxgDMgFYAFkAWQCRAPcCRgNLA08DrAHcAa8D+QPoA4EDkwJkAFgAVgBtANMB2gI/A0"+
            "YDSgOcAn0BAAP7A88DhgNUAoMAVwBTAI0ACgN/AjoDRwNwAzgDPwI1A78DsgOSA4A"+
            "BdQBfAF8AGgLeAmsCAAgAAAAAAAACAQAAAAAAAAABAAAAAAAAAAAAAAAAAAACDGJw"+
            "bGlzdDAw1AECAwQFBgcIVWZsYWdzVXZhbHVlWXRpbWVzY2FsZVVlcG9jaBABEwAGl"+
            "Fbjk5fEEjuaygAQAAgRFx0nLS84PQAAAAAAAAEBAAAAAAAAAAkAAAAAAAAAAAAAAA"+
            "AAAAA////qRQABHSv//8cBAABqlP//ojcAAG+FAAAAWwAAAEAAAAAXAAAAgEU4NTU5"+
            "OTM3LTkxRDQtNDhBNS1CMEIzLUZDMkYyNENGQTREMQAAAAD5QQABJ5oAAAAREAAA"+
            "DAADW78AABmBNzU0MjRBNTAtM0RDOC00QTY5LTgwNTctOTU4QjkxOEI5QTAxAAAAA"+
            "GIiAARBJWJwbGlzdDAwCAgAAAAAAAABAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAACW"+
            "JwbGlzdDAwCAgAAAAAAAABAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAMUcUAB//"+
            "nAAAABgAAAAEAAAAIAAAABQAAAAwAAAAFQXBwbGUAaVBob25lIDEyIFBybyBiYWNr"+
            "IHRyaXBsZSBjYW1lcmEgNC4ybW0gZi8xLjYAAAANAAEAAgAAAAJOAAAAAAIABQAAA"+
            "AMAAAmWAAMAAgAAAAJFAAAAAAQABQAAAAMAAAmuAAUAAQAAAAEAAAAAAAYABQAAAA"+
            "EAAAnGAAwAAgAAAAJLAAAAAA0ABQAAAAEAAAnOABAAAgAAAAJNAAAAABEABQAAAAE"+
            "AAAnWABcAAgAAAAJNAAAAABgABQAAAAEAAAneAB8ABQAAAAEAAAnmAAAAAAAAABkA"+
            "AAABAAAAAAAAAAEAABUhAAAAZAAAAHkAAAABAAAAIAAAAAEAAAJJAAAAZAACUDYAA"+
            "CCzAAAAAAAAAAEACGlJAAAH/AAIaUkAAAf8AAABEwAAAAMAAP/iAFhNUEYATU0AKg"+
            "AAAAgAA7AAAAcAAAAEMDEwMLABAAQAAAABAAAAArACAAcAAAAgAAAAMgAAAAAAAwA"+
            "AACqbBQAAAAAAAAAAAAAAAAAFV/wAKpDrAAAAAP/iAjRJQ0NfUFJPRklMRQABAQAAA"+
            "iRhcHBsBAAAAG1udHJSR0IgWFlaIAfhAAcABwANABYAIGFjc3BBUFBMAAAAAEFQUEw"+
            "AAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbMoalYIlfxBNOJkT1dHqFYIAA"+
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAZWNwcnQAAAF"+
            "kAAAAI3d0cHQAAAGIAAAAFHJYWVoAAAGcAAAAFGdYWVoAAAGwAAAAFGJYWVoAAAHEA"+
            "AAAFHJUUkMAAAHYAAAAIGNoYWQAAAH4AAAALGJUUkMAAAHYAAAAIGdUUkMAAAHYAAA"+
            "AIGRlc2MAAAAAAAAAC0Rpc3BsYXkgUDMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
            "AAAAAAAAAAdGV4dAAAAABDb3B5cmlnaHQgQXBwbGUgSW5jLiwgMjAxNwAAWFlaIAA"+
            "AAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAg98AAD2/////u1hZWiAAAAAAAABKvwAAs"+
            "TcAAAq5WFlaIAAAAAAAACg4AAARCwAAyLlwYXJhAAAAAAADAAAAAmZmAADypwAADV"+
            "kAABPQAAAKW3NmMzIAAAAAAAEMQgAABd7///MmAAAHkwAA/ZD///ui///9owAAA9w"+
            "AAMBu/9sAhAACAgICAgIDAgIDBAMDAwQFBAQEBAUHBQUFBQUHCAcHBwcHBwgICAgI"+
            "CAgICgoKCgoKCwsLCwsNDQ0NDQ0NDQ0NAQICAgMDAwYDAwYNCQcJDQ0NDQ0NDQ0ND"+
            "Q0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ3/3QAEAPz/wA"+
            "ARCAvQD8ADASIAAhEBAxEB/8QBogAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQo"+
            "LEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8"+
            "CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWp"+
            "zdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHy"+
            "MnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foBAAMBAQEBAQEBAQEAAAAAAAA"+
            "BAgMEBQYHCAkKCxEAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIF"+
            "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"
        }
    }
}

export const getPredictValues = async(data, params) => {
    const bodyData = JSON.stringify({ "data": data });
    console.log(bodyData);
    const endpoint = `${base_url}/predict/${params}`;
    console.log(endpoint);
    const response = await getResult();
    if (params === "nonplot"){
        return response.result.probs;
    }
    else{
        return [response.result.probs, response.result.img];
    }
    // console.log("getPredictValues...");
    // try{
    //     const endpoint = `${base_url}/predict/${params}`;
    //     const bodyData = JSON.stringify({ "data": data });
    //     const response = await fetch(endpoint, {
    //         method: "POST",
    //         body: bodyData,
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-type": "application/json",
    //         }
    //     });
    
    //     if (response.ok) {
    //         const jsonResponse = await response.json();
    //         if (jsonResponse.status === "Success"){
    //             return jsonResponse.result;
    //         }
    //         else{
    //             alert(jsonResponse.message);
    //             return "fail";
    //         }
    //     }
    //     else{
    //         alert(response.status + " " + response.statusText);
    //         return "fail";
    //     }
    // }
    // catch(e){
    //     return "fail";
    // }
}