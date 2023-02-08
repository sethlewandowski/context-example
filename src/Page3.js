import { useContext } from 'react';
import { SharedContext } from './context';

export default function Page3() {
    const { context } = useContext(SharedContext);
    const [num, setNum] = context;

    return <div>num = {num}</div>;
}
