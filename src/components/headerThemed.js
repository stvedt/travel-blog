import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import SocialMenu from "./socialMenu";

const Header = ({ siteTitle }) => (
	<React.Fragment>
  <header className="site-header mo-left header header-transparent">
		<div className="container">
			<div className="top-bar">
				<div className="row d-flex justify-content-between align-items-center">
					<div className="dlab-topbar-left">
						<button className="btn gray radius-xl" type="button">Subscribe</button>
					</div>
					<div className="logo-header">
						<Link to="/"><img src="/images/logo-white.png" alt=""/></Link>
					</div>
					<div className="dlab-topbar-right topbar-social">
						<SocialMenu />
					</div>
				</div>
			</div>
		</div>
		{/*<!-- main header --> */}
		<div className="sticky-header main-bar-wraper navbar-expand-lg">
				<div className="main-bar clearfix ">
						<div className="container">
							<div className="header-content-bx">
								{/*<!-- website logo --> */}
								<div className="logo-header">
									<a href="index.html"><img src={"/images/logo-white.png"} alt=""/></a>
								</div>
								{/*<!-- nav toggle button --> */}
								<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/*<!-- main nav --> */}
								<div className="header-nav navbar-collapse collapse justify-content-center" id="navbarNavDropdown">
									<div className="logo-header">
										<a href="index.html"><img src={"/images/logo-white.png"} alt=""/></a>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active">
											<a href="/">Home <i className="fa fa-chevron-down"></i></a>
											<ul className="sub-menu">
												<li><a href="index.html">Home 01</a></li>
												<li><a href="index-2.html">Home 02</a></li>
												<li><a href="index-3.html">Home 03</a></li>
												<li><a href="index-4.html">Home 04</a></li>
												<li><a href="index-5.html">Home 05</a></li>
											</ul>	
										</li>
										<li>
											<a href="/">Post Layout <i className="fa fa-chevron-down"></i></a>
											<ul className="sub-menu">
												<li><a href="post-standart.html">Post Standart</a></li>
												<li><a href="post-left-sidebar.html">Post Left Sidebar</a></li>
												<li><a href="post-full-width.html">Post Full Width</a></li>
												<li><a href="post-slide-show.html">Post Slide Show</a></li>
												<li><a href="post-with-small-side-image.html">Post Small Side Image</a></li>
												<li><a href="post-gallery.html">Post Gallery</a></li>
												<li><a href="post-gallery-alternative.html">Post Gallery Alt</a></li>
												<li><a href="post-link.html">Post Link</a></li>
												<li><a href="post-quote.html">Post Quote</a></li>
												<li><a href="post-audio.html">Post Audio</a></li>
												<li><a href="post-video.html">Post Video</a></li>
												<li><a href="post-navigation.html">Post With Navigation</a></li>
												<li><a href="post-open-gutenberg.html">Post Open Gutenberg</a></li>
											</ul>
										</li>
										<li className="has-mega-menu post-slider life-style">
											<a href="/">Category<i className="fa fa-chevron-down"></i></a>
											<div className="mega-menu">
												<div className="life-style-bx">
													<div className="life-style-tabs">
														<ul>
															<li><a href="/" id="st-all" className="post-tabs active">All</a></li>
															<li><a href="/" id="st-beauty" className="post-tabs">Beauty</a></li>
															<li><a href="/" id="st-lifestyle" className="post-tabs">Lifestyle</a></li>
															<li><a href="/" id="st-fashion" className="post-tabs">Fashion</a></li>
															<li><a href="/" id="st-travel" className="post-tabs">Travel</a></li>
														</ul>
													</div>
													<div className="life-style-post text-center">
														<div id="all" className="life-style-post-bx show">
															<div className="header-blog-carousel owl-carousel owl-btn-center-lr">
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-standart.html"><img src="/images/category/pic8.jpg" alt="" /></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-standart.html">Cobalt Leather</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-left-sidebar.html"><img src="/images/category/pic9.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-left-sidebar.html">Styling Harvey</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-full-width.html"><img src="/images/category/pic10.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-full-width.html">Denim for Spring</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-slide-show.html"><img src="/images/category/pic11.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-slide-show.html">Clarins Mascara</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div id="beauty" className="life-style-post-bx">
															<div className="header-blog-carousel owl-carousel owl-btn-center-lr">
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-standart.html"><img src="/images/category/beauty/pic1.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-standart.html">Cobalt Leather</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-left-sidebar.html"><img src="/images/category/beauty/pic2.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-left-sidebar.html">Styling Harvey</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-full-width.html"><img src="/images/category/beauty/pic3.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-full-width.html">Dress Like a Parisian</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-slide-show.html"><img src="/images/category/beauty/pic4.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-slide-show.html">Clarins Mascara</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div id="lifestyle" className="life-style-post-bx">
															<div className="header-blog-carousel owl-carousel owl-btn-center-lr">
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-standart.html"><img src="/images/category/lifestyle/pic1.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-standart.html">Cobalt Leather</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-left-sidebar.html"><img src="/images/category/lifestyle/pic2.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-left-sidebar.html">Styling Harvey</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-full-width.html"><img src="/images/category/lifestyle/pic3.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-full-width.html">Dress Like a Parisian</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-slide-show.html"><img src="/images/category/lifestyle/pic4.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-slide-show.html">Clarins Mascara</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div id="fashion" className="life-style-post-bx">
															<div className="header-blog-carousel owl-carousel owl-btn-center-lr">
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-standart.html"><img src="/images/category/fashion/pic1.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-standart.html">Cobalt Leather</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-left-sidebar.html"><img src="/images/category/fashion/pic2.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-left-sidebar.html">Styling Harvey</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-full-width.html"><img src="/images/category/fashion/pic3.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-full-width.html">Dress Like a Parisian</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-slide-show.html"><img src="/images/category/fashion/pic4.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-slide-show.html">Clarins Mascara</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div id="travel" className="life-style-post-bx">
															<div className="header-blog-carousel owl-carousel owl-btn-center-lr">
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-standart.html"><img src="/images/category/travel/pic1.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-standart.html">Cobalt Leather</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-left-sidebar.html"><img src="/images/category/travel/pic2.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-left-sidebar.html">Styling Harvey</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-full-width.html"><img src="/images/category/travel/pic3.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-full-width.html">Dress Like a Parisian</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
																<div className="item">
																	<div className="blog-post blog-sm">
																		<div className="dlab-post-media">
																			<a href="post-slide-show.html"><img src="/images/category/travel/pic4.jpg" alt=""/></a>
																		</div>
																		<div className="dlab-post-info">
																			<div className="dlab-post-title ">
																				<h5 className="post-title"><a href="post-slide-show.html">Clarins Mascara</a></h5>
																			</div>
																			<div className="date">
																				25 January, 2019
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li>
											<a href="/">Shop<i className="fa fa-chevron-down"></i></a>
											<ul className="sub-menu">
												<li><a href="shop.html">Shop</a></li>
												<li><a href="shop-product.html">Shop Product</a></li>
												<li><a href="shop-cart.html">Cart</a></li>
												<li><a href="shop-checkout.html">Checkout</a></li>
											</ul>
										</li>
										<li><a href="about-us.html">About</a></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
									<div className="social-menu">
										<ul>
											<li><a href="/"><i className="fa fa-facebook"></i></a></li>
											<li><a href="/"><i className="fa fa-twitter"></i></a></li>
											<li><a href="/"><i className="fa fa-google-plus"></i></a></li>
											<li><a href="/"><i className="fa fa-facebook"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
				</div>
		</div>
		{/*<!-- main header END --> */}
		</header>
		{/* <!-- Content --> */}
    <div className="page-content bg-white">
        {/* <!-- Slider Banner --> */}
		{/* <!-- inner page banner --> */}
        <div className="dlab-bnr-inr dlab-bnr-inr-md overlay-black-middle" style={	{backgroundImage:`url(${'images/banner/pic5.jpg'})`}}>
			<div className="container">
                <div className="dlab-bnr-inr-entry align-b text-white">
					<p>Fashion</p>
                    <h1>Ready for the summer</h1>
					<span className="line"></span>
                </div>
            </div>
				</div>
			</div>
		{/* <!-- inner page banner end --></div> */}
	</React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
