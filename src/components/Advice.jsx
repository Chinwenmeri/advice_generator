const Advice = ({advices}) => {
    console.log('this is the component file')
    return (
        <div>
        {
            advices.map((advice)=>(
                <div className="advice_slip" key={advice.id}>
                    <p>{advice.advice}</p>
                </div>
            ))
        }
        </div>
    );
}
 
export default Advice;