import { Component } from "react";

class CardSet extends Component{
    constructor(){
        super();
        this.state = {
            chosen: []
        }
    }
    saveButton = (index)=>{
        console.log(index)
        const copyOfChosen = [...this.state.chosen];
        copyOfChosen.push(this.props.cards[index]);
        this.setState({
            chosen: copyOfChosen
        })
    }
    render(){
        const chosenCards = this.state.chosen.map((card, i) => {
            return(
                <h3 key={i}>{card.course}</h3>
            )
        })
        const cardList = this.props.cards.map((card, i) => {
            console.dir(card.image)
            return(
                <div className="col s2" key={i}>
                    <div className="card hoverable small">
                        <div className="card-image">
                            <img src={card.image} />
                        </div>
                        <div className="card-content">
                            <p>{card.course}</p>
                            <p>{card.instructor}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">$9.99</a>
                        </div>
                    </div>
                    <button onClick={()=>{this.saveButton(i)}} className="btn waves-light waves-effect">save</button>
                </div>
            )
        })
        return(
           <div>
                {cardList}
                {chosenCards}
           </div>
        )
    }
}

export default CardSet;