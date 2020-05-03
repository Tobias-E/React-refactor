// eslint-disable-next-line
import React from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import example from '../assets/images/shop/creek_classic_cd.jpg';

const colors = {
	orange: '#A39161',
	black: '#000',
	white: '#FFF',
	grey: '#E1E1E1',
};

const Shop = () => {
	return (
		<main css={css``}>
			<div
				className='main__breadCrumps'
				css={css`
					padding: 0.7rem;
					margin: 0 70% 0 3%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
				`}
			>
				<a
					href='/'
					css={css`
						color: ${colors.orange};
					`}
				>
					Home
				</a>
				<i>/</i>
				<p>Category</p>
			</div>
			<div
				className='main__grid'
				css={css`
					display: grid;
					grid-template-columns: 0.7fr 2fr 0.7fr;
					grid-gap: 1.5rem;
					margin: 1%;
				`}
			>
				<div
					className='grid__left'
					css={css`
						grid-column: 1 / 2;
					`}
				>
					<ul
						className='left__categoryContainer'
						css={css`
							background-color: ${colors.grey};
							padding: 1rem;
							margin: 0 0 2rem 0;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: baseline;
						`}
					>
						<li
							css={css`
								color: ${colors.orange};
								list-style: none;
							`}
						>
							Tube Amplifiers
						</li>
						<li
							css={css`
								color: ${colors.orange};
								list-style: none;
							`}
						>
							Speakers
						</li>
					</ul>
					<div
						className='left__priceContainer'
						css={css`
							background-color: ${colors.grey};
							padding: 1rem;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: baseline;
						`}
					>
						<h3
							css={css`
								margin: 0;
								text-transform: uppercase;
								color: ${colors.orange};
							`}
						>
							Shop by
						</h3>
						<h4
							css={css`
								text-transform: uppercase;
								margin: 0.8rem 0;
							`}
						>
							price
						</h4>
						<ul
							className='priceContainer__priceList'
							css={css`
								padding: 0;
								margin: 0;
							`}
						>
							<li
								css={css`
									color: ${colors.orange};
									list-style: none;
								`}
							>
								£0 - £799
							</li>
							<li
								css={css`
									color: ${colors.orange};
									list-style: none;
								`}
							>
								£800 - £999
							</li>
							<li
								css={css`
									color: ${colors.orange};
									list-style: none;
								`}
							>
								£1.000 - £1.499
							</li>
						</ul>
					</div>
				</div>
				<div
					className='grid__center'
					css={css`
						grid-column: 2 / 3;
					`}
				>
					<h2
						className='center__category'
						css={css`
							margin: 0 0 0.8rem 0;
							font-weight: bold;
						`}
					>
						Speakers
					</h2>
					<div
						className='center__sort'
						css={css`
							background-color: ${colors.grey};
							padding: 0.5rem;
							display: flex;
							flex-direction: row;
							justify-content: space-around;
						`}
					>
						<div
							className='sort__control'
							css={css`
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
							`}
						>
							<p
								css={css`
									text-transform: uppercase;
									font-weight: bold;
								`}
							>
								sort by:
							</p>
							<button
								css={css`
									background-color: ${colors.white};
								`}
							>
								Price
							</button>
						</div>
						<p className='sort__count'>4 item(s)</p>
						<div
							className='sort__total'
							css={css`
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
							`}
						>
							<p
								css={css`
									text-transform: uppercase;
								`}
							>
								show:
							</p>
							<button
								css={css`
									background-color: ${colors.white};
								`}
							>
								300
							</button>
						</div>
					</div>
					<div
						className='center__productsContainer'
						css={css`
							display: grid;
							grid-template-columns: 1fr 1fr 1fr 1fr;
						`}
					>
						<section
							className='productsContainer__product'
							css={css`
								height: 12rem;
								padding: 0.625rem;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: center;
							`}
						>
							<img
								src={example}
								alt='product'
								css={css`
									object-fit: scale-down;
									max-width: 100%;
									filter: drop-shadow(0px 0px 1px #e1e1e1)
										drop-shadow(
											0px 0px 10px rgba(0, 0, 0, 0.3)
										);
								`}
							/>
							<h4
								css={css`
									margin: 0;
									text-transform: uppercase;
								`}
							>
								Parasound
							</h4>
							<h5
								css={css`
									margin: 0;
									color: ${colors.orange};
									font-weight: bold;
								`}
							>
								3298 kr
							</h5>
							<button
								css={css`
									color: ${colors.white};
									background-color: ${colors.orange};
									border: 0;
									padding: 5% 15%;
									text-transform: uppercase;
								`}
							>
								Add to cart
							</button>
						</section>
						<section
							className='productsContainer__product'
							css={css`
								height: 12rem;
								padding: 0.625rem;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: center;
							`}
						>
							<img
								src={example}
								alt='product'
								css={css`
									object-fit: scale-down;
									max-width: 100%;
									filter: drop-shadow(0px 0px 1px #e1e1e1)
										drop-shadow(
											0px 0px 10px rgba(0, 0, 0, 0.3)
										);
								`}
							/>
							<h4
								css={css`
									margin: 0;
									text-transform: uppercase;
								`}
							>
								Parasound
							</h4>
							<h5
								css={css`
									margin: 0;
									color: ${colors.orange};
									font-weight: bold;
								`}
							>
								3298 kr
							</h5>
							<button
								css={css`
									color: ${colors.white};
									background-color: ${colors.orange};
									border: 0;
									padding: 5% 15%;
									text-transform: uppercase;
								`}
							>
								Add to cart
							</button>
						</section>
						<section
							className='productsContainer__product'
							css={css`
								height: 12rem;
								padding: 0.625rem;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: center;
							`}
						>
							<img
								src={example}
								alt='product'
								css={css`
									object-fit: scale-down;
									max-width: 100%;
									filter: drop-shadow(0px 0px 1px #e1e1e1)
										drop-shadow(
											0px 0px 10px rgba(0, 0, 0, 0.3)
										);
								`}
							/>
							<h4
								css={css`
									margin: 0;
									text-transform: uppercase;
								`}
							>
								Parasound
							</h4>
							<h5
								css={css`
									margin: 0;
									color: ${colors.orange};
									font-weight: bold;
								`}
							>
								3298 kr
							</h5>
							<button
								css={css`
									color: ${colors.white};
									background-color: ${colors.orange};
									border: 0;
									padding: 5% 15%;
									text-transform: uppercase;
								`}
							>
								Add to cart
							</button>
						</section>
						<section
							className='productsContainer__product'
							css={css`
								height: 12rem;
								padding: 0.625rem;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: center;
							`}
						>
							<img
								src={example}
								alt='product'
								css={css`
									object-fit: scale-down;
									max-width: 100%;
									filter: drop-shadow(0px 0px 1px #e1e1e1)
										drop-shadow(
											0px 0px 10px rgba(0, 0, 0, 0.3)
										);
								`}
							/>
							<h4
								css={css`
									margin: 0;
									text-transform: uppercase;
								`}
							>
								Parasound
							</h4>
							<h5
								css={css`
									margin: 0;
									color: ${colors.orange};
									font-weight: bold;
								`}
							>
								3298 kr
							</h5>
							<button
								css={css`
									color: ${colors.white};
									background-color: ${colors.orange};
									border: 0;
									padding: 5% 15%;
									text-transform: uppercase;
								`}
							>
								Add to cart
							</button>
						</section>
						<section
							className='productsContainer__product'
							css={css`
								height: 12rem;
								padding: 0.625rem;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: center;
							`}
						>
							<img
								src={example}
								alt='product'
								css={css`
									object-fit: scale-down;
									max-width: 100%;
									filter: drop-shadow(0px 0px 1px #e1e1e1)
										drop-shadow(
											0px 0px 10px rgba(0, 0, 0, 0.3)
										);
								`}
							/>
							<h4
								css={css`
									margin: 0;
									text-transform: uppercase;
								`}
							>
								Parasound
							</h4>
							<h5
								css={css`
									margin: 0;
									color: ${colors.orange};
									font-weight: bold;
								`}
							>
								3298 kr
							</h5>
							<button
								css={css`
									color: ${colors.white};
									background-color: ${colors.orange};
									border: 0;
									padding: 5% 15%;
									text-transform: uppercase;
								`}
							>
								Add to cart
							</button>
						</section>
					</div>
				</div>
				<div
					className='grid__right'
					css={css`
						grid-column: 3 / 4;
					`}
				>
					<h3
						css={css`
							margin: 0;
							text-transform: uppercase;
							color: ${colors.orange};
						`}
					>
						Manufacturer
					</h3>
					<ul className='right__manufacturerContainer'>
						<li
							css={css`
								text-transform: uppercase;
								list-style: none;
							`}
						>
							Jolida
						</li>
						<li
							css={css`
								text-transform: uppercase;
								list-style: none;
							`}
						>
							Parasound
						</li>
						<li
							css={css`
								text-transform: uppercase;
								list-style: none;
							`}
						>
							Harbeth
						</li>
					</ul>
					<p
						css={css`
							color: ${colors.orange};
							font-weight: bold;
						`}
					>
						View All
					</p>
				</div>
			</div>
		</main>
	);
};

export default Shop;
