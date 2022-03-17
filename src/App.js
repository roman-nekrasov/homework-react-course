import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg1 from './assets/bg1.jpg'


function App() {
	return (
		<>
			<Header
				title="This is title!"
				descr="This is description!"
			/>
			<Layout
				title="Some title 1"
				descr="Some description 1"
				urlBg={bg1}
			/>
			<Layout
				title="Some title 2"
				descr="Some description 2"
				colorBg="#826ecc"
			/>
			<Layout
				title="Some title 3"
				descr="Some description 3"
				urlBg={bg1}
			/>
			<Footer />
		</>
	);
}

export default App;
