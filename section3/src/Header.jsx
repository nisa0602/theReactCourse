function Header(props){
    return(
        <>
            <h1>{props.temp}</h1>
            <h3>{props.isRaining}</h3>
        </>
    )
}

export default Header;