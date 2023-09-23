import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import './layout.css'
import "./main/main.css"
import background from "./backgroundimg.jpg"

const Layout = () => {

    return (
        <div className="layout" style={{backgroundImage: `url(${background})`}}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout;