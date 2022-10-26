// change this Component to a class!
class CatNav extends React.Component{
    render(){
        console.log(this.props)
        const navLinks = this.props.data.map((link, i) => {
            return(
                <li key={i} className="cat-link left valign-wrapper">
                    <i className="material-icons">{link.icon}</i>{link.title}
                </li>
            )
        })
        console.log(navLinks)
        return(
            <div className="row">
                <ul className="cat-nav center-align">
                    {navLinks}
                </ul>
            </div>
        )
    }
}

{/*
        
*/}