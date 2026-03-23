export default function Card(){
    return (
        <>
            <div className="card" style="width: 18rem;">
                <img src="/Car.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p style={{fontWeight : "bold"}} className="card-text">BMW M4</p>
                    <p className="card-text">R$89,900</p>
                </div>
            </div>
        </>
    )
}