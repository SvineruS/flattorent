import React from 'react';
import {Link, NavLink, Outlet, useParams} from "react-router-dom";
import {flats} from "../flats";


function NavItem({href, children, classes}: { href: string, children: string, classes?: string }) {
    const className = ({isActive}: { isActive: boolean }) =>
        "nav-link " + (classes || "") + (isActive ? " active" : "")
    return <li className="nav-item" role="presentation">
        <NavLink className={className} to={href}>{children}</NavLink>
    </li>;


}

function NavItems() {
    const {flatId} = useParams();
    const flat = flats[+(flatId || 0)]

    return <ul className="nav navbar-nav ml-auto">
        {flat && <NavItem classes={"disabled active"} href="">{flat?.address}</NavItem>}
        <NavItem href="/">Список квартир</NavItem>
        <NavItem href="/rules">Інформація, контакти</NavItem>
    </ul>;
}

function Nav() {


    return <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient"
                style={{paddingTop: "10px", paddingBottom: "10px"}}>
        <div className="container">
            <Link className="navbar-brand logo" to="/" style={{fontSize: "30px"}}>FlatToRent</Link>
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
                <span className="sr-only">Навігація</span>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <NavItems/>
            </div>
        </div>
    </nav>;
}

function Root() {
    return (
      <div className="App">
          <Nav/>


          <main className="page projects-page">
              <section className="portfolio-block projects-cards" style={{padding: 0}}>
                  <div className="container">

                      <Outlet/>

                  </div>
              </section>
          </main>

          <footer className="page-footer">
              <a href="https://t.me/svinerus" className="text-muted">© Flat to Rent. All rights reserved.</a>
          </footer>
      </div>
    );
}

export default Root;
