
interface MainContentProps extends React.ComponentProps<"main">{}

export default function MainContent({
    children,
}: MainContentProps){
    return(
        <main className="mt-2 md:mt-5">
            {children}
        </main>
    )

}