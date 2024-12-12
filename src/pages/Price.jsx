import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price (props){
    //our api key from coinapi.io
    const apiKey = "7B69B116-408B-454B-8C51-D4F256B53C73";

    //Grabbing the currency symbloe from the URL params
    const params = useParams();
    const symbol = params.symbol;

    //Using the other two variables to create our URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    //State to hold the coin data 
    const [coin, setCoin] = useState("null");

    // Function to fetch coin data.
    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch(e){
            console.error(e);
        }
    };

    //useEffect to run getCoin when component mounts
    useEffect(() => {
        getCoin();
    }, []);

    // loaded function for when data is fetched.
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };

    // Function for when data doesn't exit.
    const loading = () => {
        return <h1>Loading...</h1>;
    }

    // If coin has data, run the loaded function; otherwise, run loading
    return coin && coin.rate ? loading() : loading();

}

//API Key: 7B69B116-408B-454B-8C51-D4F256B53C73
