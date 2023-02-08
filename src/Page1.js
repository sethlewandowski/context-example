import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedContext } from './context';

export default function Page1() {
    const navigate = useNavigate();
    const { setContext } = useContext(SharedContext);
    const numState = useState(1);

    useEffect(() => {
        setContext(numState);
    }, []);

    const onClick = () => {
        navigate('/page2');
    };

    return <button onClick={onClick}>Next</button>;
}
