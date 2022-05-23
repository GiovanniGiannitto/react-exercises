import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export class LanguageContext extends React.Component {
    render() {
        return (
            <div>
                <select><DisplayLanguage /></select>
            </div>
    }
}