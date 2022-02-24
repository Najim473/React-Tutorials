import Clock from './Clock';
export default function ClockList({ quantities = [] }) {
    return (
        <>
            {quantities.map(() => (
                <Clock key={Math.random()} />
            ))}
        </>
    );
}
