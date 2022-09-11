import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("Run Factorial");
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [color, setColor] = useState(false);
    const buttonColor = color ? "primary" : "danger";

    useEffect(() => {
        console.log("Render button Color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value : {value}</p>
                <p>Result factorial : {fact}</p>
                <button
                    className="btn btn-primary ms-md-2 mx-2 "
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2 mx-2 "
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn  ms-md-2 mx-2 btn-" + buttonColor}
                    onClick={() => setColor((prevState) => !prevState)}
                >
                    ChangeColor
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
