async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=66100d5d-87c7-4f53-b4c8-5473dc3d8465&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "66100d5d-87c7-4f53-b4c8-5473dc3d8465").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
