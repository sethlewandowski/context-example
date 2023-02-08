import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedContext } from './context';

export default function Page1() {
    const navigate = useNavigate();
    const { changeContext } = useContext(SharedContext);
    const numState = useState(0);

    useEffect(() => {
        changeContext(numState);
    }, []);

    const onClick = () => {
        navigate('/page2');
    };

    return <button onClick={onClick}>Next</button>;
}
