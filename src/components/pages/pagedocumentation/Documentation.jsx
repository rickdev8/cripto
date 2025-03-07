import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Documentation.css'

const Documentation = () => {

    const [dados, Setdados] = useState({})

    useEffect(() => {
        const fetchDados = async() => {
            const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
            Setdados(await response.data)
        }

        fetchDados()
    }, [dados])

    return (
        <>
        <h1>Preço do BITCOIN atual: {JSON.stringify(dados.price)}</h1>
        </>
    )
}

export default Documentation