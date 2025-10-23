import NavBar from "@/components/navbar/NavBar";


const PortofolioLayout = ( { children } : { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <NavBar/>
        </>
    );
}

export default PortofolioLayout;
