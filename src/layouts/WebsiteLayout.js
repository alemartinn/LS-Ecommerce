import Header from "../components/Header";
import Footer from "../components/Footer";


function WebsiteLayout(props) {

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )

}

export default WebsiteLayout