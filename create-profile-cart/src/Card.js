import React from "react";
import "./Card.css"
class Card extends React.Component {
    render() {
        const profile=this.props
        return (
            <div className="card">
                <div className="flex-container">
                    <div>
                    <img className="p-img" src={profile.avatar_url}/>
                    </div>
                    
                    <div>
                        <h4>{profile.name}</h4>
                        <p>{profile.company}</p>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Card