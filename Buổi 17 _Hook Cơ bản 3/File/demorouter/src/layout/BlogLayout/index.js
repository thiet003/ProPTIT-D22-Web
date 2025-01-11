import { Outlet} from "react-router-dom"
import Header from "../../component/Header"
import { createContext } from 'react';

export const AContext = createContext() 

const dataDemoContext = {
    name: "Data Demo useContext",
    text: "TMP"
}

const BlogLayout = () => {
    return (
        <div>
            <AContext.Provider value={dataDemoContext}>
                <Header/>
            </AContext.Provider>
            <main>
                <Outlet/>
            </main>
            <footer/>
        </div>
        
    )
}
export default BlogLayout
