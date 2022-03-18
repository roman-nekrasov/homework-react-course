import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import bg1 from "../../assets/bg1.jpg"
import style from "./style.module.css"
import { pokemons } from "../../assets/pokemons";


function HomePage({onChangePage}) {
	const onClickButton = (page) => {
		onChangePage && onChangePage(page)
	}

	return (
		<>
			<Header
				title="This is title!"
				descr="This is description!"
				onClickButton={onClickButton}
			/>
			<Layout
				title="Some title 1"
				urlBg={bg1}
			>
				<div>
					<p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
					Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
					<p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
				</div>
			</Layout>
			<Layout
				title="Cards"
				colorBg="#826ecc"
			>
				<div className={style.flex}>
					{
						pokemons.map(item => <PokemonCard
							key={item.id}
							id={item.id}
							type={item.type}
							values={item.values}
							name={item.name}
							img={item.img}
						/>)
					}
				</div>
			</Layout>
			<Layout
				title="Some title 3"
				urlBg={bg1}
			>
				<div>
					<p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
					Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
					<p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.</p>
				</div>
			</Layout>

			<Footer />
		</>
	);
}

export default HomePage;
