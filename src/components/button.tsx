type Props = {
    name: string
    messageCount: number
}
export const Home = (page: Props) => {
    return (
        <div>
            <h1> {page.name} </h1>
            <p>
            The Current Count is {page.messageCount}
            </p>
        </div>
    )
}
