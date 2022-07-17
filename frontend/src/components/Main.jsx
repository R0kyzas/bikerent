import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bikes from "./Bikes";
import AddBike from "./AddBike";
import Meetups from "./Meetups";
import Navbar from "./Navbar";

const Main = () => {
    return(
        <main>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Meetups />} />
                    <Route path="/bikes" element={<Bikes />} />
                    <Route path="/bikes/add" element={<AddBike />} />
                </Routes>
            </Router>
        </main>
    )
}

export default Main;