import React from "react";
import StyleJobCategory from './JobCategory.module.scss';

export const JobCategory = React.memo(() => {
    return (
        <div className={StyleJobCategory.section}>
            <h5>Category:</h5>
            <ul>
                <li>Jobs:</li>
                <li>
                    Technologies and IT
                    <ul>
                        <li>Programming and development</li>
                        <li>Testing and QA</li>
                        <li>Product and project management</li>
                        <li>Network administration</li>
                        <li>Support and customer service</li>
                        <li>Telecommunications and communications</li>
                        <li>Science and Engineering</li>
                        <li>Other</li>
                    </ul>
                </li>
                <li>
                    Marketing, design and media
                    <ul>
                        <li>Marketing</li>
                        <li>advertising and PR</li>
                        <li>Media and Design</li>
                        <li>Journalism and publishing</li>
                    </ul>
                </li>
                <li>
                    Service sector
                    <ul>
                        <li>Transport and auto business</li>
                        <li>Trade and sales</li>
                        <li>Restaurants, clubs and cooking</li>
                        <li>Tourism and hotels</li>
                        <li>Beauty, fitness and sports</li>
                        <li>Cleaning works</li>
                        <li>Security</li>
                        <li>Other</li>
                    </ul>
                </li>
                <li>
                    Business and law
                    <ul>
                        <li>Finance</li>
                        <li>accounting and auditing</li>
                        <li>Law and notary</li>
                        <li>Clerical and human resource management</li>
                        <li>Secretary</li>
                    </ul>
                </li>
                <li>
                    Craft and production
                    <ul>
                        <li>Construction and repair</li>
                        <li>Warehouses and logistics</li>
                        <li>Factories and production</li>
                        <li>Agriculture and animal husbandry</li>
                        <li>Other</li>
                    </ul>
                </li>
                <li>
                    Other work
                    <ul>
                        <li>Education and training</li>
                        <li>Medicine and pharmacy</li>
                        <li>Work for students</li>
                        <li>Other</li>
                    </ul>
                </li>
                <li>Looking for a Job</li>
            </ul>
        </div>
    )
})