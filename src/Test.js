import { useSelector } from 'react-redux';

export default function Test(name) {
    const val = useSelector(state => name === 'a' ? state.a : state.b);
    return (
        <div>
            <h1>{name} : {val}</h1>
        </div>
    )
}