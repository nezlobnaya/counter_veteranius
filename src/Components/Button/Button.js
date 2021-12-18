
const Button = ({ onClick, name}) => (
    //props used in your code: onClick, children
    <button onClick={onClick}>
        {name}
    </button>
);

export default Button;