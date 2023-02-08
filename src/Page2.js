import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedContext } from './context';

export default function Page2() {
    const navigate = useNavigate();
    const { context, setContext } = useContext(SharedContext);

    const onClick = () => {
        setContext(2);
        navigate('/page3');
    };

    return (<>
	<button onClick={onClick}>Next</button>;
	<div>currentContext: {context}</div>
	</>)
}
