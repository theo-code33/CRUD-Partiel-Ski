import FilterForm from "../components/FilterForm";

const MainLayout = ({children, setPostsFiltered, posts}) => {
    return ( 
        <>
        <FilterForm setPostsFiltered={setPostsFiltered} posts={posts}/>
        {children}
        </>
     );
}
 
export default MainLayout;