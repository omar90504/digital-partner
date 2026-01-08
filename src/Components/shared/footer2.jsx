import React from 'react'
import { asset } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer2 = () => {
    return (
        <footer
            class="footer-area-home-2"
            // style="background-image: url('assets/images/home-2/footer-bg-home-2.png');"
            style={{
                backgroundImage: `url(${asset.footer_bg_home_2})`,
            }}
        >
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-12">
                        <div class="footer-subscribe">
                            <img src={asset.footer_img_1_home_2} alt="VRE" />
                            <h5 class="font-size-1-25">Subscribe now</h5>
                            <p class="font-size-1-18">
                                Industry's standard from dummy <br /> and make a
                                type book.{' '}
                            </p>
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email..."
                                />
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    class=" btn-3 btn-4"
                                />
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                        <div class="footer-menu-home-2">
                            <h5 class="font-size-1-25">Pages</h5>
                            <ul>
                                <li>
                                    <Link to="#">Home</Link>
                                </li>
                                <li>
                                    <Link to="#">About</Link>
                                </li>
                                <li>
                                    <Link to="#">Blog</Link>
                                </li>
                                <li>
                                    <Link to="#">Pricing Single</Link>
                                </li>
                                <li>
                                    <Link to="#">Services</Link>
                                </li>
                                <li>
                                    <Link to="#">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                        <div class="footer-menu-home-2">
                            <h5 class="font-size-1-25">Uitility Pages</h5>
                            <ul>
                                <li>
                                    <Link to="#">Styleguide</Link>
                                </li>
                                <li>
                                    <Link to="#">404 Not Found</Link>
                                </li>
                                <li>
                                    <Link to="#">Password Protected</Link>
                                </li>
                                <li>
                                    <Link to="#">Licenses</Link>
                                </li>
                                <li>
                                    <Link to="#">Changelog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                        <div class="footer-menu-home-2 responsive-575">
                            <h5 class="font-size-1-25">Follows</h5>
                            <ul>
                                <li>
                                    <Link to="#">Facebook</Link>
                                </li>
                                <li>
                                    <Link to="#">Twitter</Link>
                                </li>
                                <li>
                                    <Link to="#">Instagram</Link>
                                </li>
                                <li>
                                    <Link to="#">LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-8 col-lg-8">
                            <div class="footer-copyright">
                                <div class="footer-copyright-wrapper">
                                    <div class="footer-getin-touch">
                                        <h5 class="font-size-1-25">
                                            <span>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.28864 12.0757C8.27473 14.1121 9.92134 15.7545 11.9602 16.7353C12.1106 16.8065 12.277 16.8373 12.4429 16.8247C12.6088 16.8121 12.7686 16.7566 12.9065 16.6634L15.9011 14.6631C16.0334 14.5733 16.1863 14.5186 16.3455 14.5039C16.5047 14.4892 16.665 14.5151 16.8114 14.5792L22.4173 16.9869C22.6089 17.0666 22.769 17.2071 22.8729 17.3868C22.9768 17.5664 23.0187 17.7752 22.9923 17.9811C22.8146 19.3678 22.1377 20.6424 21.0883 21.5662C20.0388 22.4899 18.6887 22.9997 17.2906 23C12.9701 23 8.82648 21.2837 5.7714 18.2286C2.71632 15.1735 1 11.0299 1 6.70942C1.00032 5.3113 1.51006 3.9612 2.43384 2.91174C3.35763 1.86229 4.63215 1.18539 6.01894 1.00771C6.22477 0.981273 6.43359 1.02323 6.61324 1.12712C6.79288 1.23101 6.9334 1.39108 7.01314 1.58267L9.42079 7.20053C9.4834 7.34469 9.5096 7.50203 9.49706 7.6587C9.48453 7.81536 9.43366 7.96654 9.34892 8.09891L7.34854 11.1414C7.25948 11.279 7.20721 11.4372 7.19672 11.6008C7.18624 11.7643 7.21788 11.9279 7.28864 12.0757V12.0757Z"
                                                        stroke="#3AD879"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            Get in touch with
                                        </h5>
                                        <h5 class="footer-number font-size-1-25">
                                            +1 917 000 1212
                                        </h5>
                                        <p class="font-size-1-18">
                                            Contact us at @website_stock.com
                                        </p>
                                    </div>
                                    <div class="footer-location">
                                        <h5 class="font-size-1-25">
                                            <span>
                                                <svg
                                                    width="18"
                                                    height="23"
                                                    viewBox="0 0 18 23"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 22H17"
                                                        stroke="#1954ED"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                                                        stroke="#1954ED"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M17 9.07692C17 16.3462 9 22 9 22C9 22 1 16.3462 1 9.07692C1 6.93479 1.84285 4.88039 3.34315 3.36568C4.84344 1.85096 6.87827 1 9 1C11.1217 1 13.1566 1.85096 14.6569 3.36568C16.1571 4.88039 17 6.93479 17 9.07692V9.07692Z"
                                                        stroke="#1954ED"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            Location
                                        </h5>
                                        <p class="font-size-1-18">
                                            10 Suna House 65 Rivington Street{' '}
                                            <br />
                                            London EC2A 3QQ
                                        </p>
                                        <Link to="#" class="font-size-1-18">
                                            Location
                                        </Link>
                                    </div>
                                </div>
                                <div class="footer-author-copyright">
                                    <p class="font-size-1-18">
                                        Copyright © 2024 | Designed by Saidul
                                        Haque - Powered by website_stock
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2
