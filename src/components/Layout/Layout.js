import style from './style.module.css'

const Layout = ({title, descr, urlBg, colorBg, children}) => {
	const layoutStyle = {}
	if(urlBg) {
		layoutStyle["background"] = `url(${urlBg})`
	}
	if(colorBg) {
		layoutStyle["backgroundColor"] = colorBg
	}

	return (
		<>
			<section style={layoutStyle} className={style.root}>
				<div className={style.wrapper}>
					<article>
						<div className={style.title}>
							<h3>{title}</h3>
							<span className={style.separator}></span>
						</div>
						<div className={`${style.desc} ${style.full}`}>
							{children}
						</div>
					</article>
				</div>
			</section>
		</>
	)
}

export default Layout