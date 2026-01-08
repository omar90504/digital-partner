import { asset } from '../../assets/assets'

const PPCAgencyOne = () => {
    return (
        <section
            className="ppc-agencey-home-1"
            style={{
                backgroundImage: ` url(${asset.ppc_agency_bg})`,
            }}
        >
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="ppc-agencey-area-1-shep-1 blur-1"
            />
            <div className="container">
                <div className="ppc-agencey-wrapper">
                    <div className="row justify-content-xl-between justify-content-lg-between">
                        <div className="col-xl-5 col-lg-6 col-md-12">
                            <div className="ppc-agencey-text">
                                <div className="title">
                                    <div className="main-title">
                                        <h3 className="split-collab">
                                            Best PPC Agency in <br />
                                            Europe: Winner{' '}
                                            <span>
                                                <img
                                                    src={asset.text_shep_1}
                                                    alt=""
                                                />
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                                <p className="font-size-1-16">
                                    Paid search marketing is the quickest and
                                    most controllable <br />
                                    way to get your business in front of people
                                    who are looking <br /> for your products or
                                    services. Because you only pay for <br />{' '}
                                    qualified traffic, it is easy to control.
                                </p>
                                <div className="ppc-agencey-play">
                                    <a
                                        href="https://www.youtube.com/watch?v=XbZDL435xw0&t=97s"
                                        className="popup-video-1"
                                    >
                                        <div className="video-main">
                                            <div className="promo-video">
                                                <div className="waves-block">
                                                    <div className="waves wave-1"></div>
                                                    <div className="waves wave-2"></div>
                                                    <div className="waves wave-3"></div>
                                                </div>
                                            </div>
                                            <span className="popup-video-btn-home-1 video video-popup mfp-iframe">
                                                <svg
                                                    width="22"
                                                    height="26"
                                                    viewBox="0 0 22 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M20.3456 9.79627L5.30195 0.52306C4.21357 -0.146991 2.8977 -0.17485 1.78191 0.448538C0.666121 1.07183 0 2.20712 0 3.48519V21.9471C0 23.8796 1.5571 25.4603 3.47089 25.4707C3.47612 25.4707 3.48134 25.4708 3.48646 25.4708C4.08453 25.4707 4.70777 25.2833 5.28986 24.9281C5.75814 24.6424 5.90614 24.0312 5.62044 23.5629C5.33474 23.0946 4.72344 22.9467 4.25531 23.2324C3.98304 23.3984 3.71714 23.4843 3.48159 23.4843C2.7595 23.4804 1.98637 22.8618 1.98637 21.9472V3.48524C1.98637 2.93697 2.27212 2.45009 2.7507 2.18269C3.22932 1.9153 3.7937 1.92724 4.25999 2.21433L19.3037 11.4875C19.7559 11.7659 20.0146 12.2301 20.0135 12.7611C20.0124 13.2921 19.7518 13.7552 19.2972 14.0327L8.42048 20.6923C7.95266 20.9788 7.8056 21.5902 8.09205 22.058C8.37845 22.5258 8.98989 22.6729 9.45772 22.3864L20.3331 15.7276C21.3744 15.0924 21.9975 13.985 22 12.7651C22.0025 11.5454 21.3838 10.4354 20.3456 9.79627Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="font-size-1-24">
                                            Play Now
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 col-md-6 col-sm-6">
                            <div className="ppc-agencey-item-1 ppc-agencey-item">
                                <div className="ppc-agencey-img ppc-agencey-img-1 vre-reveal-one">
                                    <img
                                        src={asset.ppc_agency_1}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <h5 className="font-size-1-30">
                                        SEO Strategy
                                    </h5>
                                </div>
                                <div className="ppc-agencey-img ppc-agencey-img-2 vre-reveal-one">
                                    <img
                                        src={asset.ppc_agency_2}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <h5 className="font-size-1-30">
                                        Optimization
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="ppc-agencey-item-2 ppc-agencey-item">
                                <div className="ppc-agencey-img ppc-agencey-img-3 vre-reveal-one">
                                    <img
                                        src={asset.ppc_agency_3}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <h5 className="font-size-1-30">
                                        SEO Analysis
                                    </h5>
                                </div>
                                <div className="ppc-agencey-img ppc-agencey-img-4 vre-reveal-one">
                                    <img
                                        src={asset.ppc_agency_4}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <h5 className="font-size-1-30">
                                        Web & Mobile
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PPCAgencyOne
