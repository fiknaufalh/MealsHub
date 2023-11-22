type WelcomingTextProps = {
    name: string
}

export default function WelcomingText({ name }: WelcomingTextProps) {
    return (
        <div className="leading-normal">
            <h1 className="text-2xl font-normal text-gray-700">Welcome to <span className="font-bold">{name}</span></h1>
        </div>
    )
}