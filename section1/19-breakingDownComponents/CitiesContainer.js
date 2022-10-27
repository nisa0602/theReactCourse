class CitiesContainer extends React.Component{
    render(){
        const cities = this.props.data.map((city, i) => {
            //const randomImage = `http://lorempixel.com/${400+i}/300/city/`;
            const randomImage = `http://placeimg.com/400/200/arch/${i}`;
            return(
                <City key={i} city={city} image={randomImage}/>
            )
        })
        return(
            <div className="row">
                 <div className="cities center-align">
                    {cities}
                 </div>
            </div>
        )
    }
}