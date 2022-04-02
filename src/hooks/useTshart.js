import { useEffect, useState } from "react";


const useTshart = () => {
    const [tSharts, setTsharts] = useState([]);

    useEffect(() => {
        fetch('tShart.json')
            .then(res => res.json())
            .then(data => setTsharts(data));

    }, []);
    return [tSharts, setTsharts];

}
export default useTshart;


