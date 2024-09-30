interface ReceptProps {
    fo: string;
}

export function Recept(ReceptProps: ReceptProps) {
    return (
        <div>
            <h2>{ReceptProps.fo} személyre:</h2>
            <p>Forraljon fel {parseInt(ReceptProps.fo)} csésze vizet.</p>
            <p>Adjunk hozzá {parseInt(ReceptProps.fo)} kanál (tetszőleges) teát és {parseInt(ReceptProps.fo) * 0.5}</p>
            <p>Adjunk hozzá {parseInt(ReceptProps.fo) * 0.5} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.</p>
        </div>
    )
}