import patterndivider from "../assets/pattern-divider-desktop.svg"
const Advice = ({advices}) => {
    console.log('this is the component file')
    console.log(advices.slip)
    return (
                <div className="advice_slip">
                    <p className="advice_id">ADVICE #{advices.slip.id}</p>
                    <p className="actualAdvice">"{advices.slip.advice}"</p>
                    <img src={patterndivider} alt="some cool divider thing" />
                </div>
    );   
}
export default Advice;