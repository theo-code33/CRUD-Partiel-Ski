import FilterForm from "../components/FilterForm";

const MainLayout = ({children, setPostsFiltered, posts}) => {
    return ( 
        <>
        <h1 className="title-app">ThomasAuSki.com</h1>
        <FilterForm setPostsFiltered={setPostsFiltered} posts={posts}/>
        {children}
        </>
     );
}
 
export default MainLayout;