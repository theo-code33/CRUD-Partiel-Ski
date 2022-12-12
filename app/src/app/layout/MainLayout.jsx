import FilterForm from "../components/FilterForm";

const MainLayout = ({children}) => {
    return ( 
        <>
        <FilterForm />
        {children}
        </>
     );
}
 
export default MainLayout;