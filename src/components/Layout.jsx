import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
        <div className="body-box">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;